<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="columns">
      <div class="column is-full">
        <div class="card has-background-black">
          <div class="card-content">
            <div class="content">
              <div id="map" class="land-map">
                <div
                  v-for="land in lands"
                  :key="land.id"
                  :class="['land-view', land.rarity]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { /*defineAsyncComponent,*/ onMounted } from "vue";
import useLands from "../composables/useLands";

export default {
  name: "Feed",
  components: {},
  setup() {
    const { getLands, lands } = useLands();

    onMounted(async () => {
      const resp = await getLands();
      if (!resp.ok) alert("error");
    });

    return {
      lands,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
.content {
  text-align: -webkit-center;
}

.land-map {
  display: flow-root;
  max-width: 575px;
}
.land-map .land-view {
  width: calc(100% / 21) !important;
  background: green;
  border: 1px solid;
  color: #fff;
  float: left;
  font-size: xx-small;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.land-map .land-view:hover {
  cursor: pointer;
  filter: brightness(var(--value, 2));
}
.land-map .land-view.busy {
  background: #9f9f9f;
}
.land-map .land-view.onsale {
  background: yellowgreen;
}
.land-map .land-view.red {
  background: red;
}

.land-map .land-view.common {
  background: radial-gradient(#00ffdd, #00d6c8);
  // background-color: #00ffdd;
}
.land-map .land-view.uncommon {
  background: radial-gradient(#001eff, #0417a3);
  // background-color: #001eff;
}
.land-map .land-view.rare {
  background: radial-gradient(#ff0026, #b6001b);
  // background-color: #ff0026;
}
.land-map .land-view.mythic {
  background: radial-gradient(#6f00ff, #4e00b3);
  // background-color: #6f00ff;
}
.land-map .land-view.center {
  background: radial-gradient(#d9ff00, #abc900);
  // background-color: #d9ff00;
}

@media screen and (max-width: 425px) {
  .land-map {
    max-width: 360px;
  }
  .land-map .land-view {
    width: 15px;
    height: 15px;
  }
}

@media screen and (max-width: 375px) {
  .land-map {
    max-width: 330px;
  }
  .land-map .land-view {
    width: 13px;
    height: 13px;
  }
}

@media screen and (max-width: 320px) {
  .land-map {
    width: 300px;
  }
  .land-map .land-view {
    width: 12px;
    height: 13px;
  }
}
</style>

