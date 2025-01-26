<template>
  <section class="knowmore__container">
    <div class="knowmore__background"> 
    <div class="knowmore__content">
      <div class="content__info">
        <h2>
          We Design <br />
          Learning.
        </h2>
        <p>What We Can Do For You?</p>
        <a href=""><button>Know More</button></a>
      </div>
      <div class="info__man"></div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "KnowMore",
};
</script>

<style lang="scss" scoped>
.knowmore__container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Секція займатиме весь екран */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Фонове зображення */
  .knowmore__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 500px;
    background: url("@/assets/images/knowMore/knowBackground.png") no-repeat center center;
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
      font-family: "MuseoSans";
      margin: 0 0 2rem;
    }

    button {
      background-color: rgba(61, 148, 140, 1);
      height: clamp(2rem, 5vw, 3rem);
      width: clamp(8rem, 15vw, 15rem);
      border-radius: 2rem;
      border: none;
      color: rgba(255, 255, 255, 1);
      font-size: clamp(1rem, 2vw, 1.5rem);
      cursor: pointer;
    }
  }

  .info__man {
    flex: 1;
    width: 100%;
    height: 400px; 
    background: url("../assets/images/knowMore/man.png") no-repeat center center;
    background-size: contain; 
  }
}
</style>
