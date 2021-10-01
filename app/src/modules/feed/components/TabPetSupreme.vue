<template>
  <div class="columns is-multiline">
    <!-- mascota de huevo/marketplace -->
    <div
      class="column is-4"
      v-for="{ id, production, hours, rarity, isFarming } in pets"
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
                  background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png');
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

.inventory-view-land {
  width: 100%;
  height: 150px;
}
.inventory-view-land .coordinate.capacity {
  filter: none;
  background-color: transparent;
  border: none;
}
.inventory-view-land .time {
  border: 2px solid rgb(0 0 0 / 15%);
  background-color: rgb(0 0 0 / 50%);
  font-size: x-small;
  color: #fff;
}
.inventory-view-land .coordinate.have-house {
  filter: none;
  background-color: transparent;
  border: none;
  margin-left: 67px;
}
.inventory-view-land .coordinate.have-light {
  margin-left: 87px;
  background-color: #f4c300;
  border: none;
  padding: 2px 10px;
}
.inventory-view-land .floor {
  width: 161px;
  height: 100px;
  margin-top: 20px;
}
.inventory-view-land .time.quantity {
  filter: none;
  background-color: transparent;
  border: none;
}
.inventory-view-land .pet {
  height: 50%;
  animation: none;
  margin-top: -10px;
}

.disabled,
.disabled:hover,
.disabled:focus,
.disabled:active {
  cursor: no-drop !important;
  background-color: gray !important;
  box-shadow: none !important;
}
</style>
