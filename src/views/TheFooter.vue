<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__logo">
        <img class="footer__img" src="../assets/images/logo-footer.png" alt="" />
        <p class="footer__info">Taking learning to the next level</p>
      </div>
      <ul class="footer__list">
        <li><a href="#">Home eLearning </a></li>
        <li><a href="#">Price Quote Services </a></li>
        <li><a href="#">Instructional Design</a></li>
        <li><a href="#">eLearning Development </a></li>
        <li><a href="#">Mobile Learning </a></li>
        <li><a href="#">Product Training</a></li>
        <li><a href="#">Custom eLearning </a></li>
        <li><a href="#">eLearning for Retail</a></li>
        <li><a href="#">eLearning Packages</a></li>
        <li></li>
        <li></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer__bottom">
      <p>Copyright © 2016 eLearning Company</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style>
footer {
  background: #414141;
}
.footer__top {
  display: flex;
  justify-content: space-between;
  color: #929292;
  padding: 60px 0;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 15px 0 ;
  }
  
}
.footer__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  li {
    list-style-type: none;
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
    @media (max-width: 1024px) {
      flex: 1 1 calc(50% - 20px);
    }
    @media (max-width: 480px) {
      flex: 1 1 100%;
    }
  }
}
.footer__logo {
  max-width: 230px;
  max-height: 60px;
  padding: 0;
  margin: 0 200px 0 0;
  @media (max-width: 1280px) {
    margin: 0 50px 0 0;
  }
  @media (max-width: 960px) {
    margin: 0 0 20px;
  }
}
.footer__info {
  margin: 0;
  font-size: 12px;
  font-family: 'Raleway';
}
a {
  text-decoration: none;
  color: #929292;
}
.footer__bottom {
  display: flex;
  justify-content: center;
  background: #383838;
  color: #595959;
}
</style>
