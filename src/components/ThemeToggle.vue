<template>
  <div class="card">
    <div class="card-content">
      <img class="logo" src="../assets/images/logo/logo.png" alt="logo" />
      <p :class="{ 'dark-text': isDarkMode }">Taking Learning to the Next Level</p>
      <div class="theme-toggle" @click="toggleTheme">
        <div class="mode-label" :class="{ left: isDarkMode, right: !isDarkMode }">
          {{ isDarkMode ? 'NIGHTMODE' : 'DAYMODE' }}
        </div>
        <div class="toggle-circle" :class="{ active: !isDarkMode }">
          <img :src="isDarkMode ? nightIcon : dayIcon" alt="icon" class="circle-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggleCard',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dayIcon: new URL('@/assets/images/theme/day.png', import.meta.url).href,
      nightIcon: new URL('@/assets/images/theme/night.png', import.meta.url).href,
    }
  },
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme')
    },
  },
}
</script>

<style scoped>
.card {
  background-color: var(--background-color);
  border-radius: 15px;
  padding: 130px 40px 0;
  margin: 0 15px 0;
  max-width: 13rem;
  max-height: 18.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-content {
  text-align: center;
}

.theme-toggle {
  position: relative;
  width: 100px;
  height: 20px;
  background-color: var(--theme-background);
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 400;
  color:var(--text-color);
}

.mode-label {
  font-size: 10px;
  transition: transform 0.3s ease;
}

.mode-label.left {
  padding: 0 0 0 22px;
}

.toggle-circle {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  transition:
    transform 0.3s ease,
    left 0.3s ease;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-circle.active {
  left: 70px;
  border: 1px solid #ebebeb;
}

.toggle-circle:not(.active) {
  left: 0px;
  border: 1px solid #343434;
}

.circle-icon {
  width: 20px;
  height: 20px;
}

.logo {
  max-width: 100%;
  object-fit: contain;
  border-bottom: 1px solid #ded098;
}

p {
  font-family: 'MuseoSans', sans-serif;
  font-weight: 400;
  color: #424242;
}

.dark-text {
  color: #ffffff;
}

@media (max-width: 648px) {
  .card {
    height: 100px;
    width: 12rem;
    padding: 10px;
    display: flex;
    justify-self: center;
  }
  .logo {
    width: 80%;
  }
  p {
    display: none;
  }
}
</style>
