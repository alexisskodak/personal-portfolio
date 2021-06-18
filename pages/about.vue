<template>

  <section>
    <h1 class="text-h4 text-md-h2 font-weight-bold mt-3 mb-10">{{ $t("about.title") }}</h1>
    <v-sheet class="rounded-xl">

      <div class="d-flex flex-wrap flex-sm-nowrap">
        <div class="pa-5 pa-md-10">
          <p class="body-1">
            {{ $t("about.p1") }}
            <br>
            {{ $t("about.p2") }}
          </p>
        </div>
        <v-img src="portrait/portrait.webp" width="225" class="ml-3 rounded-r-xl"></v-img>
      </div>


    </v-sheet>

  </section>

</template>

<script>
export default {
  name: "about.vue"
}
</script>

<style scoped>
</style>
