<template>
    <div class="container">
    <section>
        <h2>Nos services</h2>
        <p>Cher clients et collaborateurs comme vous l’avez compris nos services sont base sur la creations de sites web et le devellopement web grace au copywriting. Nous vous presentons donc ci dessous nos services et nos solutions</p>
    </section>

    <section>
        <h3>Création et Optimisation de Sites Web</h3>
        <div>
        <article>
            <h4>CREATION</h4> 
            Sites vitrines adapte a chacune de vos demandes (le but est que votrew site vitrine vous ressemble comme si il avait ete creer par vous.)
        </article>
        <article>
            <h4>OPTIMISATION</h4>
            <ul>
                <li>Refonte et optimisation UX/UI pour améliorer l’expérience utilisateur</li>
                <li>Maintenance et mises à jour régulières on ne vous abandonnera pas</li>
                <li>Systèmes de paiement sécurisés intégrés</li>
            </ul>
        </article>
        </div>
    </section>

    <section>
        <h3>Stratégie de Contenu & SEO</h3>
        <div>
        <article>
            <h4>COPYWRITING</h4>
            <ul>
                <li>Redaction de description de produits (optimise SEO)</li>
                <li>Redaction d’articles optimises SEO</li>
                <li>Redaction de script TikTok, youtube, publicite</li>
            </ul>
        </article>
        <article>
            <h4>SOCIAL MEDIA MANAGEMENT</h4>
            <ul>
                <li>Gestion de contenue pour instagram tik tok </li>
                <li>Planificatrtion et calendrier editoriale </li>
                <li>Stratégie de branding et storytelling pour une identité forte sur les reseaux sociaux </li>
            </ul>
        </article>
        </div>
    </section>

    <section>
        <h3>3. Intégration d’outils & Performance Digitale</h3>
        <ul>
            <li>Mise en place d’outils d’analyse (Google Analytic)</li>
            <li>Optimisation de la vitesse des sites web</li>
            <li>Systèmes de réservation et plateformes d’adhésion intégrés</li>
        </ul>
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
.container{
    min-height: calc(100vh - 80px);
    background-color: #b994f5;
    padding: 10px;
}

section{
    margin-bottom: 5.5vh;
    display: flex;
    flex-direction: column;
    gap: 3.5vh;
    align-items: center;
}

section div{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    text-align: center;
}

h4{
    margin-bottom: 2vh;
    font-size: 1.4rem;
}

h3{
    font-size: 1.8rem;
}

h2{
    font-size: 2.8rem;
}

p, li{
    font-size: 18px;
    text-align: center;
}

.button-section{
    margin-bottom: 0;
}

</style>