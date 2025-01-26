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
        new URL('@/assets/images/slider/slider1.png', import.meta.url).href,
        new URL('@/assets/images/slider/slider2.png', import.meta.url).href,
        new URL('@/assets/images/slider/slider3.png', import.meta.url).href,
        new URL('@/assets/images/slider/slider4.png', import.meta.url).href,
        new URL('@/assets/images/slider/slider5.png', import.meta.url).href,
        new URL('@/assets/images/slider/slider6.png', import.meta.url).href,
      ],
      autoScrollInterval: null,
      screenWidth: window.innerWidth, // Динамічна ширина екрана
    }
  },
  computed: {
    slidePairs() {
      const isSmallScreen = this.screenWidth <= 768
      const groupSize = isSmallScreen ? 1 : 2
      return this.slides.reduce((result, slide, index) => {
        if (index % groupSize === 0) result.push([])
        result[result.length - 1].push(slide)
        return result
      }, [])
    },
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slidePairs.length
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.nextSlide, 3000)
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval)
      this.autoScrollInterval = null
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth // Оновлює ширину екрана
    },
  },
  mounted() {
    this.startAutoScroll()
    window.addEventListener('resize', this.updateScreenWidth)
  },
  beforeUnmount() {
    this.stopAutoScroll()
    window.removeEventListener('resize', this.updateScreenWidth)
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
  height: 100%;
}

.slide {
  flex: 1;
  width: 50%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.navigation {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
}

.navigation button {
  background-color: rgba(255, 255, 255, 0.35);
  border: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.3s ease;
}

.navigation button:hover {
  transform: scale(1.2);
}

.navigation .active {
  background-color: rgba(255, 255, 255, 1);
  transform: scale(1.4);
}
@media (max-width: 1024px) {
  .slider-container {
    max-width: 90%;
    height: 16rem; /* Зменшена висота */
  }
}

@media (max-width: 768px) {
  .slider-container {
    height: 14rem;
  }
  .slide-pair {
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .slider-container {
    height: 10rem;
    padding-right: 10px;
  }
  .slide img {
    border-radius: 8px;
  }
  .navigation button {
    width: 6px;
    height: 6px;
  }
}
</style>
