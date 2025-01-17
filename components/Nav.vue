<template>
    <nav>
        <ul>
            <!-- Partie gauche -->
            <span class="left-links">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/services">Nos services</NuxtLink></li>
                <li><NuxtLink to="/agency">Nos Packs</NuxtLink></li>

            </span>

            <!-- Partie droite -->
            <span class="right-links">
                <li>
                    <NuxtLink to="/">Consultation personnalisée</NuxtLink>
                </li>
                <li >
                <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </span>
            
        </ul>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    height: 60px;
    margin: auto;
    color: white;
    
}

ul {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Répartition des espaces entre les blocs */
    list-style: none;
    padding: 0;
    margin: 0;
    width: 97%;
    margin: auto;
}

ul li a{
    color: white;
    transition: all 0.1s ease-in-out;
}

ul li a:hover{
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
</style>
