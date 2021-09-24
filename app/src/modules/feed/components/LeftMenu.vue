<template>
  <div class="columns is-mobile">
    <div
      v-for="({ icon, route: routeName }, index) in options"
      :key="index"
      class="column has-text-centered"
    >
      <router-link
        :to="{ name: routeName }"
        :class="{
          button: true,
          'is-large': true,
          'is-primary': true,
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
  name: "LeftMenu",
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
        route: "feedMain",
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

.button:focus {
  box-shadow: none !important;
}
</style>
