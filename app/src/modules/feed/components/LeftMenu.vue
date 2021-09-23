<template>
  <div class="columns is-mobile">
    <div class="column has-text-centered">
      <a href="feed.html" class="button is-large is-primary is-active"
        ><i class="fal fa-bone"></i
      ></a>
    </div>
    <div class="column has-text-centered">
      <a href="shop.html" class="button is-large is-primary"
        ><i class="fal fa-shopping-basket"></i
      ></a>
    </div>
    <div class="column has-text-centered">
      <a href="inventory.html" class="button is-large is-primary"
        ><i class="fal fa-backpack"></i
      ></a>
    </div>
    <div class="column has-text-centered">
      <a href="land.html" class="button is-large is-primary"
        ><i class="fal fa-map"></i
      ></a>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";

export default {
  name: "LeftMenu",
  components: {},

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>
