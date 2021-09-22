<template>
  <div style="width: 25vw; height: 25vw">
    <div
      v-for="i in range"
      :key="i"
      class="is-flex is-flex-direction-row is-flex-wrap-wrap g-row"
      :style="`height: calc(100% / ${range})`"
    >
      <div
        class="g-column"
        v-for="j in range"
        :key="j"
        :style="`width: calc(100% / ${range})`"
      >
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {

    return {
      range: 20,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.g-row {
  // height: calc(100% / 20);
  width: 100%;
}

.g-column {
  height: 100%;
  // width: calc(100% / 20);
  padding: 1px;
}
.square {
  background-color: rgb(2, 59, 2);
  cursor: pointer;
  height: 100%;
  transition: 100ms;
  width: 100%;
  &:hover {
    background-color: green;
  }
}
</style>
