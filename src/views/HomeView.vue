<template>
  <div>
    <TheHeader />

    <KnowMore />
    <!-- Перша секція -->
    <!-- <Section2 /> Друга секція -->
    <!-- <Section3 /> Третя секція -->
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
}
</script>
