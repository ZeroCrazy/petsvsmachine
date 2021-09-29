<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="columns is-multiline">
      <div v-for="product in shop" :key="product.id" class="column is-6-tablet is-3-desktop">
        <BoxShop
          :title="product.title"
          :days="product.days"
          :usages="product.usages"
          :description="product.description"
          :cost="product.cost"
          :image="product.image"
          :action="product.action"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted } from "vue";
import useShop from "../composables/useShop";

export default {
  name: "Feed",
  components: {
    BoxShop: defineAsyncComponent(() => import("../components/BoxShop.vue")),
  },
  setup() {
    const { getShop, shop } = useShop();

    onMounted(async () => {
      const resp = await getShop();
      if (!resp.ok) alert("error");
    });

    return {
      shop,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

</style>

