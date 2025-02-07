<template>
     <Loader :isLoading="isLoading" message="Veuillez patienter..." />

    <div class="container hidden" ref="container">
      <div class="card">
        <h1>Formation en Développement Web</h1>
        <p class="author">Proposée par Daniel</p>
        <p>Apprends à coder avec un accompagnement humain et personnalisé.</p>
  
        <!-- Section "Ce que je propose" -->
        <div class="features">
          <p class="title">💡 Ce que je propose :</p>
          <ul>
            <li>Un accompagnement adapté à ton niveau et à tes objectifs.</li>
            <li>Des séances en visio sur Teams, Discord ou Zoom.</li>
            <li>Des explications claires et un véritable soutien humain.</li>
          </ul>
        </div>
  
        <!-- Section tarif et Calendly -->
        <div class="pricing">
          <p class="price">
            💻 Séances de 1h : <span>15€</span>
          </p>
          <p>Réserve ta première visio gratuite pour définir tes besoins :</p>
          <div class="calendly-inline-widget" data-url="https://calendly.com/dnlokpe1/coiffure" style="width:600px;"></div>

        </div>
  
        <!-- Call to action -->
        <div class="cta">
          <p>Prêt à apprendre et progresser dans un cadre bienveillant ?</p>
          <button class="cta-button">Réserve une séance</button>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import Loader from '~/components/Loader.vue';

    const isLoading = ref(true);  
    const containerRef = useTemplateRef('container')

    onMounted(()=> {

      const container :  HTMLElement = containerRef.value as HTMLElement;
      const recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
      document.head.appendChild(recaptchaScript);
      console.log("container :",containerRef.value)
      setTimeout(()=>{
        isLoading.value = false;
        container.classList.remove("hidden");
      }, 3000)
  
    })
  </script>
  <style scoped>

  .hidden{
    opacity: 0;
  }

  /* Conteneur principal */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: linear-gradient(135deg, #1b0033, #002b55, #003577);
    min-height: calc(100vh - 60px);
  }
  
  /* Carte centrale */
  .card {
    max-width: 800px;
    width: 100%;
    background: linear-gradient(145deg, #320054, #001e3c);
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    padding: 30px;
    text-align: center;
    color: #d1d5db;
  }
  
  /* Titres principaux */
  .card h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
  }
  
  /* Nom de l'auteur */
  .card .author {
    font-size: 1.2rem;
    font-style: italic;
    color: #b3e5ff;
    margin-bottom: 20px;
  }
  
  /* Texte introductif */
  .card p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  /* Liste des fonctionnalités */
  .features {
    text-align: left;
    margin: 20px 0;
  }
  
  .features .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .features ul {
    padding-left: 20px;
    line-height: 1.8;
  }
  
  .features ul li {
    font-size: 1rem;
  }
  
  /* Section tarif et iframe Calendly */
  .pricing {
    background: rgba(0, 30, 60, 0.8);
    padding: 20px;
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
  }
  
  .pricing .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #89ff89;
  }
  
  .pricing .price span {
    color: #ffffff;
  }

  .calendly-inline-widget{
    overflow: hidden;
    scrollbar-width: 0;
    height: 850px;
    margin: auto;
  }
  
 
  
  /* Call-to-action */
  .cta {
    margin-top: 30px;
  }
  
  .cta-button {
    background: linear-gradient(145deg, #0045a5, #0082ff);
    color: #ffffff;
    font-size: 1rem;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  }
  </style>
  