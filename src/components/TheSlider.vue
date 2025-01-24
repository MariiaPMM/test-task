<template>
  <div class="slider-container">
    <div class="slider">
      <div class="slides" :style="{ transform: `translateY(-${currentSlide * 100}%)` }">
        <div class="slide-pair" v-for="(pair, index) in slidePairs" :key="index">
          <div class="slide" v-for="(slide, i) in pair" :key="i">
            <img :src="slide" :alt="'Slide ' + (index * 2 + i + 1)" />
          </div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <button
        v-for="(pair, index) in slidePairs"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSlider',
  data() {
    return {
      currentSlide: 0,
      slides: [
        new URL('@/assets/images/slider1.png', import.meta.url).href,
        new URL('@/assets/images/slider2.png', import.meta.url).href,
        new URL('@/assets/images/slider3.png', import.meta.url).href,
        new URL('@/assets/images/slider4.png', import.meta.url).href,
        new URL('@/assets/images/slider5.png', import.meta.url).href,
        new URL('@/assets/images/slider6.png', import.meta.url).href,
      ],
      autoScrollInterval: null, // Змінна для збереження інтервалу
    }
  },
  computed: {
    slidePairs() {
      // Групуємо слайди в пари
      return this.slides.reduce((result, slide, index) => {
        if (index % 2 === 0) result.push([])
        result[result.length - 1].push(slide)
        return result
      }, [])
    },
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index // Зміна поточного слайду при натисканні на крапочку
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slidePairs.length // Переходить до наступного слайду
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.nextSlide, 3000) // Автоматична прокрутка кожні 3 секунди
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval) // Зупиняє прокрутку
      this.autoScrollInterval = null
    },
  },
  mounted() {
    this.startAutoScroll() // Запускає автоматичну прокрутку після рендеру
  },
  beforeUnmount() {
    this.stopAutoScroll() // Очищає інтервал перед знищенням компонента
  },
}
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 642px;
  padding-right: 40px;
  margin: 25px;
  overflow: hidden;
  position: relative;
  height: 18.75rem; /* Висота контейнера слайдера */
  border-radius: 15px;
}

.slider {
  flex: 1;
  overflow: hidden;
  height: 100%; /* Повна висота контейнера */
  position: relative;
}

.slides {
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slide-pair {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  height: 100%; /* Висота кожної пари слайдів */
}

.slide {
  flex: 1;
  width: 50%; /* Половина контейнера (якщо два слайди в парі) */
  height: 100%; /* Рівна висота */
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Забезпечує рівномірне масштабування без спотворень */
  border-radius: 15px; /* Кути залишаються закругленими */
}

.navigation {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px; /* Відстань між крапками */
  z-index: 10;
}

.navigation button {
  background-color: rgba(255, 255, 255, 0.35);
  border: none; /* Видаляємо рамку */
  width: 15px; /* Ширина крапочки */
  height: 15px; /* Висота крапочки */
  border-radius: 50%; /* Робимо крапочку круглою */
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.3s ease; /* Анімація */
}

.navigation button:hover {
  transform: scale(1.2); /* Збільшення при наведенні */
}

.navigation .active {
  background-color: rgba(255, 255, 255, 1);
  transform: scale(1.4); /* Збільшення розміру активної крапочки */
}
</style>
