<template>
  <div id="home" class="home">
    <!-- Section Accueil -->
    <section id="home" class="home-section">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </section>

    <!-- Section Projets -->
    <section id="projects" class="projects-section">
      <h2>Projets</h2>
      <div class="projects">
        <div v-for="project in projects" :key="project.id" class="project">
          <img :src="project.image" :alt="project.title">
          <h3>{{ project.title }}</h3>
          <button @click="selectProject(project)">Détails</button>
        </div>
      </div>
    </section>

    <!-- Section À Propos -->
    <section id="about" class="about-section">
      <h2>À Propos</h2>
      <p>
        Bonjour, je suis Nicolas Lemaire, Développeur Web et Web Mobile Junior passionné.<br>
        Je suis spécialisé dans la création de solutions digitales avec des technologies modernes telles que Vue.js, HTML5, CSS3, JavaScript, PHP, et MySQL. 
        J’aime concevoir des expériences utilisateur fluides et des interfaces intuitives pour transformer vos idées en projets web élégants et fonctionnels.<br> 
        En plus du développement web, je suis passionné par la programmation de jeux, la modélisation 3D et la gestion de serveurs de jeux, ce qui me permet d'explorer des univers immersifs.<br>
        Curieux et toujours en quête d'apprentissage, je vois chaque projet comme une occasion de repousser mes limites. 
        Vous pouvez découvrir mes réalisations sur la page d'accueil, et pour toute question ou collaboration, n’hésitez pas à me contacter via le formulaire ci-dessous.
      </p>
    </section>

    <!-- Section Contact (Toujours affichée) -->
    <section id="contact" class="contact-section">
      <ContactForm></ContactForm>
    </section>

    <!-- Modal pour les détails du projet -->
    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="deselectProject"></ProjectModal>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import ProjectModal from '@/components/ProjectModal.vue';

export default {
  components: { ContactForm, ProjectModal },
  data() {
    return {
      title: 'Mon Portfolio',
      description: 
      `Je suis ravi de vous accueillir dans cet espace dédié à la présentation de mes projets récents.
      Ce portfolio est le fruit de plusieurs mois de travail acharné et d'innovation, visant à mettre en lumière une sélection de réalisations significatives dans le domaine du développement web. 
      Chaque projet que vous découvrirez ici est soigneusement choisi pour illustrer mon expertise technique et ma passion pour le développement web.`,
      projects: [
        {
          id: 1,
          title: 'CV HTML',
          image: require('@/assets/images/photo_cv.png'),
          creationDate: '2024-06-20',
          technologies: ['HTML', 'CSS', 'GitHub'],
          github: 'https://github.com/Nicolas-Lemaire/cv-html',
          shortDescription: 'Ce projet consiste en la création d\'un CV interactif et moderne en utilisant HTML et CSS. Mon objectif était de concevoir un CV à la fois visuellement attrayant et facile à naviguer.'
        },
        {
          id: 2,
          title: 'Cahier des charges',
          image: require('@/assets/images/image2.png'),
          creationDate: '2024-07-15',
          technologies: ['Canva', 'PhotoShop'],
          link: '/documents/cahier-des-charge.pdf',
          shortDescription: 'Dans ce projet, j\'ai conçu le cahier des charges pour le nouveau site web de La Soketterie, une entreprise spécialisée dans les chaussettes dépareillées. L\'objectif était de définir précisément les besoins et attentes pour la création d\'un site web performant et engageant. Ce document a servi de guide pour les équipes de développement, de design et de marketing afin d’assurer une vision unifiée du projet.',
        },
        {
          id: 3,
          title: 'Dynamiser un espace commentaire',
          image: require('@/assets/images/image3.png'),
          creationDate: '2024-08-24',
          technologies: ['JavaScript', 'GitHub'],
          github: 'https://github.com/Nicolas-Lemaire/Dynamiser-espace-commentaire',
          shortDescription: 'Dans ce projet, j\'ai développé une fonctionnalité en JavaScript pour dynamiser l\'espace commentaire d\'un site web. L\'objectif était d\'améliorer l\'interaction utilisateur en rendant l\'ajout de commentaires et la gestion des réponses plus fluides et engageantes, sans nécessiter de rechargement de page. Cette implémentation m\'a permis de perfectionner mes compétences en JavaScript.'
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
    },
    deselectProject() {
      this.selectedProject = null;
    },
  },
};
</script>