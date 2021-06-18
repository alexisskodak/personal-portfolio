---
title: introduction
description: Learn how to use @nuxt/content.
---
## Recommendation system as an injectable service for PHP / Symfony
### Pearson Correlation Coefficient approach

This all happens within the Service Namespace, it could look something like this 
```php
<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;

class Recommendation {

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
}
```


First we separate the rate object (a key-value pair such as `product_id`: `rating`) into separate lists


```php

public function mapLists(User $user)
{
    // Retrieve user's ratings and its associated products
    $u = $user->getRatings();

    $p = array_map(function ($rateObject) {return $rateObject['product_id'];}, $u);
    $r = array_map(function ($rateObject) {return $rateObject['rate'];}, $u);

    return array_combine($p, $r);
}
```


Then we implement an algorithm that computes Pearson's Correlation Coefficient as a Class Method.

The method takes a `User` instance as an argument, usually the user in session passed by the controller.
as well as an abstract user entity, here called `$user2`.


```php
public function pearsonSim(User $user1, User $user2) 
{
    /**
     * the Pearson correlation coefficient is the covariance of two variables,
     * divided by the product of their standard deviations.
     * An useful metric to assess the similarity between two sets of data
     */
    $assoc1 = $this->mapLists($user1);
    $assoc2 = $this->mapLists($user2);

    $p1 = array_keys($assoc1);
    $p2 = array_keys($assoc2);

    // Create a list with common elements between user1 and user2
    $similar = [];
    foreach ($p1 as $product_id) {
        if (in_array($product_id, $p2)) {
            array_push($similar, $product_id);
        }
    }

    // If the list is empty, return 0
    $n = count($similar);
    if ($n == 0) {return 0;}

    $s1 = 0;
    $s2 = 0;
    $s1squared = 0;
    $s2squared = 0;
    $pSum = 0;
    foreach ($similar as $item) {
        // SUm of ratings
        $s1 += $assoc1[$item];
        $s2 += $assoc2[$item];

        // Sum of squared ratings
        $s1squared += pow($assoc1[$item], 2);
        $s2squared += pow($assoc2[$item], 2);

        // Sum of prduct of the two sets
        $pSum += $assoc1[$item] * $assoc2[$item];
    }

    // 1.) Compute the covariance
    $numerator = $pSum - ($s1 * $s2 / $n);

    // 2.) Then the product of the standard deviations
    $d1 = $s1squared - pow($s1, 2) / $n;
    $d2 = $s2squared - pow($s2, 2) / $n;
    $denominator = sqrt($d1 * $d2);

    if ($denominator == 0) {
        return 0;
    }

    // return Pearson Coefficient
    return $numerator / $denominator;
}
```

Then, the method below calls the PearsonSim method and returns
a list of recommended products by using a weighted average
of every other user's rankings.
Since this can be a computationally intensive operation,
there are a couple of tricks to avoid doing unnecessary calculations. Such as:

- Disregard all users who haven't yet given any ratings.
- Avoid comparing the user in session with himself
- Exclude all `product => rating` objects from users who score 0 or less in the PearsonSim call. This is also important from a business logic perspective. Since, a null or negative coefficient means that the compared users do not share common preferences.

To take this one step further, for large user databases for example,
one could easily define a threshold to filter even more strictly
which users' ratings are relevant to the current user.


```php

public function getRecommendations(User $user)
{
    $allUsers = $this->userRepository->findAll();
    $users = [];

    // Exclude users who haven't rated any products
    for ($i = 0; $i < count($allUsers); $i++) {
        if (!empty($allUsers[$i]->getRatings())) {
            array_push($users, $allUsers[$i]);
        }
    }
    
    // array consisting of weighted scores
    // i.e product => rating * coeff
    $totals = [];

    // Sum of similarities
    $simSums = [];  
    foreach ($users as $other) {

        // Do not compare the user with himself
        if ($other === $user) {
            continue;
        }

        $coeff = $this->pearsonSim($user, $other);

        // Disregard if the coefficient is less or equal to zero
        if ($coeff <= 0) {
            continue;
        }

        $ratings = $this->mapLists($other);
        $currentUserRatings = $this->mapLists($user);
           
        foreach ($ratings as $product => $rate) {

            // Only take into account products that have not been rated by currentUser
            if(!key_exists($product, $currentUserRatings)) {
                $totals += array($product => $rate * $coeff);
                $simSums += array($product => 0);
                $simSums[$product] += $coeff;
            }
        }
    }

    // Return a list of (sorted) normalized ratings
    $rankings = [];
    foreach ($totals as $productId => $pRate) {
        $rankings += array($productId => $pRate / $simSums[$productId]);
    }
    arsort($rankings);
    return $rankings;
}
```

Finally, the controller retrieves the results and passes them to the View
to be displayed on the User's welcome page.

Notes: This approach is far from being perfect and
can certainly be replaced by more sophisticated methods. It 
remains an interesting exercise and fulfills its purpose, which is above all,
being able to transform data into useful information.
Some problems can be addressed without changing the entire approach, 

For instance: 
- The algorithm does not take into account that some purchases will not be rated by the user.
- The algorithm assumes that all ratings are representative of the user's rational view of his purchase. For example, a user could be perfectly satisfied with X product, yet give a 0/5 rating because delivery took longer. This will impact the Pearson Score hence diminish the relevance of future suggestions.
- Lastly, other valuable interactions besides from rating products are not taken into account. such as adding a product to a wishlist or saving it for later purchase (for example in a basket/cart)
 
