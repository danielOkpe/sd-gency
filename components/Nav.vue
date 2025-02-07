<template>
    <nav>
        <ul>
            <!-- Partie gauche -->
            <span class="left-links">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/services">Nos services</NuxtLink></li>
            </span>

            <!-- Partie droite -->
            <span class="right-links">
                <li>
                    <NuxtLink to="/">Formations</NuxtLink>
                </li>

            </span>
            
            <!-- Menu hamburger pour mobile -->
            <span class="hamburger" @click="toggleMenu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </span>
        </ul>

        <!-- Menu mobile (caché par défaut) -->
        <ul class="mobile-menu" id="mobile-menu" v-if="menuOpen">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/services">Nos services</NuxtLink></li>
            <li><NuxtLink to="/">Formations</NuxtLink></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    resetAnimation
    
}

const resetAnimation = () => {
    const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
    mobileMenu.classList.remove('show'); // Retirer la classe pour réinitialiser
    void mobileMenu.offsetWidth; // Hack pour forcer la réinitialisation de l'animation
    mobileMenu.classList.add('show'); // Réappliquer la classe pour redémarrer l'animation
}

onMounted(() => {
    // Reset animation when component is mounted
    const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
})
</script>

<style scoped>

nav {
    width: 100%;
    height: 60px;
    margin: auto;
    color: white;
    position: relative;
    background-color: #191840;
    z-index: 5000;
}

ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 97%;
    margin: auto;
}

ul li a {
    color: white;
    transition: all 0.1s ease-in-out;
}

ul li a:hover {
    color: #9B6BFF;
}

.left-links {
    display: flex;
    height: 60px;
    gap: 12px;
    align-items: center;
}

.right-links {
    display: flex;
    gap: 25px;
    height: 60px;
    align-items: center;
}

.center {
    text-decoration: none;
    font-weight: bold;
}

/* Styles du menu hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
}

.hamburger .bar {
    height: 3px;
    background-color: white;
}

/* Menu mobile caché par défaut */
.mobile-menu {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #191840;
    text-align: center;
    width: 100%;
}

.mobile-menu li {
    padding: 10px;
    border-bottom: 1px solid white;
}

.mobile-menu li:last-child {
    border-bottom: none;
}

/* Animations  */

@keyframes slideDown {
    0% {
        transform: translateY(-100%); /* Menu hors de l'écran en haut */
    }
    100% {
        transform: translateY(0); /* Menu à sa position normale */
    }
}

/* Responsiveness */
@media (max-width: 600px) {
    .left-links,
    .right-links {
        display: none; /* Cacher les liens principaux */
    }

    .hamburger {
        display: flex; /* Afficher le hamburger sur petits écrans */
    }

    /* Affichage du menu mobile quand il est ouvert */
    .mobile-menu {
        display: block;
    }

    /* Optionnel : afficher les liens sous forme de colonne */
    .mobile-menu li {
        padding: 12px;
        font-size: 16px;
    }
}
</style>
