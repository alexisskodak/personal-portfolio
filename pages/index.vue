<template>


  <section>
    <div>
      <h1 class="text-h4 text-md-h2 font-weight-black mt-3 mb-10">Alexis Skodak</h1>


      <div class="grid">
        <v-sheet class="pa-5 pa-md-10 rounded-xl custom-sheet">
          <h3 class="text-h4 text-md-h3 font-weight-bold mb-3">
            {{ $t("index.title1") }}
          </h3>

          <p>
            {{ $t("index.p1") }}
            <span class="font-weight-bold">Vue.js, Node.js, Python, Docker, PostgreSQL.</span>
          </p>
        </v-sheet>


        <v-sheet class="rounded-xl pa-5 pa-md-10 mb-10" id="sheet-2">

          <h3 class="text-h4 text-md-h3 font-weight-bold mb-3">{{ $t("index.list.title") }}</h3>
          <v-list class="mb-3" color="transparent">

            <v-list-item>
              <v-list-item-icon>
                <v-icon large>$vuetify.icons.mdiMonitorClean</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="font-weight-bold">{{ $t("index.list.pt1") }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon large>$vuetify.icons.mdiDatabaseCheck</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="font-weight-bold">{{ $t("index.list.pt2") }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon large>$vuetify.icons.mdiLinux</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="font-weight-bold">{{ $t("index.list.pt3") }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon large>$vuetify.icons.mdiViewDashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="font-weight-bold">{{ $t("index.list.pt4") }}</v-list-item-content>
            </v-list-item>
          </v-list>

        </v-sheet>
      </div>


      <v-sheet class="pa-5 pa-md-10 rounded-xl" id="sheet-3">
        <p>{{ $t("index.p2") }}</p>
        <v-btn color="secondary" outlined rounded :to="localePath('/work')" class="mr-3">{{ $t('common.work') }}</v-btn>
        <v-btn color="secondary" outlined rounded :to="localePath('/contact')">{{ $t('common.contact') }}</v-btn>
      </v-sheet>
    </div>
  </section>

</template>

<script>

export default {
  components: {}
}
</script>
<style scoped>

#sheet-2 {
  background: linear-gradient(27deg, rgba(131, 58, 180, 1) 24%, rgba(253, 29, 29, 1) 61%, rgba(252, 176, 69, 1) 90%);
}

@media screen and (max-width: 756px){
  .custom-sheet {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 757px){
  .custom-sheet {
    margin-bottom: 40px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}
</style>
