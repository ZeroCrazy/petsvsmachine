<template>
  <div style="width: 500px; height: 500px">
    <div
      v-for="i in 20"
      :key="i"
      class="is-flex is-flex-direction-row is-flex-wrap-wrap g-row"
    >
      <div class="g-column" v-for="i in 20" :key="i">
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.g-row {
  height: calc(100% / 20);
  width: 100%;
}

.g-column {
  height: 100%;
  width: calc(100% / 20);
  padding: 1px;
}
.square {
  background-color: rgb(2, 59, 2);
  cursor: pointer;
  height: 100%;
  transition: 300ms;
  width: 100%;
  &:hover {
    background-color: green;
  }
}
</style>
