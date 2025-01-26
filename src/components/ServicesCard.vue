<template>
  <div class="card">
    <div class="image__container"><img :src="image" alt="Card image" class="card-image" /></div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard',
  props: {
    image: String,
    title: String,
    description: String,
  },
}
</script>

<style scoped>
.card {
  padding: 15px;
  max-width: 200px;
}

.image__container {
  content: '';
  background: #dcce90;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-image {
  max-width: 75%;
  max-height: 75%;
  border-radius: 5px;
}

.card-title {
  font-size: 16px;
  margin-top: 10px;
  display: flex;
  height: 50px;
  border-bottom: 2px solid #dcce90;
  color: var(--card-color);
}

.card-description {
  font-size: 14px;
  color: var(--card-color);
}
</style>
