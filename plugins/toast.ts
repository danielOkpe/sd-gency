// toast.js
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        hideProgressBar : true,
        timeout : 5000,
        position :"bottom-right",
    });
  })
