<template>
  <div class="columns is-mobile">
    <div
      class="column has-text-centered p-0 ml-2 "
      v-for="{ id, icon, value } in resources"
      :key="id"
    >
      <a class="button is-small is-danger is-fullwidth">
        <span v-if="icon" class="icon is-small">
          <i :class="icon"></i>
        </span>
        <span v-else class="icon is-small"> CE </span>
        <b>{{ value }}</b>
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
// import { useRouter } from "vue-router";
import useFeed from "../composables/useFeed";

export default {
  name: "ResourcesMenu",
  components: {},
  setup() {
    const { resourcesUser: resources, getResourcesUser } = useFeed();

    onMounted(() => {
      getResourcesUser();
    });

    return {
      resources,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.column:last-child {
  margin-right: 1rem !important;
}
</style>
