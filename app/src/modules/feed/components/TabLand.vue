<template>
  <div class="columns">
    <div
      class="column is-6"
      v-for="{ id, rarity, pets, floor, isActive } in lands"
      :key="id"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="land inventory-view-land">
              <div :class="['time', rarity]">{{ rarity }}</div>
              <div class="coordinate capacity">
                <i class="fal fa-paw"></i> {{ pets }}/{{ floor }}
              </div>
              <div class="resources">
                <div class="coordinate have-house">
                  <button
                    v-if="isActive"
                    class="button shop-button is-small disabled"
                  >
                    Selected
                  </button>
                  <button v-else class="button shop-button is-small">
                    Select
                  </button>
                </div>
              </div>

              <div class="floor"></div>
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
  name: "TabLand",
  components: {},
  props: {},

  setup() {
    const { lands, getLandsUser } = useInventory();

    onMounted(async () => {
      const resp = await getLandsUser();
      if (resp) lands.value = resp;
    });

    return {
      lands,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";


</style>
