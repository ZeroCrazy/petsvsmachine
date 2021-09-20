<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: { NavBar },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>
