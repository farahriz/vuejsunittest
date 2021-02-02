<template>
  <div>
    <button v-show="loggedIn">Logou</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style>
</style>