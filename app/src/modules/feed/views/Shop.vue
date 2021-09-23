<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <div class="card shop-card has-background-warning">
          <div class="card-content">
            <div class="content">
              <div class="shop-product">
                <div
                  class="object"
                  style="
                    background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');
                  "
                ></div>
              </div>
              <p class="title"><b>Pet low cost</b></p>
              <div class="extrainfo">
                <span>Duration: <b>4 days</b></span>
                <span style="float: right">Usage: <b>1</b></span>
              </div>
              <p class="description">
                A temporary pet that gives 300CE/96h, is not affected by weather
                events.
              </p>
              <button class="button shop-button is-fullwidth">150 CE</button>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card shop-card has-background-warning">
          <div class="card-content">
            <div class="content">
              <div class="shop-product">
                <div
                  class="object"
                  :style="`background: url(${require('@/assets/icons/house.png')})`"
                ></div>
              </div>
              <p class="title"><b>House</b></p>
              <div class="extrainfo">
                <span>Duration: <b>10 days</b></span>
                <span style="float: right">Usage: <b>1</b></span>
              </div>
              <p class="description">
                You need a small house to start digging.
              </p>
              <button class="button shop-button is-fullwidth">50 CE</button>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card shop-card has-background-warning">
          <div class="card-content">
            <div class="content">
              <div class="shop-product">
                <div
                  class="object"
                  :style="`background: url(${require('@/assets/icons/food.png')})`"
                ></div>
              </div>
              <p class="title"><b>Food</b></p>
              <div class="extrainfo">
                <span>Usage: <b>50</b></span>
              </div>
              <p class="description">
                Don't forget to feed your pets every day.
              </p>
              <button class="button shop-button is-fullwidth">110 CE</button>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card shop-card has-background-warning">
          <div class="card-content">
            <div class="content">
              <div class="shop-product">
                <div
                  class="object"
                  :style="`background: url(${require('@/assets/icons/caress.png')})`"
                ></div>
              </div>
              <p class="title"><b>Caress</b></p>
              <div class="extrainfo">
                <span>Usage: <b>10 days</b></span>
              </div>
              <p class="description">Take away the fear of pets.</p>
              <button class="button shop-button is-fullwidth">40 CE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { /*defineAsyncComponent,*/ onMounted } from "vue";
import useFeed from "../composables/useFeed";
import { createEgg } from "../services";

export default {
  name: "Feed",
  components: {
    // BoxPet: defineAsyncComponent(() => import("../components/BoxPet.vue")),
  },
  setup() {
    const { getPetsByUser, pets } = useFeed();

    onMounted(async () => {
      const resp = await getPetsByUser();
      if (!resp.ok) alert("error");
    });

    const a = async () => {
      const resp = await createEgg();
      const resp2 = await getPetsByUser();
      console.log(resp, resp2);
    };

    return {
      pets,
      a,
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

