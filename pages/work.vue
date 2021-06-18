<template>

  <section>
    <h1 class="text-h4 text-md-h2 font-weight-bold mt-3 mb-10">{{ $t("work.title") }}</h1>

    <v-sheet class="rounded-xl pa-5 pa-md-10 mb-10" v-for="(item, key) in $t('work.projects')" :key="key">
      <div class="mb-5">

        <a class="text-overline white--text text-decoration-none" :href="item.link" v-if="item.link">
          {{ $t('common.link') }} <span><v-icon>$vuetify.icons.mdiLink</v-icon></span>
        </a>

        <h3 class="text-h4 text-md-h3 font-weight-bold">
          {{ item.title }}
        </h3>
        <p class="text-overline text-right font-weight-bold">{{ item.category }}</p>

      </div>
      <p class="body-1">{{ item.description }}</p>
      <p class="text-overline">{{ $t('common.stack') }}</p>
      <v-chip v-for="(el, index) in $t(item.stack)" :key="index" class="mr-3 mb-3" small color="secondary" outlined>{{el}}</v-chip>
    </v-sheet>

  </section>

</template>

<script>
export default {
  name: "work.vue"
}
</script>

<style scoped>

h3 {
  background: -webkit-radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
