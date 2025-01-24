<template>
  <div :class="themeClass">
    <!-- <TheHeader /> -->
    <TheHeader :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" />
    <div class="main-content">
      <KnowMore />
      <!-- Перша секція -->
      <!-- <Section2 /> Друга секція -->
      <!-- <Section3 /> Третя секція -->
    </div>
    <TheFooter />
  </div>
</template>

<script>
import KnowMore from '../views/KnowMore.vue'
import TheHeader from '../views/TheHeader.vue'
import TheFooter from '../views/TheFooter.vue'

export default {
  name: 'HomeView',
  components: {
    KnowMore,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      isDarkMode: false, // Стан теми
    }
  },
  computed: {
    themeClass() {
      return this.isDarkMode ? 'dark-theme' : 'light-theme'
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode // Перемикаємо тему
    },
  },
}
</script>
<!-- 
<style>
:root {
  --background-color: #ffffff;
  --text-color: #000000;
}

.dark-theme {
  --background-color: #333333;
  --text-color: #ffffff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  font-family: Arial, sans-serif;
}
</style> -->
