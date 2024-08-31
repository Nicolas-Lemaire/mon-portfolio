<template>
  <footer>
    <p>&copy; 2024 Mon Portfolio</p>
    <ul>
      <li>
        <a href="https://github.com/Nicolas-Lemaire" target="_blank">
          <img src="@/assets/images/github-icon.png" alt="GitHub icon">
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/nicolas-lemaire-aa4232315/" target="_blank">
          <img src="@/assets/images/logo-linkedin.png" alt="LinkedIn icon">
        </a>
      </li>
      <!-- Ajoutez d'autres réseaux sociaux ici -->
    </ul>
    <p>Dernière mise à jour : {{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>


