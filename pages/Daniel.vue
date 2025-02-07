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
            <img >
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
      skill.style.backgroundColor = 'red';
  }
}

});

onUnmounted(() => {
 
});

</script>

<style scoped>
.container {
  min-height: calc(100vh - 60px);
  background-color: black;

}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40vh 0;  
    text-align: center;
}

img{
    width: 150px;
    height: 150px;
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

.experiences{
  width: 90%;
}

.formations{
  width: 90%;
}

.experience-section{
  margin-bottom: 5em;
}

/*responsive*/  

@media screen and (max-width: 768px){
    img{
        width: 100px;
        height: 100px;
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