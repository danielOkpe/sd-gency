<template>
<p>{{ content }}</p>
</template>

<style scoped>
p{
    font-size: 15px;
    margin-bottom: 10px;
}

</style>

<script setup lang="ts">
defineProps({
    content: String,
})
</script>