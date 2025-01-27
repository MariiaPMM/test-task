<template>
  <div class="design__card">
    <div class="image__container">
      <img :src="image" alt="Card image" class="card-image" />
    </div>
    <div class="card__info">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <!-- Список з галочками -->
      <ul class="card-list">
        <li v-for="(item, index) in list" :key="index" class="card-list-item">
          <span class="checkmark">
            <img
              src="@/assets/images/InstructionalDesign/checkmark.png"
              alt="checkmark"
              class="checkmark-icon"
            />
          </span>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignCard',
  props: {
    image: String,
    title: String,
    description: String,
    list: Array, // Додаємо нову властивість для списку
  },
}
</script>

<style lang="scss" scoped>
.design__card {
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }

  .image__container {
    // text-align: center;
    margin-bottom: 1rem;

    .card-image {
      max-width: 300px;
    }
  }

  .card__info {
    color: var(--desine-text);
    max-width: 60%;
    @media (max-width: 960px) {
      max-width: 100%;
    }
    // margin: 0 0 0 20px;
    .card-title {
      font-size: 1.9rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }


    .card-list {
      list-style: none;
      padding: 0;
      display: flex;
      align-items: start;
      flex-direction: column;

      .card-list-item {
        display: flex;
        align-items: center;
        // margin-bottom: 0.5rem;

        .checkmark {
          margin-right: 0.5rem;

          .checkmark-icon {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
</style>
