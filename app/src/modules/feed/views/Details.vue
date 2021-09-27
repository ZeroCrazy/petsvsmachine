<template>
  <div class="animate__animated animate__fadeIn">
    {{ pet }}
  </div>
</template>

<script>
import { onMounted } from "vue";
import useDetails from "../composables/useDetails";

export default {
  name: "Details",
  components: {},
  setup() {
    const { pet, route, getDetails } = useDetails();

    const id = route.params.id;

    onMounted(async () => {
      pet.value = await getDetails(id);
    });

    return {
      pet,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>

