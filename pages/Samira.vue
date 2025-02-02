<template>
    <div class="container">
    <section class="presentation">
        <div class="header">
            <img >
            <h2>Samira</h2>
        </div>
        <div class="about">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium explicabo modi,sjdnhqsofnqoifjqoifjqoifsqoijf</p>
        </div>
    </section>


    <section>
        <h3>Formations</h3>
        <div class="block formations">
            <div>Back +2 en sociologie</div>
            <div>Formation en court en 2 eme annee de psychologie</div>
            <div>Copywriting {formation autodicdacte}</div>
        </div>
    </section>

    <section>
        <h3>Compétences techniques</h3>
        <div class="block hard-skills">
            <div>Redaction persuasive </div>
            <div>Outils de gestion de contenu </div>
            <div>SEO</div>
            <div>Reseaux sociaux</div>
        </div>
    </section>

    <section>
        <h3>Compétences humaine</h3>
        <div class="block soft-skills">
            <div>Empathie</div>
            <div>A l'écoute</div>
            <div>Patiente</div>
            <div>Positive</div>   
        </div>
    </section>

    <section>
        <h3>Expériences professionnelles</h3>
        <div class="block experiences">
            <div>Micro influences </div>
            <div>Scriptage</div>
            <div>Description de produit</div>
        </div>
    </section>

    <section class="buttons">
        <Button content="Revenire à la page d'accueil" link="/"></Button>
        <Button content="Consulter nos services" link="services"></Button>
        <Button content="Voir Daniel" link="daniel"></Button>
    </section>
</div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue';
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
min-height: calc(100vh - 60px);
background-color: blueviolet;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
}

img{
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: white 5px solid;
}

h2{
    font-size: 2.5em;
    color: white;
}

h3{
    font-size: 1.7em;
    color: white;
}

section{
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    text-align: left;
    gap: 10px;
    padding-left: calc(4% + 150px);
    opacity: 0;
    animation: appear 2s 0.5s ease forwards; ;
}

.block{
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.presentation{
    padding: 0 4%;
    margin-top: 50px;
    gap: 0;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 99%;
}


.about{
    width: 100%;
}

.about p {
    max-width: 60%;
    margin-left: calc(150px);
    font-size: 1.2em;
}

div{
    color: white;
    font-size: 18px;
}

.buttons{
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3%;
    margin: 5px 0;
}

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}   

</style>