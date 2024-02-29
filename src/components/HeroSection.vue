<template>
  <section class="section hero">
    <div class="hero-info">
      <div class="hero-info-left">
        <span class="hero-description">форум на байкале</span>
        <h1 class="hero-heading">Форум МФЦ</h1>
        <span class="hero-date">апрель 2024</span>
        <span class="hero-description">Запишитесь заранее</span>
        <div class="hero-buttons">
          <button class="btn btn-application">Подать заявку</button>
          <button class="btn btn-forum">Программа форума</button>
        </div>
      </div>
      <div class="hero-info-right">
        <ol>
          <li>
            <h2 class="right-heading">Запишитесь</h2>
            <span class="hero-description">Какой-то текст</span>
          </li>
          <li>
            <h2 class="right-heading">Получите приглашение</h2>
            <span class="hero-description">Какой-то текст</span>
          </li>
          <li>
            <h2 class="right-heading">Прилетайте в гости</h2>
            <span class="hero-description">Какой-то текст</span>
          </li>
        </ol>
      </div>
    </div>
    <img src="../assets/hero-section/bgcube.webp" alt="" class="hero-img"/>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  padding-top: 128px;
  padding-bottom: 32px;
}

.hero-heading {
  padding-top: 7px;
  padding-bottom: 16px;
  font-size: clamp(42px, 5vw, 60px);
}

.hero-date {
  display: block;
  margin-bottom: 54px;
  font-size: clamp(45px, 7vw, 52px);
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, red, fuchsia);
}

.hero-description {
  display: block;
  color: rgb(168, 184, 205);
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
}

.btn {
  display: inline-block;
  padding: 14px 54px;
  background: none;
  border: none;
  border-radius: 5px;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  cursor: pointer;
}

.btn:hover {
  transform: scale(110%);
}

.btn-application {
  background-color: #6e4b3b;
  color: #ffffff;
  margin-right: 20px;
}

.btn-forum {
  border: 1px solid #000000;
}

.hero-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.hero-info-left {
  border-right: 1px solid #e1e1e1;
}

.hero-info-right {
  padding-left: 120px;
}

.hero-info-right ol {
  counter-reset: num;
}

.hero-info-right li {
  position: relative;
}

.hero-info-right li:before {
  content: "0" counter(num) ".";
  counter-increment: num;
  display: inline-block;
  position: absolute;
  top: 5px;
  left: -70px;
  width: 20px;
  font-size: 22px;
  text-align: right;
}

.hero-info-right li:not(:last-child) {
  margin-bottom: 54px;
}

.right-heading {
  font-size: 27px;
  margin-bottom: 16px;
}

.hero-img {
  display: block;
  padding-top: 128px;
  width: 100%;
}

@media (max-width: 1030px) {
  .btn-application {
    margin-bottom: 20px;
  }
}

@media (max-width: 704px) {
  .hero-info-left {
    border: none;
  }

  .btn-application {
    margin-bottom: 0;
  }

  .hero-info-left {
    margin-bottom: 40px;
  }

  .hero-info-right {
    padding-left: 0;
  }

  .hero-info-right li:before {
    top: -28px;
    left: 0px;
    width: 20px;
    font-size: 22px;
    text-align: right;
  }
}

@media (max-width: 539px) {
  .btn-application {
    margin-bottom: 20px;
  }
}
</style>
