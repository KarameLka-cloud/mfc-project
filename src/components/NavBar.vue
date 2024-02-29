<template>
  <BurgerSection :closeMenu="closeMenu"/>
  <div class="nav-background">
    <nav class="section nav">
      <a class="nav-logo logo-link">
        <img src="../assets/nav-bar/main_logo-3.png" alt="" class="logo-img"/>
      </a>
      <ul class="nav-links">
        <li class="nav-link nav-link-main">Menu Item</li>
        <li class="nav-link nav-link-drop">Menu dropdown
          <img src="../assets/nav-bar/arrow.svg" alt="" class="link-arrow"/>
          <ul class="drop-links">
            <li class="drop-item">
              <a class="drop-link">First item</a>
            </li>
            <li class="drop-item">
              <a class="drop-link">Second item</a>
            </li>
          </ul>
        </li>
        <li class="nav-link nav-link-drop">Mega dropdown
          <img src="../assets/nav-bar/arrow.svg" alt="" class="link-arrow"/>
          <div>
            <ul class="drop-links">
              <li class="drop-item">
                <a class="drop-link drop-list">Menu heading</a>
              </li>
              <li class="drop-item">
                <a class="drop-link drop-list">Menu heading</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <img src="../assets/nav-bar/burger.svg" alt="" class="nav-burger" @click="showMenu"/>
    </nav>
  </div>
</template>

<script>
import BurgerSection from "./BurgerSection.vue";

export default {
  name: 'NavBar',
  components: {BurgerSection},
  isVisible: false,
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    closeMenu(event) {
      this.isVisible = event;
      console.log(this.isVisible);
    }
  }
}
</script>

<style scoped>
.nav-background {
  background-color: #6e4b3b;
}

.nav {
  margin: 0 auto;
  padding: 25px 32px;
  display: flex;
  height: 120px;
}

.nav-logo {
  align-self: center;
}

.logo-img {
  width: 100%;
}

.nav-links {
  display: flex;
  margin-left: 30px;
  align-self: flex-end;
  color: #fefefe;
}

.nav-link {
  cursor: pointer;
  padding: 15px 0;
}

.nav-link:not(:last-child) {
  margin-right: 20px;
}

.nav-link-main {
  position: relative;
}

.nav-link-main:before {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #fefefe;
  content: "";
  transition: width 0.3s ease-out;
}

.nav-link-main:hover:before {
  width: 100%;
}

.drop-links {
  margin-top: 10px;
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.4);
}

.nav-link-drop:hover .drop-links {
  display: block;
}

.drop-item {
  padding: 10px 15px;
  color: #000;
  background-color: #fff;
}

.drop-link {
  display: inline-block;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.drop-link:hover {
  transform: translateX(6px);
}

.drop-list {
  position: relative;
}

.link-arrow {
  display: inline-block;
  height: 10px;
  margin-left: 4px;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.nav-link-drop:hover .link-arrow {
  transform: rotate(180deg);
}

.nav-burger {
  display: none;
  height: 24px;
  align-self: center;
}

@media (max-width: 920px) {
  .nav-links {
    display: none;
  }

  .nav-burger {
    display: inline-block;
    margin-left: auto;
  }
}
</style>
