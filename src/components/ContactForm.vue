<template>
  <!-- Section principale contenant le formulaire de contact -->
  <section class="contact-section">
    <!-- Titre de la section de contact -->
    <h2 class="contact-title">Contactez-nous</h2>
    
    <!-- Formulaire de contact -->
    <!-- L'attribut @submit.prevent empêche le comportement par défaut du formulaire (rechargement de la page) et appelle la méthode `sendEmail` lorsqu'on soumet le formulaire -->
    <form @submit.prevent="sendEmail" class="contact-form">
      
      <!-- Groupe de formulaire pour le nom de l'utilisateur -->
      <div class="contact-form-group">
        <label for="user_name">Nom</label>
        <!-- Champ de saisie pour le nom, lié à la propriété `user_name` dans l'objet `form` -->
        <input type="text" id="user_name" v-model="form.user_name" required>
      </div>

      <!-- Groupe de formulaire pour l'objet du message -->
      <div class="contact-form-group">
        <label for="user_object">Objet</label>
        <!-- Champ de saisie pour l'objet, lié à la propriété `user_object` dans l'objet `form` -->
        <input type="text" id="user_object" v-model="form.user_object" required>
      </div>

      <!-- Groupe de formulaire pour l'adresse email -->
      <div class="contact-form-group">
        <label for="user_email">Email</label>
        <!-- Champ de saisie pour l'email, lié à la propriété `user_email` dans l'objet `form` -->
        <input type="email" id="user_email" v-model="form.user_email" required>
      </div>

      <!-- Groupe de formulaire pour le message -->
      <div class="contact-form-group">
        <label for="message">Message</label>
        <!-- Champ de texte pour le message, lié à la propriété `message` dans l'objet `form` -->
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <!-- Bouton pour soumettre le formulaire -->
      <button type="submit">Envoyer</button>
      
      <!-- Affichage d'un message de réponse (succès ou échec) après l'envoi -->
      <div v-if="responseMessage">{{ responseMessage }}</div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'; // Importation de la bibliothèque Axios pour les requêtes HTTP

export default {
  data() {
    return {
      // Objet contenant les données du formulaire
      form: {
        user_name: '',    // Nom de l'utilisateur
        user_object: '',  // Objet du message
        user_email: '',   // Adresse email de l'utilisateur
        message: ''       // Contenu du message
      },
      responseMessage: '' // Message de réponse après l'envoi du formulaire
    };
  },
  methods: {
    // Méthode pour envoyer un email
    async sendEmail() {
      try {
        // Envoi d'une requête POST avec les données du formulaire à l'URL spécifiée
        const response = await axios.post('http://localhost:3000/send-email', this.form);
        
        // Si la requête réussit, on affiche le message de réponse du serveur
        this.responseMessage = response.data.message;
        
        // Réinitialisation du formulaire après l'envoi
        this.form = { user_name: '', user_object: '', user_email: '', message: '' };
      } catch (error) {
        // En cas d'erreur, on affiche un message d'échec et on log l'erreur dans la console
        this.responseMessage = 'Échec de l\'envoi. Veuillez réessayer.';
        console.error('Erreur lors de l\'envoi :', error.response ? error.response.data : error.message);
      }
    }
  }
};
</script>
