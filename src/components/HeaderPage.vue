<template>
  <header>
    <img src="@/assets/images/logo.png" alt="Logo" @click="scrollToSection('home')">
    <nav>
      <ul>
        <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projets</a></li>
        <li><a href="#about" @click.prevent="scrollToSection('about')">À Propos</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
};
</script>