<template>
  <section>
    <h1 class="text-h4 text-md-h2 font-weight-bold mt-3 mb-10">Contact</h1>
    <v-form>
      <v-sheet class="rounded-xl pa-3 pa-md-10 mb-10">
        <v-card-title>{{ $t("contact.title") }}</v-card-title>
        <v-card-subtitle>{{ $t("contact.subtitle") }}</v-card-subtitle>
        <v-card-text>
          <div class="inline-form">
            <v-text-field color="secondary" v-model="message.fullname" :label="labels.fname" counter="25" :rules="rules.nameRules"></v-text-field>
            <v-text-field color="secondary" v-model="message.phone" :label="labels.number" :rules="rules.phoneRules"></v-text-field>
          </div>
          <v-text-field color="secondary" v-model="message.email" :label="labels.email" type="email" :rules="rules.emailRules"></v-text-field>
          <v-text-field color="secondary" v-model="message.subject" :label="labels.subject" counter="32" :rules="rules.subjectRules"></v-text-field>
          <v-textarea color="secondary" v-model="message.body" rows="4" :label="labels.message" :rules="rules.bodyRules" counter="250"></v-textarea>
          <v-btn outlined class="mt-3" color="secondary" @click="handleForm(message)">{{ labels.submit }}</v-btn>
        </v-card-text>
      </v-sheet>
    </v-form>

    <v-snackbar v-model="snackbar">
      {{ msg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="secondary"
          outlined
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: "contact.vue",
  data: () => ({
    valid: true,
    message: {
      fullname: '',
      phone: '',
      email: '',
      subject: '',
      body: '',
    },
    msg: '',
    snackbar: false,
  }),
  computed: {
    labels: function () {
      return {
        fname: this.$t('contact.labels.fname'),
        number: this.$t('contact.labels.number'),
        email: this.$t('contact.labels.email'),
        subject: this.$t('contact.labels.subject'),
        message: this.$t('contact.labels.message'),
        submit: this.$t('contact.labels.submit')
      }
    },
    rules: function () {
      return {
        nameRules: [
          v => (v && v.length <= 25) || this.$t("contact.nameRules"),
        ],
        phoneRules: [
          v => (v.length <= 10) || this.$t("contact.phoneRules"),
        ],
        subjectRules: [
          v => !!v || this.$t("contact.subjectRules.req"),
          v => (v && v.length <= 25) || this.$t("contact.subjectRules.count"),
        ],
        emailRules: [
          v => !!v || this.$t("contact.emailRules.req"),
          v => /.+@.+\..+/.test(v) || this.$t("contact.emailRules.count"),
        ],
        bodyRules: [
          v => !!v || this.$t("contact.bodyRules.req"),
          v => (v.length <= 250) || this.$t("contact.bodyRules.count"),
        ],
      }
    }
  },
  methods: {
    handleResponse: function (res) {
      this.msg = res.status === 'Failed' ? this.$t('common.emailError') : this.$t('common.emailSuccess')
      this.snackbar = true
    },
    handleForm: async function (data) {
      const BASE_URL = 'https://emailyt.com/DispatchEmail'
      const body = {
        authCode: 'b0d7adec-c95d-4b3b-aa47-955a076da7e5',
        toEmail: 'skodak95alexis@gmail.com',
        ToCCEmail: data.email,
        subject: data.subject,
        mailBody: `${data.email}, ${data.fullname?? 'Name not submitted'}, ${data.phone ?? 'Number not submitted'}, wrote: ${data.body}`
      }
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body)
      }
      try {
        const response = await fetch(BASE_URL, requestOptions)
        const msg = await response.json()
        this.handleResponse(msg)

      } catch (e) {
        this.handleResponse(e)
      }
    }
  }
}
</script>

<style scoped>
.inline-form {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>
