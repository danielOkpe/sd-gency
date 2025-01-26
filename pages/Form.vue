<template>

    <section>
        <h2>Discutons de votre projet</h2>
        <p>Grace a ce questionnaire nous comprendrons mieux vos besoins 
            afin de vous proposer des services sur mesures </p>
    </section>
    
    <form action="">
        <section id="step-1">
            <h3>Parlons un peu de vous</h3>
            <div class="name-area">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="firsname-area">
                <label for="firstName">Prénom :</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            <div>
                <caption>Êtes-vous une entreprise ?</caption>
                <div class="isCompany-area">
                    <input type="radio" id="yes" name="company" value="yes">
                    <label for="yes">Oui</label>

                    <input type="radio" id="no" name="company" value="no">
                    <label for="no">Non</label>
                </div>
            </div>    
            <div class="companyPart">
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
        </section>
        <section id="step-2">
            <h3>Etape 2</h3>
            <div class="website-area">
                <caption>Site web existant ?</caption>  
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
                <caption>Réseaux sociaux utilisé :</caption>
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
        </section>
        <section id="step-3">
            <h3>Vos objectifs</h3>
            <div class="goals-area">
                <caption>Quels sont vos objectifs actuel ?</caption>
                <div class="goalsCheckbox-area">
                    <input type="checkbox" id="visibility" name="visibility">
                    <label for="visibility">Gagner en visibilité</label>

                    <input type="checkbox" id="conversion" name="conversion">
                    <label for="conversion">Gagner en crédibilité</label>

                    <input type="checkbox" id="other" name="other">
                    <label for="other">Autre</label>

                </div>
            </div>
        </section>
        <section id="step-4">
            <p>Merci d'avoir répondu à ce questionnaire, cliquez sur le bouton 'Recevoir mon devis' et nous vous contacterons prochainement </p>
            <button type="submit">Recevoir mon devis</button>
        </section>
       
    </form>

</template>

<script setup lang="ts">

</script>

<style scoped> 
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

.companyPart{
    display: none;
}
</style>