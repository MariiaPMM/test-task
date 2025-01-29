<template>
  <section class="knowmore__container" id="eLearningPriceQuote">
    <div class="knowmore__background">
      <div class="knowmore__content">
        <div class="content__info">
          <h2>
            We Design <br />
            Learning.
          </h2>
          <p>What We Can Do For You?</p>
          <a href=""><button class="button">Know More</button></a>
        </div>
        <div class="info__man"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KnowMore',
}
</script>

<style lang="scss" scoped>
.knowmore__container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Фонове зображення */
  .knowmore__background {
    flex: 1 1 auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 85%;
    max-height: 30rem;
    background: url('@/assets/images/knowMore/knowBackground.png') no-repeat center center;
    background-size: cover;
    overflow: hidden;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 1;
    display: flex;
    align-items: end;
  }

  .knowmore__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    gap: 2rem;
  }

  .content__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 0 140px;

    h2 {
      font-size: clamp(2rem, 5vw, 4rem);
      text-transform: uppercase;
      color: rgba(66, 66, 66, 1);
      margin: 0 0 1rem;
    }

    p {
      color: rgba(66, 66, 66, 1);
      font-size: clamp(1rem, 3vw, 2rem);
      font-weight: 250;
      font-family: 'MuseoSans';
      margin: 0 0 2rem;
    }

    // button {
    //   background-color: rgba(61, 148, 140, 1);
    //   height: clamp(2rem, 5vw, 3rem);
    //   width: clamp(8rem, 15vw, 15rem);
    //   border-radius: 2rem;
    //   border: none;
    //   color: rgba(255, 255, 255, 1);
    //   font-size: clamp(1rem, 2vw, 1.5rem);
    //   cursor: pointer;
    // }
  }

  .info__man {
    flex: 1;
    min-height: 25rem;
    margin: 20px 0px 0 0;
    background: url('../assets/images/knowMore/man.png') no-repeat bottom center;
    background-size: contain;
  }

  @media (max-width: 768px) {
    .knowmore__background {
      width: 95%;
    }
    .info__man {
      flex: none; /* Прибираємо вплив flex для зупинки автоматичного масштабування */
      width: 200px; /* Фіксуємо ширину */
      height: 300px; /* Фіксуємо висоту */
      background-size: contain; /* Переконуємося, що фон адаптується у межах встановленого розміру */
    }
    .content__info {
      padding: 0 0 0 15px;
    }
  }

  .content__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 0 140px;

    h2 {
      font-size: clamp(2rem, 5vw, 4rem); /* Масштабування заголовка */
      text-transform: uppercase;
      color: rgba(66, 66, 66, 1);
      margin: 0 0 1rem;
    }

    p {
      color: rgba(66, 66, 66, 1);
      font-size: clamp(1rem, 3vw, 1.5rem); /* Масштабування тексту */
      font-weight: 250;
      font-family: 'MuseoSans';
      margin: 0 0 2rem;
    }

    button {
      background-color: rgba(61, 148, 140, 1);
      height: clamp(2rem, 5vw, 3rem); /* Масштабування кнопки */
      width: clamp(8rem, 15vw, 15rem);
      border-radius: 2rem;
      border: none;
      color: rgba(255, 255, 255, 1);
      font-size: clamp(1rem, 2vw, 1.5rem); /* Масштабування тексту на кнопці */
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .content__info {
      padding: 0 0 0 15px;

      h2 {
        font-size: clamp(1.5rem, 6vw, 3rem); /* Додаткове масштабування */
      }

      p {
        font-size: clamp(0.9rem, 4vw, 1.2rem);
      }
    }
  }
}
</style>
