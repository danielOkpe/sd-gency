<template>
    <header>
        <section class="container">
            <!-- Zone avec carré rouge au centre -->
            <div class="center"></div>

            <!-- Zone pour les carrés bleus -->
            <div class="rand" style="top: 0%; left: 0;"></div>
            <div class="rand" style="top: 32%; left: 15%;"></div>
            <div class="rand" style="bottom: 0%; left: 5%;"></div>

            <div class="rand" style="top: 2%; right: 35%;"></div>
            <div class="rand" style="bottom: 30%; right: 17%;"></div>
            <div class="rand" style="bottom: 0%; right: 40%;"></div>
        </section>
    </header>
</template>

<style scoped>
header {
    height: calc(100vh - 90px);
    position: relative; /* Permet le positionnement absolu des enfants */
}

.container {
    position: relative; /* Contexte de positionnement */
    width: 95%;
    height: 100%;
    margin: auto;
}

.center {
    width: 370px;
    height: 270px;
    background-color: red;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centre le carré rouge */
    z-index: 1;
}

.rand {
    position: absolute;
    width: 370px;
    height: 270px;
    background-color: blue;
    border-radius: 30px;
}

div{
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

div:hover {
    scale: 1.1;
}
</style>
