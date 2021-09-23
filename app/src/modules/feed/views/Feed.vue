<template>
  <button class="button mb-4 is-primary" @click="a">HUEVO(DEVEL)</button>
  <div class="columns is-multiline">
    <div v-for="{ id, image, rarity } in pets" :key="id" class="column is-4">
      <BoxPet :image="image" :rarity="rarity" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted } from "vue";
import useFeed from "../composables/useFeed";
import { createEgg } from "../services";

export default {
  name: "Feed",
  components: {
    BoxPet: defineAsyncComponent(() => import("..//components/BoxPet.vue")),
  },
  setup() {
    const { getPetsByUser, pets } = useFeed();

    onMounted(async () => {
      const resp = await getPetsByUser();
      if (!resp.ok) alert("error");
    });

    const a = async () => {
      const resp = await createEgg();
      const resp2 = await getPetsByUser();
      console.log(resp, resp2)
    
    };

    return {
      pets,
      a,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>

