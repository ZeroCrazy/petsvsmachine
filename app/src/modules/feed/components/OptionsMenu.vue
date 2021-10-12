<template>
  <div class="columns is-mobile">
    <div class="column has-text-centered">
      <router-link
        v-for="({ icon, route: routeName }, index) in options"
        :key="index"
        :to="{ name: routeName }"
        :class="{
          button: true,
          'is-large': true,
          'is-primary': true,
          'navbar-btn-feed-left': true,
          'is-active': $route.name === routeName,
        }"
        ><i :class="icon"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";

export default {
  name: "OptionsMenu",
  components: {},

  setup() {
    const options = [
      {
        icon: "fal fa-bone",
        route: "feedMain",
      },
      {
        icon: "fal fa-shopping-basket",
        route: "feedShop",
      },
      {
        icon: "fal fa-backpack",
        route: "feedInventory",
      },
      {
        icon: "fal fa-map",
        route: "feedLands",
      },
    ];
    return {
      options,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

// .column:first-child {
//   margin-left: 1rem !important;
// }
</style>
