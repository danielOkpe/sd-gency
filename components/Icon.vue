<template>
<img :src="`assets/${image}-icon.png`" alt="">
</template>

<style scoped>
img{
    height: 60px;
    width: 60px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s ease;
}

img:hover{
    scale: 1.1;
}
</style>

<script setup lang="ts">
defineProps({
    image : String
})
</script>