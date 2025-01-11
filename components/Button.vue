<template>
    
    <button>
        <NuxtLink :to="link" :style="`color : ${color}`">
            {{ content }}
        </NuxtLink>
       
    </button>
</template>
<style scoped>
button{
    border-radius: 30px;
    border: none;
    padding : 12px;
    cursor:pointer;
    transition: all 0.2s ease;
    font-weight: bold;
}
button:hover{
    scale:1.1;
}


</style>
<script setup lang="ts">
defineProps({
    content : String,
    link : String,
    color : String
})
</script>