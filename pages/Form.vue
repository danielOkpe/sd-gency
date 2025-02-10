<template>
    <div class="container">
      <section class="header">
        <h2>Discutons de votre projet</h2>
        <p class="p-questionnaire">
          Grâce à ce questionnaire, nous comprendrons mieux vos besoins afin de vous proposer des services sur mesure.
        </p>
      </section>
  
      <Form as="v-form"  @submit.prevent="submitForm">
        <!-- Étape 1 -->
        <section id="step-1" class="steps" v-if="step === 1">
          <div class="step-indicator">Étape {{ step }} / 4</div>
          <h3>Parlons un peu de vous</h3>
          <div class="form-group">
            <label for="name">Nom :</label>
            <Field type="text" id="name" name="name" v-model="form.name" required />
            <ErrorMessage name="name"></ErrorMessage>
          </div>
          <div class="form-group">
            <label for="firstName">Prénom :</label>
            <Field type="text" id="firstName" name="firstName" v-model="form.firstName" required />
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
          <div class="form-group">
            <label for="email">Email :</label>
            <Field type="email" id="email" name="email" v-model="form.email" required />
            <ErrorMessage name="email"></ErrorMessage>
          </div>
          <div class="form-group">
            <h4>Êtes-vous une entreprise ?</h4>
            <div class="radio-group">
              <Field type="radio" id="yes" name="isCompany" value="yes" v-model="form.isCompany" />
              <label for="yes">Oui</label>
  
              <Field type="radio" id="no" name="isCompany" value="no" v-model="form.isCompany" />
              <label for="no">Non</label>
            </div>
            <ErrorMessage name="isCompany"></ErrorMessage>
          </div>
          <div class="company-details" v-if="form.isCompany === 'yes'">
            <div class="form-group">
              <label for="companyName">Nom de l'entreprise :</label>
              <Field type="text" id="companyName" name="companyName" v-model="form.companyName" />
              <ErrorMessage name="companyName"></ErrorMessage>
            </div>
            <div class="form-group">
              <label for="companySize">Taille de l'entreprise :</label>
              <Field id="companySize" name="companySize" v-model="form.companySize" as="select">
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1000+">1000+</option>
              </Field>
              <ErrorMessage name="companySize"></ErrorMessage>
            </div>
          </div>
          <div id="btn-step-1" >
            <button class="btn-primary" @click="nextStep">Suivant</button>
          </div>
        </section>
  
        <!-- Étape 2 -->
        <section id="step-2" class="steps" v-if="step === 2">
          <div class="step-indicator">Étape {{ step }} / 4</div>
          <h3>Votre présence sur internet</h3>
          <div class="form-group">
            <h4>Site web existant ?</h4>
            <div class="radio-group">
              <input type="radio" id="website-yes" name="website" value="yes" v-model="form.isGetWebsite" />
              <label for="website-yes">Oui</label>
  
              <input type="radio" id="website-no" name="website" value="no" v-model="form.isGetWebsite" />
              <label for="website-no">Non</label>
  
              <input type="radio" id="website-inProgress" name="website" value="inProgress" v-model="form.isGetWebsite" />
              <label for="website-inProgress">En cours</label>
            </div>
            <ErrorMessage name="website"></ErrorMessage>
          </div>
          <div class="form-group">
            <h4>Réseaux sociaux utilisés :</h4>
            <div class="checkbox-group">
              <input type="checkbox" id="instagram" name="instagram" v-model="form.socialNetworks.instagram" />
              <label for="instagram">Instagram</label>
  
              <input type="checkbox" id="linkedin" name="linkedin" v-model="form.socialNetworks.linkedin" />
              <label for="linkedin">LinkedIn</label>
  
              <input type="checkbox" id="twitter" name="twitter" v-model="form.socialNetworks.twitter" />
              <label for="twitter">Twitter</label>
  
              <input type="checkbox" id="tiktok" name="tiktok" v-model="form.socialNetworks.tiktok" />
              <label for="tiktok">TikTok</label>
  
              <input type="checkbox" id="facebook" name="facebook" v-model="form.socialNetworks.facebook" />
              <label for="facebook">Facebook</label>

              <input type="checkbox" id="other_networks" name="other_networks" v-model="form.socialNetworks.other_networks" />
              <label for="other_networks">Autre</label>
            </div>
          </div>
          <div class="button-area">
            <button class="btn-secondary" @click="previousStep">Précédent</button>
            <button class="btn-primary" @click="nextStep">Suivant</button>
          </div>
        </section>
  
        <!-- Étape 3 -->
        <section id="step-3" class="steps" v-if="step === 3">
          <div class="step-indicator">Étape {{ step }} / 4</div>
          <h3>Vos objectifs</h3>
          <div class="form-group">
            <h4>Quels sont vos objectifs actuels ?</h4>
            <div class="checkbox-group">
              <input type="checkbox" id="visibility" name="visibility" v-model="form.goals.visibility" />
              <label for="visibility">Gagner en visibilité</label>
  
              <input type="checkbox" id="credibility" name="credibility" v-model="form.goals.credibility" />
              <label for="credibility">Gagner en crédibilité</label>
  
              <input type="checkbox" id="other" name="goals" v-model="form.goals.other" />
              <label for="other">Autre</label>
            </div>
          </div>
          <div class="button-area">
            <button class="btn-secondary" @click="previousStep">Précédent</button>
            <button class="btn-primary" @click="nextStep">Suivant</button>
          </div>
        </section>
  
        <!-- Étape 4 -->
        <section id="step-4" class="steps" v-if="step === 4">
          <div class="step-indicator">Étape {{ step }} / 4</div>
          <p class="thanks-p">
            Merci d'avoir répondu à ce questionnaire. <br>Cliquez sur le bouton "Recevoir mon devis"
            pour que nous vous contactions prochainement.
          </p>
          <div class="button-area">
            <button class="btn-secondary" @click="previousStep">Précédent</button>
            <button type="submit" class="btn-primary">Recevoir mon devis</button>
          </div>
        </section>
      </Form>
      <Button content="Revenir à l'accueil" link="/"></Button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { reactive } from 'vue';
  import { useToast } from 'vue-toastification';
  import {z} from 'zod';
  import Button from '~/components/Button.vue';
  import { Field, ErrorMessage, Form } from 'vee-validate';
  import { useForm } from 'vee-validate';



  const toast = useToast();
  const step = ref(1);
  const url = "https://formspree.io/f/mjkgglky";

  const validationSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  firstName: z.string().min(1, "Le prénom est requis"),
  email: z.string().min(1, "Un email est requis").email("Email invalide"),
  isCompany: z.enum(["yes", "no"], { required_error: "Sélectionnez une option" }),
  companyName: z.string().optional(),
  companySize: z.string().optional(),
  isGetWebsite: z.enum(["yes", "no", "inProgress"]).optional(),
  goals: z.object({
    visibility: z.boolean(),
    credibility: z.boolean(),
    other: z.boolean(),
  })/*.refine(goals => Object.values(goals).some(value => value), {
    message: "Sélectionnez au moins un objectif",
  })*/,
  socialNetworks: z.object({
    instagram: z.boolean(),
    linkedin: z.boolean(),
    twitter: z.boolean(),
    tiktok: z.boolean(),
    facebook: z.boolean(),
    other_networks: z.boolean(),
  })/*.refine(socialNetworks => Object.values(socialNetworks).some(value => value), {
    message: "Sélectionnez au moins un réseau social",
  })*/,
});


  const form = reactive({
  name: "",
  firstName: "",
  email: "",
  isCompany: "no",
  companyName: "",
  companySize: "",
  goals:{
    visibility: false,
    credibility: false,
    other: false,
  },
  isGetWebsite: "",
  socialNetworks: {
    other_networks: false,
    instagram: false,
    linkedin: false,
    twitter: false,
    tiktok: false,
    facebook: false,
  }, 
});



  const { validate } = useForm({
    validationSchema,
  });

  const nextStep = async (e: Event) => {
    e.preventDefault();
   try {
      /*const result = await validate();
      if (!result.valid) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      console.log("mais wssh")
      return;
    }*/
    if (step.value < 4){
      step.value++;
    }} catch(error){
      console.log("schema ", validationSchema)
    }
  }
  
  const previousStep = (e: Event) => {
    e.preventDefault();
    if (step.value > 1) step.value--;
  };
  
  const submitForm = async () => {
    const data = {
    name: form.name,
    firstName: form.firstName,
    email: form.email,
    companyName: form.companyName,
    companySize: form.companySize,
    goals: form.goals,
    isCompany: form.isCompany,
    isGetWebsite: form.isGetWebsite,
    socialNetworks: form.socialNetworks,
  };

    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        toast.success("Votre formulaire a bien été envoyé, nous vous contacterons prochainement.");
        step.value = 1;
        form.name = "";
        form.firstName = "";
        form.email = "";
        form.companyName = "";
        form.companySize = "";
        form.goals = { visibility: false, credibility: false, other: false };
        form.isGetWebsite = "";
        form.socialNetworks = {
        other_networks: false,
        instagram: false,
        linkedin: false,
        twitter: false,
        tiktok: false,
        facebook: false,
      };
    } else {
        toast.error("Une erreur est survenue lors de l'envoi du formulaire.");
    }
   
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f7f9fc;
    color: #fff;
    min-height: calc(100vh - 60px);
    
    background-image: url("/assets/background.png");
    background-size: cover;
    background-position: center;
  }

  .header {
   display: flex;
   flex-direction: column;
   gap: 20px;
  }
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    color: #fff;
  }

  h3{
    margin-bottom: 10px;
  }
  
  .p-questionnaire {
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
    max-width: 80%;
    margin: auto;
    font-weight: bold;
  }
  
  .steps {
    background-color: #907dd3;
    border-radius: 15px;
    padding: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    animation: fadeIn 0.7s ease-in-out;
    min-width: 250px;
  }
  
  .step-indicator {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #333;
  }
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  
  input:focus,
  select:focus {
    outline: none;
    border-color: #6c63ff;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
  }
  
  .radio-group,
  .checkbox-group {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 10px;
   margin-top: 15px;
  }
  
  button {
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.2s ease;
  }

  #btn-step-1 {
    display: flex;
    justify-content: flex-end;
  }
  
  .btn-primary {
    background-color: #6c63ff;
    color: #fff;
  }
  
  .btn-primary:hover {
    background-color: #574bd6;
  }
  
  .btn-secondary {
    background-color: #ddd;
    color: #333;
  }
  
  .btn-secondary:hover {
    background-color: #ccc;
  }

  .thanks-p {
   text-align: center;
   margin-bottom: 20px;
  }

  .button-area {
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
  } 
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /*responsive*/
  @media screen and (max-width:767px) {

    .steps{
      padding-bottom: 25px;
      padding-top: 30px;
      max-width: 300px;
    }

    h2{
      font-size: 2em;
    }

    .p-questionnaire{
      font-size: 1.1em;
    }

    .button-area button{
      padding:  12px 10px;
    }
    
  }

  @media screen and (max-width: 345px) {
    .steps{
      padding: 15px 25px;
    }
    input{
      width: 80%;
    }

    h2{
      font-size: 1.8em;
    }

    .p-questionnaire{
      font-size: 1em;
    }
    }


  </style>