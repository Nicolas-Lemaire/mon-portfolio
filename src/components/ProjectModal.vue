<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <button class="close" @click="closeModal" aria-label="Close modal">&times;</button>
      <!-- Affichage de l'image du projet -->
      <img :src="project.image" :alt="project.title" class="modal-image">
      <!-- Affichage du titre du projet -->
      <h2>{{ project.title }}</h2>
      <!-- Affichage de la date de création -->
      <p><strong>Date de création:</strong> {{ project.creationDate }}</p>
      <!-- Affichage des technologies utilisées -->
      <p>
        <strong>Technologies utilisées:</strong>
        {{ project.technologies && Array.isArray(project.technologies) ? project.technologies.join(', ') : 'Aucune technologie spécifiée' }}
      </p>
      <!-- Affichage du lien -->
      <div v-if="project.link">
        <a :href="project.link" target="_blank" class="modal-link" rel="noopener noreferrer">
          Visiter le site ou télécharger
        </a>
      </div>
      <!-- Affichage du lien GitHub -->
      <div v-if="project.github">
        <a :href="project.github" target="_blank" class="modal-link" rel="noopener noreferrer">
          Voir le repository GitHub
        </a>
      </div>
      <!-- Affichage de la description courte -->
      <p><strong>Description:</strong> {{ project.shortDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
      validator(value) {
        // Validation basique des propriétés du projet
        return value && typeof value.title === 'string' && typeof value.creationDate === 'string';
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>