<template>
  <div>
    <div
      v-for="i in 20"
      :key="i"
      class="is-flex is-flex-direction-row is-flex-wrap-wrap"
      style="width: 600px; height: calc(600px / 20)"
    >
      <div
        class="p-1"
        style="width: calc(100% / 20); heght: calc(100% / 20)"
        v-for="i in 20"
        :key="i"
      >
        <div style="background-color: green; width: 100%; height: 100%"></div>
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
</style>
