<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="columns">
      <div v-for="product in shop" :key="product.id" class="column is-3">
        <BoxShop
          :title="product.title"
          :days="product.days"
          :utilization="product.utilization"
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

.shop-card {
  color: #3c415c;
  border: 2px solid #000000;
  box-shadow: inset 0 -4px 0 #00000063;
  box-sizing: border-box;
}
.shop-card .title {
  font-weight: 700;
  line-height: 1.25;
  font-size: 16px;
  word-spacing: 1px;
  margin-bottom: 2px !important;
}
.shop-card .extrainfo {
  line-height: 1.25;
  font-size: 16px;
  word-spacing: 1px;
  margin-bottom: 15px !important;
}
.shop-card .description {
  min-height: 72px;
}
.shop-card p {
  margin-bottom: 20px !important;
}
.shop-options {
  height: auto;
  width: 100%;
  float: unset;
}
.shop-options .box {
  padding: 20px 0px;
  margin: 0px 0px 5px 0px;
}
.shop-product {
  /*background: url('../images/land.svg');*/
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  border-radius: 3px;
  height: 201px;
  margin-bottom: 10px;
  background-color: rgb(0 0 0 / 15%);
}
.shop-product .object {
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  width: 40%;
  height: 40%;
  margin-left: 30%;
  margin-right: 30%;
  position: relative;
  top: 49px;
}
.shop-button,
.shop-button:hover,
.shop-button:focus,
.shop-button:active {
  height: 40px !important;
  background: #71c638 !important;
  border: 2px solid #263f2a !important;
  box-shadow: 0 2px 0 rgb(0 0 0 / 20%), inset 0 -4px 0 #46881b,
    inset 0 2px 0 #b5ff84 !important;
  border-radius: 8px !important;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  color: #fff;
}
</style>

