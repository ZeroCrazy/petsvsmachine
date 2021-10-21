<template>
  <div class="columns is-multiline">
    <!-- mascota de huevo/marketplace -->
    <div
      class="column is-4"
      v-for="{ id, production, hours, rarity, isFarming, image } in pets"
      :key="id"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="land inventory-view-land">
              <div :class="['time', rarity]">{{ id }}</div>
              <div
                :class="['pet', rarity]"
                :style="`
                  background: url('${require('@/assets/images/pets/' +
                    image)}');
                `"
              ></div>
              <div class="coordinate capacity">
                CE: {{ production }} / {{ hours }} hours
              </div>
              <div class="resources">
                <div v-if="isFarming" class="coordinate have-light">
                  Farming
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useInventory from "../composables/useInventory";

export default {
  name: "TabPetSupreme",
  components: {},
  props: {},

  setup() {
    const { pets, getPets } = useInventory();

    onMounted(async () => {
      const resp = await getPets();
      console.log(resp);
      if (resp) pets.value = resp;
    });

    return {
      pets,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";
</style>
