<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="columns">
      <div class="column is-full">
        <div class="card has-background-black">
          <div class="card-content">
            <div class="content">
              <center>
                <div id="map" class="land-map">
                  <div
                    v-for="land in lands"
                    :key="land.id"
                    :class="['land-view', land.rarity]"
                  ></div>
                </div>
              </center>
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
      console.log(lands);
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

.land-map {
  max-width: 575px;
  display: flow-root;
}
.land-map .land-view {
  width: 25px;
  height: 25px;
  background: green;
  color: #fff;
  float: left;
  margin: 1px;
  font-size: xx-small;
  text-align: center;
  line-height: 25px;
  /*text-shadow: 1px 1px 0px #000;*/
}
.land-map .land-view:hover {
  filter: brightness(var(--value, 2));
  cursor: pointer;
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

