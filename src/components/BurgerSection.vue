<script>
export default {
  name: 'BurgerSection',
  props: {
    isVisible: {
      type: Boolean
    }
  },
}
</script>

<template>
  <div class="burger-section">
    <ul>
      <li>sdfsdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
    </ul>
    <button @click="this.$emit('closeMenu', false)">skfnsjd</button>
  </div>
</template>

<style scoped>
.burger-section {
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vh;
  z-index: 2;
  background-color: #fefefe;
}
</style>
