<template>
  <nav>
    <div class="container" :class="{ 'column-layout': isMenuOpen }">
      <div class="burger">
        <a class="image" href="#home">
          <img src="../assets/images/logo/logolight.png" alt="Logo" class="logo" />
        </a>
        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>
      </div>
      <ul class="nav__menu" :class="{ 'show-menu': isMenuOpen }">
        <li><a href="/#home" @click="closeMenu" replace>Home</a></li>
        <li>
          <a href="#services" @click="closeMenu" >Services</a>
        </li>
        <li>
          <a href="/#instructionalDesign" @click="closeMenu" replace>Instructional Design</a>
        </li>
        <li>
          <a href="/#eLearningPriceQuote" @click="closeMenu" replace>eLearning Price Quote</a>
        </li>
        <li>
          <a href="/#eLearningPackages" @click="closeMenu" replace>eLearning Packages</a>
        </li>
        <li><a href="/#contact" @click="closeMenu" replace>Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  background: var(--nav-color);
  border-top: 10px solid #3d948e;
  height: auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5px 20px;

    &.column-layout {
      flex-direction: column;
      align-items: flex-start;
    }

    .image {
      flex: 1;
      width: 30%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      // position: absolute;
      right: 20px;

      span {
        display: block;
        width: 25px;
        height: 3px;
        background: #ffffff;
        transition:
          transform 0.3s,
          opacity 0.3s;
      }

      & .open:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }

      & .open:nth-child(2) {
        opacity: 0;
      }

      & .open:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -7px);
      }
    }

    .nav__menu {
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      list-style: none;
      font-size: 14px;
      font-weight: 300;
      max-width: 80%;

      a {
        text-decoration: none;
        color: #ffffff;
        transition: color 0.3s;
        margin: 0 10px 0;
        font-family: 'MuseoSans';
        &:hover {
          color: #3d948e;
        }
      }
    }

    .show-menu {
      display: flex !important;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

@media (max-width: 1024px) {
  nav {
    .container {
      .burger {
        display: flex;
        width: 100%;
      }
      .menu-toggle {
        display: flex;
      }

      .nav__menu {
        display: none;
        flex-direction: column;
        width: 80%;
        padding: 10px 0;

        li {
          width: 100%;
          text-align: left;
          padding: 10px 0;
        }

        a {
          display: block;
          width: 100%;
        }
      }

      .show-menu {
        display: flex !important;
      }
    }
  }
}
</style>
