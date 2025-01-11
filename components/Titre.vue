
<template>
<h2>{{ content }}</h2>
</template>

<style scoped>
h2{
    margin-bottom: 20px;
}
</style>

<script setup lang="ts">
defineProps({
    content: String,
})
</script>
