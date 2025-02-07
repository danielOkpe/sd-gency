<template>
    <div v-if="isLoading" class="loader-wrapper">
      <div class="spinner"></div>
      <p class="loading-text">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Loader",
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
      message: {
        type: String,
        default: "Chargement en cours...",
      },
    },
  };
  </script>
  
  <style scoped>
  /* Conteneur principal */
  .loader-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fond semi-transparent */
    z-index: 1000;
  }
  
  /* Animation de la roue */
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top: 5px solid #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  /* Animation au chargement */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Texte du chargement */
  .loading-text {
    margin-top: 15px;
    font-size: 1.2rem;
    color: #ffffff;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  </style>
  