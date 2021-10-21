<template>
  <div class="columns is-multiline">
    <!-- mascota de shop -->
    <div class="column is-4" v-if="resources.pet > 0">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="land inventory-view-land">
              <div class="time quantity">{{ resources.pet }}</div>
              <div
                class="pet"
                  :style="`
                    background: url('${require('@/assets/images/pets/cerdo.png')}');
                  `"
              ></div>
              <div class="coordinate capacity">CE: 300 / 96 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useFeed from "../composables/useFeed";

export default {
  name: "TabPetShop",
  components: {},
  props: {},

  setup() {
    const { resources } = useFeed();

    return {
      resources,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";

</style>
