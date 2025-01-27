<template>
  <section class="container">
    <div class="services">
      <h2>Services We Provide</h2>

      <input v-model="searchQuery" type="text" placeholder="Search" class="search-input" />

      <div class="card-list">
        <ServicesCard
          v-for="(card, index) in filteredCards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServicesCard from '../components/ServicesCard.vue'
import cardIcon from '@/assets/images/servicesImage/first.svg'
import cardComputer from '@/assets/images/servicesImage/computer.svg'
import cardPhone from '@/assets/images/servicesImage/phone.svg'
import cardMen from '@/assets/images/servicesImage/man.svg'
export default {
  name: 'TheServices',
  components: {
    ServicesCard,
  },
  data() {
    const InstructionalDesign =
      'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.'
    const ELEARNINGDEVELOPMENT =
      'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.'
    const MOBILELEARNING =
      'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.'
    const INSTRUCTOR_LEDTRAINING =
      'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.'
    return {
      searchQuery: '',

      cards: [
        { title: 'Instructional Design', description: InstructionalDesign, image: cardIcon },
        { title: 'ELEARNING DEVELOPMENT', description: ELEARNINGDEVELOPMENT, image: cardComputer },
        { title: 'MOBILE LEARNING', description: MOBILELEARNING, image: cardPhone },
        { title: 'INSTRUCTOR-LED TRAINING', description: INSTRUCTOR_LEDTRAINING, image: cardMen },
      ],
    }
  },
  computed: {
    filteredCards() {
      return this.cards.filter((card) => {
        const searchLower = this.searchQuery.toLowerCase()
        return (
          card.title.toLowerCase().includes(searchLower) ||
          card.description.toLowerCase().includes(searchLower)
        )
      })
    },
  },
}
</script>

<style>
.search-input {
  max-width: 300px;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid var(--search-background);
  border: none;
  border-radius: 27.5px;

  outline: none;
  /* filter: var(--search-icon); */
  background: var(--search-icon) no-repeat right center;
  background-color: var(--search-background);
}
.search-input::placeholder {
  color: var(--search-color);
}
h2 {
  font-size: 3.12rem;
  color: #999b9a;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 2rem;
  }
}
.card-list {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: space-between;
  margin: 0 0 100px;
}
@media (max-width: 1024px) {
  .card-list {
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    .card-list {
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0 0 15px;
    }
  }
}
</style>
