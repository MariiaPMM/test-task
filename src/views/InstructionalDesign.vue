<template>
  <section id="instructionalDesign" class="container">
    <h2>Instructional Design</h2>
    <DesignCard
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :image="card.image"
      :list="card.list"
    />
  </section>
</template>

<script>
import DesignCard from '../components/DesignCard.vue'
import designImage from '../assets/images/InstructionalDesign/design2.png'
import designImage2 from '../assets/images/InstructionalDesign/design.png'

export default {
  name: 'InstructionalDesign',
  components: {
    DesignCard,
  },
  data() {
    const WeKnow =
      'Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.'
    const OurClients =
      'We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.'
    const firstLi = 'Each project requires a unique approach, and we are ready for the challenge'
    const secondLi = 'Our expertise in the training and development industry will make your project a success'
    const thirdLi = 'Your goals and deadlines are our priority'
    const fourthLi = 'We start each project with a careful analysis of your learning needs'
    const fifthLi = 'We constantly look for ways to save your time and money while exceeding your expectations'
    const sixthLi = 'We don’t stop working until you are satisfied with the products we deliver'

    return {
      cards: [
        {
          title: 'We know learning inside and out',
          description: WeKnow,
          image: designImage,
          list: [firstLi, secondLi, thirdLi],
        },
        {
          title: 'Our clients love the work we do',
          description: OurClients,
          image: designImage2,
          list: [fourthLi, fifthLi, sixthLi],
        },
      ],
    }
  },
}
</script>
<style>
#instructionalDesign .design__card:last-child {
  flex-direction: row-reverse;
  @media (max-width: 960px) {
    flex-direction: column;
  }
}</style>