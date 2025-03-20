<template>
  <div>
    
    <NuxtRouteAnnouncer />
    <Nav class="nav" />

    <NuxtPage/>
  </div>
</template>


<style>
*{
  list-style: none;
  margin: 0;
  text-decoration: none;
}

body{
  /*background-color: #04072F;*/
  /*background-color: #03072E;*/ 
  /*background-color: #1B1740;*/
  /*background-color: #03072F;*/
   background-color: #191840; 
  /* background-color: #ab91ac; Rose du fond */
  /* background: linear-gradient(70deg, #6a11cb, #2575fc); */
  /* background: linear-gradient(135deg, #4b0082, #6a11cb, #8e44ad, #9b59b6, #c39bd3); */
  /*background-color: #4b0082; partie sombre du dégradé*/
  /*background-color: #9b59b6; partie clair du dégradé*/
  color: white;
  overflow-x: hidden; /* Hide vertical scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: 0;
  }

  body::-webkit-scrollbar {
    display: none;  
  }

.nav{
  opacity: 0;
  animation: appear 1s 2s ease forwards;
}

@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

<script setup lang="ts">
import Nav from './components/Nav.vue';
import "./public/assets/css/main.css";

</script>