<template>
  <div class="columns is-mobile">
    <div class="column has-text-centered">
      <router-link
        :to="{ name: 'feedMain' }"
        class="button is-large is-primary is-active"
        ><i class="fal fa-bone"></i
      ></router-link>
    </div>
    <div class="column has-text-centered">
      <router-link :to="{ name: 'feedShop' }" class="button is-large is-primary"
        ><i class="fal fa-shopping-basket"></i
      ></router-link>
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
