<template>
    <div class="container">
      <section class="intro">
        <h2>Nos Services</h2>
        <p>
          Chers clients et collaborateurs, nos services sont spécialisés dans la création et l'optimisation de sites web,
          ainsi que dans le développement digital grâce au copywriting et au marketing de contenu.
          Découvrez ci-dessous nos offres et solutions adaptées à vos besoins.
        </p>
      </section>
  
      <section class="service">
        <h3>Création et Optimisation de Sites Web</h3>
        <div class="service-grid">
          <article class="card">
            <h4>Création</h4>
            <ul>
                <li>Sites vitrines sur mesure, conçus pour refléter votre identité et répondre parfaitement à vos attentes.</li>
            </ul>
          </article>
          <article class="card">
            <h4>Optimisation</h4>
            <ul>
              <li>Refonte et optimisation UX/UI pour une meilleure expérience utilisateur.</li>
              <li>Maintenance et mises à jour régulières : nous restons à vos côtés.</li>
              <li>Intégration de systèmes de paiement sécurisés.</li>
            </ul>
          </article>
        </div>
      </section>
  
      <section class="service">
        <h3>Stratégie de Contenu & SEO</h3>
        <div class="service-grid">
          <article class="card">
            <h4>Copywriting</h4>
            <ul>
              <li>Rédaction de descriptions produits optimisées pour le SEO.</li>
              <li>Création d'articles de blog performants pour le référencement.</li>
              <li>Élaboration de scripts pour TikTok, YouTube et publicités.</li>
            </ul>
          </article>
          <article class="card">
            <h4>Social Media Management</h4>
            <ul>
              <li>Gestion de contenu pour Instagram et TikTok.</li>
              <li>Planification et calendrier éditorial.</li>
              <li>Développement de branding et storytelling pour une identité forte.</li>
            </ul>
          </article>
        </div>
      </section>
  
      <section class="service ">
        <h3>Intégration d’Outils & Performance Digitale</h3>
        <div class="service-grid">
        <ul class="card">
          <li>Implémentation d’outils d’analyse (Google Analytics).</li>
          <li>Optimisation des performances et de la vitesse des sites web.</li>
          <li>Intégration de systèmes de réservation et d’adhésion.</li>
        </ul>
         </div>
      </section>
  
      <section class="button-section">
        <Button link="form" content="Collaborons ensemble !" />
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import Button from '~/components/Button.vue';
  </script>
  
  <style scoped>
  .container {
    min-height: calc(100vh - 80px);
    background-color: #b994f5;
    padding: 40px 20px;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    color: #4a4a4a;
    margin-bottom: 25px;
  }
  
  h3 {
    font-size: 2rem;
    color: #673ab7;
    margin-bottom: 8vh;
  }
  
  h4 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
  }


  
  p, li {
    font-size: 18px;
    color: #555;
    list-style:inside;

  }
  
  .intro p {
    max-width: 800px;
    margin: 0 auto 30px;
  }
  
  .service {
    max-width: 900px;
    margin: auto;
    margin-bottom: 12vh;
  }
  
  .service-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    width: 280px;
    text-align: left;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .button-section {
    margin-top: 30px;
  }
  </style>
  