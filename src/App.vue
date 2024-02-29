<template>
  <NavBar/>
  <HeroSection/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {NavBar, HeroSection}
})

</script>

<style scoped>

</style>
