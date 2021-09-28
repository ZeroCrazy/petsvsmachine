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
        <span v-if="icon" class="icon is-small">
          <i :class="icon"></i>
        </span>
        <span v-else class="icon is-small"> CE </span>
        <b class="ml-1">{{ value }}</b>
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

.navbar-btn-feed-left {
  float: left;
  width: 23%;
  margin-left: 1%;
  margin-right: 1%;
}

.btn-resources {
  background: rgba(26, 29, 40, 0.3);
  font-family: "Poppins", sans-serif;
  color: #fff !important;
  text-shadow: 0px 0px 15px rgb(21 24 33 / 70%);
  font-weight: bold;
  mix-blend-mode: normal;
  -webkit-backdrop-filter: blur(35px);
  backdrop-filter: blur(35px);
  border: 1px solid rgb(255 255 255 / 40%);
  border-radius: 4px;
  font-size: 12px;
  padding: 5px 0px;
}
.btn-resources.production {
  background: rgba(0, 255, 243, 0.3);
}
.btn-resources.house {
  background: rgba(0, 255, 67, 0.3);
}
.btn-resources.food {
  background: rgba(223, 123, 0, 0.3);
}
.btn-resources.caress {
  background: rgba(221, 221, 221, 0.3);
}

// .column:last-child {
//   margin-right: 1rem !important;
// }
</style>
