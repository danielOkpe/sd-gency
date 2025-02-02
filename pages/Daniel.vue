<template>
    <div class="container">
    <section>
        <div class="header">
            <img >
            <h2>Daniel</h2>
        </div>
        <p> Paragraphe qui résume Daniel</p>
    </section>

    <section>
        <h2>Formations</h2>
        <div class="formations">
            <div>Epitech Msc pro 2024-2027</div>
            <div>BTS Systeme Numerique 2023-2024</div>
            <div>LIcence MIE (MAth Informatique Electronique) 2020-2023 </div>
        </div>
    </section>

    <section>
        <h2>Compétences techniques</h2>
        <div class="hard-skills">
            <div>Java</div>
            <div>Python</div>
            <div>HTML/CSS</div>
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>Vuejs</div>
            <div>Angular</div>
            <div>Spring</div>
            <div>FastApi</div>
        </div>
    </section>

    <section>
        <h2>Compétences humaine</h2>
        <div class="soft-skills">
            <div>Rigoureux</div>
            <div>Comprehensif</div>
            <div>Organisé</div>
        </div>
    </section>

    <section>
        <h2>Expériences professionnelles</h2>
        <div class="experiences">
            <div>Stage a ORE en tant que developpeur web : <br>
                creation de page web pour 
                consulter les mesures du jardin electronique</div>
        </div>
    </section>

    <section>
        <Button content="Consulter nos services" link="services"></Button>
        <Button content="Voir Samira" link="samira"></Button>
        <Button content="Revenire à la page d'accueil" link="/"></Button>
    </section>
</div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue';
</script>

<style scoped></style>