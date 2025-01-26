<template>
  <header>
    <div class="header_top">
      <ThemeToggle :isDarkMode="isDarkMode" @toggle-theme="$emit('toggle-theme')" />
      <TheSlider />
    </div>
    <TheNavigation />
  </header>
</template>

<script>
import TheSlider from '../components/TheSlider.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import TheNavigation from '@/components/TheNavigation.vue'
export default {
  name: 'TheHeader',
  components: {
    TheSlider,
    ThemeToggle,
    TheNavigation,
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header_top {
  // min-height: 400px;
  background-image: url('../assets/images/bg.png');
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 75px;
  display: flex;
  justify-content: center;
}
header {
  display: flex;
  flex-direction: column;
}

@media (max-width: 648px) {
  .header_top {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
}
</style>
