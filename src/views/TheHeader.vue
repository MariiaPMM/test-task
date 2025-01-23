<template>
  <header>
    
      <!-- <h1>Header</h1> -->
      <TheSlider />
      <nav>
        <!-- <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a> -->
      </nav>
  
  </header>
</template>

<script>
import TheSlider from '../components/TheSlider.vue'
export default {
  name: 'TheHeader',
  components: {
    TheSlider,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
// header{
//   // background-image: url("../assets/images/bg.png");

// }
</style>
