<template>
  <v-app dark>

    <v-app-bar dense fixed app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" id="navbar-icon"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <nuxt-link to="/">
          <v-img :src="require('@/static/logo_dark.png')" height="45" width="45"></v-img>
        </nuxt-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div id="links">
        <nuxt-link to="/" class="white--text text-decoration-none text-h6 mr-3">
          {{ $t("nav.home") }}
        </nuxt-link>
        <nuxt-link to="/about" class="white--text text-decoration-none text-h6 mr-3">
          {{ $t("nav.aboutme") }}
        </nuxt-link>
        <nuxt-link to="/work" class="white--text text-decoration-none text-h6 mr-3">
          {{ $t("nav.projects") }}
        </nuxt-link>
        <nuxt-link to="/gallery" class="white--text text-decoration-none text-h6 mr-3">
          {{ $t("nav.photography") }}
        </nuxt-link>
        <nuxt-link to="/contact" class="white--text text-decoration-none text-h6">
          {{ $t("nav.contact") }}
        </nuxt-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer app fixed bottom temporary clipped v-model="drawer">
      <v-list>

        <v-list-item class="text-h6">
          <nuxt-link to="/" class="white--text text-decoration-none">
            {{ $t("nav.home") }}
          </nuxt-link>
        </v-list-item>

        <v-list-item class="text-h6">
          <nuxt-link to="/about" class="white--text text-decoration-none">
            {{ $t("nav.aboutme") }}
          </nuxt-link>
        </v-list-item>

        <v-list-item class="text-h6">
          <nuxt-link to="/work" class="white--text text-decoration-none">
            {{ $t("nav.projects") }}
          </nuxt-link>
        </v-list-item>

        <v-list-item class="text-h6">
          <nuxt-link to="/gallery" class="white--text text-decoration-none">
            {{ $t("nav.photography") }}
          </nuxt-link>
        </v-list-item>
        <v-list-item class="text-h6">
          <nuxt-link to="/contact" class="white--text text-decoration-none">
            {{ $t("nav.contact") }}
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main id="bg">

      <div>
        <v-container class="py-0" id="container">
          <nuxt/>
        </v-container>

        <footer class="py-10" id="bg2">
          <p class="text-overline">follow me on social media</p>
          <div>
            <a href="https://github.com/sickb0i" class="mr-3">
              <v-icon large>$vuetify.icons.mdiGithub</v-icon>
            </a>
            <a href="https://www.linkedin.com/in/alexis-skodak/" class="mr-3">
              <v-icon large>$vuetify.icons.mdiLinkedin</v-icon>
            </a>
            <a href="https://www.instagram.com/alexisskodak/">
              <v-icon large>$vuetify.icons.mdiInstagram</v-icon>
            </a>
          </div>
        </footer>
      </div>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  }
}
</script>
<style>
@media screen and (max-width: 960px) {
  #links {
    display: none;
  }
}

@media screen and (min-width: 960px) {
  #navbar-icon {
    display: none;
  }
}

section {
  max-width: 880px;
  margin: auto;
}

footer {
  display: grid;
  place-items: center;
}

footer > div {
  display: flex;
}

#bg2 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1101%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c96 C 133.4%2c110.2 400.2%2c183.6 667%2c167 C 933.8%2c150.4 1067.4%2c23 1334%2c13 C 1600.6%2c3 1866.8%2c96.2 2000%2c117L2000 1000L0 1000z' fill='rgba(237%2c 194%2c 129%2c 0)'%3e%3c/path%3e%3cpath d='M 0%2c200 C 133.4%2c236.8 400.2%2c369.4 667%2c384 C 933.8%2c398.6 1067.4%2c276.8 1334%2c273 C 1600.6%2c269.2 1866.8%2c346.6 2000%2c365L2000 1000L0 1000z' fill='rgba(96%2c 27%2c 122%2c 0)'%3e%3c/path%3e%3cpath d='M 0%2c453 C 50%2c469 150%2c529.4 250%2c533 C 350%2c536.6 400%2c477.4 500%2c471 C 600%2c464.6 650%2c503.2 750%2c501 C 850%2c498.8 900%2c443.8 1000%2c460 C 1100%2c476.2 1150%2c592.6 1250%2c582 C 1350%2c571.4 1400%2c409.4 1500%2c407 C 1600%2c404.6 1650%2c559.4 1750%2c570 C 1850%2c580.6 1950%2c482 2000%2c460L2000 1000L0 1000z' fill='rgba(11%2c 223%2c 246%2c 0)'%3e%3c/path%3e%3cpath d='M 0%2c717 C 133.4%2c706 400.2%2c654 667%2c662 C 933.8%2c670 1067.4%2c759.8 1334%2c757 C 1600.6%2c754.2 1866.8%2c669.8 2000%2c648L2000 1000L0 1000z' fill='rgba(111%2c 90%2c 84%2c 0)'%3e%3c/path%3e%3cpath d='M 0%2c915 C 80%2c892.2 240%2c799.8 400%2c801 C 560%2c802.2 640%2c907.6 800%2c921 C 960%2c934.4 1040%2c868.6 1200%2c868 C 1360%2c867.4 1440%2c928.6 1600%2c918 C 1760%2c907.4 1920%2c835.6 2000%2c815L2000 1000L0 1000z' fill='rgba(246%2c 95%2c 57%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1101'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-position: bottom;
}

#bg {
  background-color: #121212;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1012%26quot%3b)' fill='none'%3e%3cpath d='M969.16-198.3C822.29-145.78 937.44 249.47 582.63 291.44 227.82 333.41 21.14 629.29-190.42 637.04' stroke='rgba(30%2c 30%2c 30%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1221.34-102.83C1042.93-5.86 1206.71 526.64 802.23 592.92 397.76 659.2 191.61 942.02-35.98 949.32' stroke='rgba(30%2c 30%2c 30%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1616.99-147.28C1404.04-76.64 1363.26 530.37 1045.85 544.97 728.45 559.57 760.29 409.97 474.72 409.97 189.15 409.97 50.3 544.06-96.42 544.97' stroke='rgba(30%2c 30%2c 30%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M884.94-184.33C686.12-102.05 651.76 506.65 381.32 513.66 110.88 520.67 24.12 222.58-122.3 211.26' stroke='rgba(30%2c 30%2c 30%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1440.71-2.04C1226.15-1.46 1046.07 138.13 595.67 148.05 145.28 157.97-7.51 607.32-249.36 623.25' stroke='rgba(30%2c 30%2c 30%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1012'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-attachment: fixed;
}

#container {
  margin-bottom: 200px;
}
</style>
