<template>
<div class="container">
    <section>
        <h2>Discutons de votre projet</h2>
        <p class="p-questionnaire">Grace a ce questionnaire nous comprendrons mieux vos besoins 
            afin de vous proposer des services sur mesures </p>
    </section>
    
    <form action="">
        <section id="step-1" class="steps"  v-if="step === 1">
            <h3>Parlons un peu de vous</h3>
            <div class="name-area">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="firsname-area">
                <label for="firstName">Prénom :</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            <div class="email-area">
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="companyPart-area">
                <div>
                <h4>Êtes-vous une entreprise ?</h4>
                <div class="isCompany-area">
                    <input type="radio" id="yes" name="company" value="yes" v-model="isCompany" >
                    <label for="yes">Oui</label>

                    <input type="radio" id="no" name="company" value="no" v-model="isCompany">
                    <label for="no">Non</label>
                </div>
            </div>    
            <div class="companyPart" v-if="isCompany === 'yes'">
                <div class="companyName-area">
                    <label for="companyName">Nom de l'entreprise :</label>
                    <input type="text" id="companyName" name="companyName">
                </div>
                <div class="companySize-area">
                    <label for="companySize">Taille de l'entreprise :</label>
                    <select name="companySize" id="companySize">
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1000+">1000+</option>
                    </select>
                </div>      
            </div>   
            </div>
            
            <button @click="nextStep">Suivant</button>
        </section>
        <section id="step-2" class="steps" v-if="step === 2">
            <h3>Votre présence sur internet</h3>
            <div class="website-area">
                <h4>Site web existant ?</h4>  
                <div class="websiteCheckbox-area">
                    <input type="radio" id="yes" name="website" value="yes">
                    <label for="yes">Oui</label>

                    <input type="radio" id="no" name="website" value="no">
                    <label for="no">Non</label>

                    <input type="radio" id="inProgress" name="website" value="inProgress">
                    <label for="inProgress">En cours</label>
                </div>
            </div>
            <div class="socialNetwork-area">
                <h4>Réseaux sociaux utilisé :</h4>
                <div class="socialNetworkCheckbox-area">
                    <input type="checkbox" id="facebook" name="facebook">
                    <label for="facebook">Facebook</label>

                    <input type="checkbox" id="instagram" name="instagram">
                    <label for="instagram">Instagram</label>

                    <input type="checkbox" id="linkedin" name="linkedin">
                    <label for="linkedin">Linkedin</label>

                    <input type="checkbox" id="twitter" name="twitter">
                    <label for="twitter">Twitter</label>

                    <input type="checkbox" id="tiktok" name="tiktok">
                    <label for="tiktok">Tiktok</label>

                    <input type="checkbox" id="pinterest" name="pinterest">
                    <label for="pinterest">Pinterest</label>
                </div>
            </div>
            <div class="button-area">        
                <button @click="previousStep">Précédent</button>
                <button @click="nextStep">Suivant</button>
            </div>        </section>
        <section id="step-3" class="steps" v-if="step === 3" >
            <h3>Vos objectifs</h3>
            <div class="goals-area">
                <h4>Quels sont vos objectifs actuel ?</h4>
                <div class="goalsCheckbox-area">
                    <input type="checkbox" id="visibility" name="visibility">
                    <label for="visibility">Gagner en visibilité</label>

                    <input type="checkbox" id="conversion" name="conversion">
                    <label for="conversion">Gagner en crédibilité</label>

                    <input type="checkbox" id="other" name="other">
                    <label for="other">Autre</label>

                </div>
            </div>
            <div class="button-area">
                <button @click="previousStep">Précédent</button>
                <button @click="nextStep">Suivant</button>
            </div>

        </section>
        <section id="step-4" class="steps" v-if="step === 4">
            <p>Merci d'avoir répondu à ce questionnaire, cliquez sur le bouton 'Recevoir mon devis' et nous vous contacterons prochainement </p>
            <div class="button-area">
                <button @click="previousStep">Précédent</button>
                <button type="submit">Recevoir mon devis</button>   
            </div>
        </section>
       
    </form>
</div>
    

</template>

<script setup lang="ts">
import { ref } from 'vue';
const step : Ref<number> = ref(1);
const isCompany = ref('');


const nextStep = () => {
    step.value++;
}

const previousStep = () => {
    step.value--;
}


</script>

<style scoped> 

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: black;
    height: calc(100vh - 60px);
}

h2{
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 25px;
    text-align: center;
}

.p-questionnaire{
    font-size: 1rem;
    text-align: center;
}   

form{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.steps{
    background-color: #907dd3;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 12vh;
    width: 500px; 
    max-height: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ajout d'un effet visuel */
}

.companyPart-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    gap: 10px;
}

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