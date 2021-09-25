<template>
  <div class="animate__animated animate__fadeIn">
    <button class="button mb-4 is-primary" @click="a">HUEVO(DEVEL)</button>

    <div class="columns is-multiline">
      <div
        v-for="{ id, image, rarity, hours, production } in pets"
        :key="id"
        class="column is-4"
      >
        <BoxPet
          :image="image"
          :rarity="rarity"
          :hours="hours"
          :production="production"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, onBeforeUnmount, ref } from "vue";
import useFeed from "../composables/useFeed";
import { createEgg } from "../services";

export default {
  name: "Feed",
  components: {
    BoxPet: defineAsyncComponent(() => import("..//components/BoxPet.vue")),
  },
  setup() {
    const { getPetsByUser, pets } = useFeed();
    const transition = ref({
      enter: true,
      leave: false,
    });

    onMounted(async () => {
      const resp = await getPetsByUser();
      if (!resp.ok) alert("error");
    });

    onBeforeUnmount(() => {
      transition.value.enter = false;
      transition.value.leave = true;
    });

    const a = async () => {
      const resp = await createEgg();
      const resp2 = await getPetsByUser();
      console.log(resp, resp2);
    };

    return {
      pets,
      a,
      transition,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

</style>

