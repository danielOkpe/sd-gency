<template>
    <header>
        <section class="container">
            <!-- Zone avec carré rouge au centre -->
            <div class="center"></div>

            <!-- Carrés bleus espacés autour du carré rouge -->
            <div class="rand" style="top: 0%; left: 50%; transform: translateX(-50%);"></div> <!-- Haut -->
            <div class="rand" style="top: 10%; left: 10%;"></div> <!-- Haut-gauche -->
            <div class="rand" style="bottom: 10%; left: 10%; transform: translateY(-50%);"></div> <!-- Milieu-gauche -->
            <div class="rand" style="top: 10%; right: 10%;"></div> <!-- Bas-gauche -->
            <div class="rand" style="bottom: 0%; left: 50%; transform: translateX(-50%);"></div> <!-- Bas -->
            <div class="rand" style="bottom: 10%; right: 10%; transform: translateY(-50%);"></div> <!-- Milieu-droit -->
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
    width: 350px;
    height: 250px;
    background-color: blue;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.rand:hover {
    scale: 1.1;
}


</style>
