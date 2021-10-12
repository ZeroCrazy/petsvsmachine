<template>
  <div class="columns is-mobile">
    <div class="column has-text-centered" v-if="isLoading">
      <div
        v-for="{ id, icon, value, name } in resources"
        :key="id"
        :class="[
          'is-small',
          'navbar-btn-feed-left',
          'no-cursor',
          'btn-resources',
          name,
        ]"
      >
      <center>
        <span v-if="icon" class="icon is-small">
          <i :class="icon"></i>
        </span>
        <span v-else class="icon is-small is-narrow"> CE </span>
        <b class="ml-1">{{ value }}</b>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
// import { useRouter } from "vue-router";
import useFeed from "../composables/useFeed";

export default {
  name: "ResourcesMenu",
  components: {},
  setup() {
    const { resourcesUser: resources, getResourcesUser } = useFeed();

    const isLoading = ref(false);

    onMounted(async () => {
      await getResourcesUser();
      isLoading.value = true;
    });

    return {
      resources,
      isLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

</style>
