<template>
    <nav>
        <ul>
            <!-- Partie gauche -->
            <span class="left-links">
                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                <li><NuxtLink to="/presentation">Nos experts</NuxtLink></li>
                <li><NuxtLink to="/agency">L'agence</NuxtLink></li>
            </span>

            <!-- Partie centrée -->
            <li class="center-item">
                <NuxtLink to="/" class="center">SD Agency</NuxtLink>
            </li>

            <!-- Partie droite -->
            <li class="right-links">
                <NuxtLink to="/contact">Contactez-nous</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    width: 60%;
    height: 60px;
    margin: auto;
}

ul {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Répartition des espaces entre les blocs */
    list-style: none;
    padding: 0;
    margin: 0;
}

.left-links {
    display: flex;
    gap: 10px;
}

.center-item {
    flex: 1; /* Permet au centre de s'adapter pour un alignement parfait */
    text-align: center; /* Centre le texte "SD Agency" horizontalement */
}

.right-links {
    margin-left: auto; /* Décale "Contactez-nous" complètement à droite */
}

.center {
    text-decoration: none;
    font-weight: bold;
}
</style>
