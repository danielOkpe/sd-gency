// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build:{
    transpile: ['vue-toastification'],
  },
  css:['/public/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt', [
    '@vee-validate/nuxt',
    {
      // disable or enable auto imports
      autoImports: true,
      // Use different names for components
      componentNames: {
        Form: 'VeeForm',
        Field: 'VeeField',
        FieldArray: 'VeeFieldArray',
        ErrorMessage: 'VeeErrorMessage',
      },
    },
  ], '@nuxtjs/google-fonts'] 
})