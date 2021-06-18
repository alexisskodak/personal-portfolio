<template>

  <section>
    <h1 class="text-h4 text-md-h2 font-weight-bold mt-3 mb-10">{{ $t("gallery.title") }}</h1>
    <v-sheet class="rounded-xl pa-5 pa-md-10 mb-10">
      <h3 class="text-h4 text-md-h3 font-weight-bold mb-3">
        {{ $t("gallery.sub") }}
      </h3>
      <p class="body-1">{{ $t("gallery.p1") }}</p>
    </v-sheet>
    <div class="photo-grid">
      <v-img
        :src="`photographs/${image}`"
        contain
        alt="Photo"
        v-for="image in images"
        :key="image"></v-img>
    </div>
  </section>

</template>

<script>
export default {
  name: "gallery.vue",
  data: () => ({
    images: [
      'cathedrale2.jpg.webp',
      'DSC_0008.jpg.webp',
      'DSC_0034.jpg.webp',
      'DSC_0061.jpg.webp',
      'DSC_0062.jpg.webp',
      'DSC_0069.jpg.webp',
      'DSC_0072.jpg.webp',
      'DSC_0075.jpg.webp',
      'DSC_0079_02.jpg.webp',
      'DSC_0080.jpg.webp',
      'DSC_0086.jpg.webp',
      'DSC_0094.jpg.webp',
      'DSC_0112.jpg.webp',
      'DSC_0120_01.jpg.webp',
      'DSC_0131.jpg.webp',
      'DSC_0156.jpg.webp',
      'DSC_5941.jpg.webp',
      'DSC_9874.jpg.webp',
      'DSC_9878.jpg.webp',
      'DSC_9880.jpg.webp',
      'DSC_9892.jpg.webp',
      'DSC_9900.jpg.webp',
      'DSC_9901.jpg.webp',
      'DSC_9904.jpg.webp',
      're_DSC_0625.webp',
      're_DSC_0630.webp',
      're_DSC_0649_01.webp',
      're_DSC_0680.webp',
      're_DSC_0691.webp',
      're_DSC_0695_01.webp',
      're_DSC_0805.webp'
    ]
  }),
}
</script>

<style scoped>
.photo-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 280px;
}
</style>
