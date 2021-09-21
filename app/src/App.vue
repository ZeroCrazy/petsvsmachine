<template>
  <div>
    <NavBar />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./modules/shared/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.main-container {
  height: calc(100vh - 56px);
}
</style>
