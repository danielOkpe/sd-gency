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

    <section class="service">
      <h3>Pour vos contenus</h3>
      <div class="service-grid">
        <article class="card">
          <h4>Voix off</h4>
          <ul>
            <li>Narration pour documentaire et e-learning.</li>
            <li>Podcasts.</li>
            <li>Annonces et messages institutionnels.</li>
          </ul>
        </article>
        <article class="card">
          <h4>Ecriture de script</h4>
          <ul>
            <li>Court metrage.</li>
            <li>Vidéo Youtube et publicités.</li>
            <li>Podcasts et story telling narratif.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="service">
      <h3>Intégration d’Outils & Performance Digitale</h3>
      <div class="service-grid">
        <article class="card">
          <h4>Optimisation et Outils</h4>
          <ul>
            <li>Implémentation d’outils d’analyse (Google Analytics).</li>
            <li>Optimisation des performances et de la vitesse des sites web.</li>
            <li>Intégration de systèmes de réservation et d’adhésion.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="button-section">
      <Button link="form" content="Collaborons ensemble !" />
    </section>
  </div>
</template>

<script setup>
import Button from '~/components/Button.vue';
</script>

<style scoped>
.container {
  min-height: calc(100vh - 80px);
  background: linear-gradient(-90deg, #b994f5, #673ab7);
  padding: 60px 20px;
  text-align: center;
  animation: fadeDown 1s ease-out;
}

h2 {
  font-size: 2.8rem;
  color: black;
  margin-bottom: 20px;
}

h3 {
  font-size: 2.2rem;
  color: black;
  margin-bottom: 40px;
}

h4 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 15px;
}

p, li {
  font-size: 16px;
  color: #555;
}

.intro p {
  max-width: 800px;
  margin: 0 auto 30px;
  color: black;
}

.service {
  max-width: 1000px;
  margin: auto;
  margin-bottom: 80px;
}

.service-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 400px;
  text-align: left;
}

.card ul{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.button-section {
  margin-top: 30px;
}

@keyframes fadeDown {
  from {
        opacity: 0;
        transform: translateY(-100px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  
}
</style>