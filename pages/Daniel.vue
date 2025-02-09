<template>
    <div class="container">
    <section 
    v-motion="{
            initial: {
                opacity: 0,
                scale: 0.5
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }"        
        :duration="1200"
        class="header"
    >
            <img class="daniel-photo" >
            <h2>Daniel</h2>
        <p> Paragraphe qui résume Daniel</p>
    </section>

    <section 
    v-motion="{
            initial: {
                opacity: 0,
                scale: 0.5
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }"     
        :duration="1200"
 
    >
        <h3>Formations</h3>
        <div class="formations">
            <div>Epitech Msc pro 2024-2027</div>
            <div>BTS Systeme Numerique 2023-2024</div>
            <div>LIcence MIE (MAth Informatique Electronique) 2020-2023 </div>
        </div>
    </section>

    <section 
    v-motion="{
            initial: {
                opacity: 0,
                scale: 0.5
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }"        
        :duration="1200"

    >
        <h3>Compétences techniques</h3>
        <div class="hard-skills" ref="skillList">
            <img alt="logo Java" src="/public/assets/java.svg">
            <img alt="logo Python" src="/public/assets/python.svg">
            <img alt="logo HTML" src="/public/assets/html-5-logo.svg" > 
            <img alt="logo CSS" src="/public/assets/css3-logo.svg">
            <img alt="logo JavaScript" src="/public/assets/Javascript_badge.svg">
            <img alt="logo TypeScript" src="/public/assets/TypeScript_ESLint_logo.svg">
        </div>
    </section>

    <section
    v-motion="{
            initial: {
                opacity: 0,
                scale: 0.5
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }"
        :duration="1200"
    >
        <h3>Compétences humaine</h3>
        <div class="soft-skills">
            <div>Rigoureux</div>
            <div>Comprehensif</div>
            <div>Organisé</div>
        </div>
    </section>

    <section  
    v-motion="{
            initial: {
                opacity: 0,
                scale: 0.5
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }"
        :duration="1200"
        class="experience-section"
    >
        <h3>Expériences professionnelles</h3>
        <div class="experiences">
            <div>Stage a ORE en tant que developpeur web : <br>
                creation de page web pour 
                consulter les mesures du jardin electronique</div>
        </div>
    </section>

    <section
    v-motion="{
            initial: {
                opacity: 0,
                scale: 0.5
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }"
        :duration="1200"
        class="buttons"

    >
        <Button content="Voir Samira" link="samira"></Button>
        <Button content="Consulter nos services" link="services"></Button>
        <Button content="Revenire à la page d'accueil" link="/"></Button>

    </section>
</div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const counter = ref(0);
const $refs = useTemplateRef('skillList');


onMounted(() => {
  const skills : HTMLCollection | undefined = $refs.value?.children;
  console.log("html el",  skills?.length);
  if(skills){
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i] as HTMLElement;
      skill.style.backgroundColor = '#fff';
      skill.style.padding = "5px";
  }
}

});

onUnmounted(() => {
 
});

</script>

<style scoped>
.container {
  min-height: calc(100vh - 60px);
  background: linear-gradient(135deg, #08081F, #1B2B6F, #000033);
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 39vh 0;  
    text-align: center;
}

.daniel-photo{
    width: 250px;
    height: 250px;
    border-radius: 100%;
    border: white 5px solid;
}

h2{
    font-size: 2em;
}

h3{
    font-size: 2.5em;
    margin-bottom: 15vh;
}

.buttons{
    flex-direction: row;    
    gap: 1.5vw;
    justify-content: center;
} 

.header{
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
}

.hard-skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  width: 90%;
}

.hard-skills img{
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin: auto;
}

.experiences{
  width: 90%;
  font-size: 1.7em;
}

.formations{
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  font-size: 1.7em;
}

.soft-skills{
    display: flex;
  flex-direction: column;
  gap: 5vh;
  font-size: 1.8em;
}

.experience-section{
  margin-bottom: 5em;
}

/*responsive*/  

@media screen and (max-width: 768px){
    .daniel-photo{
        width: 180px;
        height: 180px;
    }
    h2{
        font-size: 2em;
    }
    h3{
        font-size: 1.7em;
    }
    .formations{
      font-size: 1.3em;
    }
    .hard-skills{
      font-size: 1em;
    }
    .hard-skills img{
        max-width: 50px;
        max-height: 50px;
    }
    .soft-skills{
      font-size: 1.3em;
    }
    .experiences{
      font-size: 1.3em;
    }
    .buttons{
        flex-direction: column;
        gap: 2vh;
    }
  
}

</style>