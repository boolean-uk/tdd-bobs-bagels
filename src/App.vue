<template>
  <Main></Main>
</template>

<script>
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
body {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(229, 229, 255, 1) 39%, rgba(218, 248, 255, 1) 100%);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
