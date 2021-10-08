<template>
  <div style="text-align-last: center">
    <div>Se ha abierto el huevo</div>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`" alt="" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getPet } from "../services/pets";
export default {
  name: "EggRecived",
  components: {},
  props: {
    id: { type: String, required: true },
  },
  setup(props) {
    const pet = ref({});
    onMounted(async () => {
      const resp = await getPet(props.id);
      if (resp) pet.value = pet;
    });
    return {
      pet,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";
</style>
