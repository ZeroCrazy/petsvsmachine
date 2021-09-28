<template>
  <div>
    <div class="sky">
      <div class="cloud variant-1"></div>
      <div class="cloud variant-2"></div>
      <div class="cloud variant-3"></div>
      <div class="cloud variant-4"></div>
      <div class="cloud variant-5"></div>
      <div class="cloud variant-6"></div>
    </div>
    <div class="container pt-5">
      <div class="columns is-vcentered pt-6">
        <div class="column is-4">
          <OptionsMenu />
        </div>
        <div class="column is-4"></div>
        <div class="column is-4">
          <ResourcesMenu />
        </div>
      </div>
      <div class="pt-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import OptionsMenu from "../components/OptionsMenu.vue";
import ResourcesMenu from "../components/ResourcesMenu.vue";

export default {
  name: "Feed",
  components: {
    OptionsMenu,
    ResourcesMenu,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";


.sky {
  background: linear-gradient(#00b3e8 0, #00a2d3 100%);
  box-shadow: 0 0 20px #d0e4f2;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0px;
}
.sky .cloud {
  background: #ebf5fc;
  border-radius: 200px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  height: 39px;
  margin-right: -102px;
  position: absolute;
  right: 0%;
  width: 102px;
}
.sky .cloud.variant-1 {
  top: 33%;
  -webkit-transform: scale(0.2);
  -webkit-animation: clouds-in-out 16s 0s infinite linear;
}
.sky .cloud.variant-2 {
  top: 45%;
  -webkit-transform: scale(0.4);
  -webkit-animation: clouds-in-out 17s 2s infinite linear;
}
.sky .cloud.variant-3 {
  top: 63%;
  -webkit-transform: scale(0.6);
  -webkit-animation: clouds-in-out 18s 4s infinite linear;
}
.sky .cloud.variant-4 {
  top: 36%;
  -webkit-transform: scale(0.8);
  -webkit-animation: clouds-in-out 19s 6s infinite linear;
}
.sky .cloud.variant-5 {
  top: 72%;
  -webkit-transform: scale(1);
  -webkit-animation: clouds-in-out 20s 8s infinite linear;
}
.sky .cloud.variant-6 {
  top: 81%;
  -webkit-transform: scale(0.7);
  -webkit-animation: clouds-in-out 30s 3s infinite linear;
}
.sky .cloud:before, .sky .cloud:after {
  background: #ebf5fc;
  border-radius: 100px;
  content: '';
  height: 45px;
  left: 10px;
  position: absolute;
  top: -10px;
  width: 60px;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sky .cloud:after {
  height: 60px;
  left: auto;
  right: 12px;
  top: -24px;
  width: 60px;
}

</style>

