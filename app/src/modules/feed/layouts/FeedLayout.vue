<template>
  <div class="container">
    <div class="columns is-vcentered mt-6">
      <div class="column is-4">
        <LeftMenu />
      </div>
      <div class="column is-5"></div>
      <div class="column is-2">
        <RightMenu />
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
// import { defineAsyncComponent } from "vue";
import LeftMenu from "../components/LeftMenu.vue";
import RightMenu from "../components/RightMenu.vue";

export default {
  name: "Feed",
  components: {
    LeftMenu,
    RightMenu,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.land {
  background: url("../../../assets/images/land.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 80%;
  border-radius: 3px;
  height: 201px;
  background-color: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 20%);
}
.land .production {
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  background-color: rgb(0 0 0 / 50%);
  width: fit-content;
  padding: 1px 7px;
  float: right;
  margin: 10px 10px 0px 0px;
  font-size: x-small;
  color: $text;
}
.land .pet {
  /*background: url('images/pets/dog.png');*/
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
.land .coordinate {
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  background-color: rgb(0 0 0 / 50%);
  width: fit-content;
  padding: 1px 7px;
  bottom: 24px;
  margin: 0px 0px 10px 10px;
  font-size: x-small;
  color: $text;
  position: absolute;
}
.land .time {
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  width: fit-content;
  padding: 0px 2px;
  margin: 10px 0px 1px 10px;
  font-size: x-small;
  color: $text;
  float: left;
  background: $primary;
}
.shop-options,
.pet-options {
  width: 19%;
  height: 201px;
  float: right;
}
.shop-options .box,
.pet-options .box {
  /*width: 60%;
  margin-left: 20%;
  margin-right: 20%;*/
  width: 100%;
  margin-left: 5px;
  border-radius: 3px;
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 20%);
  padding: 8.7px 0px;
  text-align: center;
  color: $text;
  margin-bottom: 5px;
}
.shop-options .box:hover,
.pet-options .box:hover {
  background: rgb(255 255 255 / 15%);
  cursor: pointer;
}
.pet.common {
  filter: drop-shadow($common 0px 0px 5px);
}
.pet.uncommon {
  filter: drop-shadow($uncommon 0px 0px 5px);
}
.pet.rare {
  filter: drop-shadow($rare 0px 0px 5px);
}
.pet.mythic {
  filter: drop-shadow($mythic 0px 0px 5px);
}
</style>

