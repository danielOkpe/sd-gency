<template>
    <section class="header">
        <div class="about">
            <Titre id="about-title"  content="SD Agency" />
        <Paragraph content="Nous sommes SD angency , une agence specialisee 
 dans le marketing digital et de devellopement web ainsi que plusieurs autres services . Nous vous proposons les services les plus adaptés à vous et a vos ventes en s’appuyant sur " />
        <Titre class="network-title" content="Nos réseaux sociaux" />
        <div class="icons">
            <a href="https://www.instagram.com/the_sdagency/">
                <Icon image="instagram" />
            </a>
            <a href="https://linkedin.com">
                <Icon image="linkedin"/>
            </a>
        </div>
        <div class="form-btn-div">
            <Button color="white" link="services" class="form-btn" content="Besoin d'un service ?">
                
            </Button>
        </div>
        </div>
    </section>
    <section class="footer">
        <div class="blue">
            <div class="blue-left">
                <Titre content="Hepe" id="icon1-title"/>
                <Paragraph class="p" content="un paragraphe en bienguinnnnn le temps qu'elle me fasse un vrai paragraĥe sa mère haha" />
                <Button content="un truc sah" />
            </div>
            <div class="blue-right">
                <Paragraph class="p" content="un paragraphe en bienguinnnnn le temps qu'elle me fasse un vrai paragraĥe sa mère haha" />
                <div>
                    <Button content="un truc sah" />
                </div>
            </div>

        </div>
        <div class="white">
            <Titre class="icon-title" content="Samira"/>
            <Paragraph class="p" content="Samira , notre copywriter et spécialiste en psychologie et en sociologie qui. Grâce à son empathie et à ses compétences, elle cerne vos besoins et comprend les comportements des consommateurs pour créer des messages authentiques et percutants."/>
        </div>
        <div class="white">
            <Titre class="icon-title" content="Daniel"/>
            <Paragraph class="p" content="Daniel ,notre Ingénieur web un expert en développement web qui grace à son diplôme MIE (Math informatique et Électronique) transforme les idées en solutions digitales performantes"/>
        </div>
        <div class="gradient-purple">
            <Paragraph class="p" content="Notre objectif et de propulser votre marque grâce à l’Authenticité , l’innovation, la créativité et la transparente, qui sont nos pilliers . Ensemble élaborons des stratégies sur mesure qui allient compréhension humaine et innovation technologique en s’appuyant sur vos valeurs et les principes fondamentaux de votre entreprise"/>
            <Button class="btn" content="Partant ?" link="contact" ></Button>
        </div>
    </section>
</template>

<style scoped>
template{
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 50vh;
    background-image: url("/assets/background.png");
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
}
.about{
    width: 45%;
    padding:20px;
    padding-top: 30px;
    opacity: 0;
    animation: appear 2s 0.3s ease forwards;
}

.footer{
    display: flex;
    height: calc(50vh - 60px);
}

.white{
    width: 20%;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: center;
    padding: 10px;
    gap: 25px;
    transform: translateY(600px);
    animation: fadeInUp 2s 0.4s ease forwards;
}



.gradient-purple{
    width: 20%;
    background: linear-gradient(70deg,#9b59b6,#6a11cb ,#4b0082 );
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    gap: 25px;
    transform: translateY(600px);
    animation: fadeInUp 2s 0.1s ease forwards;
}

.blue{
    width: 40%;
    border-radius: 12px;
    background-color:#7851a9;
    display: flex;
    transform: translateY(600px);
    animation: fadeInUp 2s 0.6s ease forwards;
}

.blue-left{
    display: flex;
    flex-direction: column;
    padding: 15px;
    text-align: right;
    gap: 15px;
}

.blue-left .p{
    width: 90%;
}

.blue-left #icon1-title{
    margin: 45px 0;
    font-size: 35px;
}

.blue-right{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.blue-right div{
    display: flex;
    justify-content: center;
}

.blue-right p {
    margin-top: 170px;
}

.icons{
    width: 52%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.network-title{
    text-align: center;
}

#about-title{
    font-size: 40px;
}

.form-btn-div{
    margin-top: 30px;
    display:flex;
    justify-content:center;
}

.form-btn{
    background-color :#4b0082 ;
    color: white;
}


/*                         Animations                            */ 
@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        transform: translateY(600px);
    }
    to {
        transform: translateY(0);
    }
}
</style>

<script setup lang="ts">
import Titre from '~/components/Titre.vue';
import Paragraph from '~/components/Paragraph.vue';
import Icon from '~/components/Icon.vue';
import Button from '~/components/Button.vue';






</script>