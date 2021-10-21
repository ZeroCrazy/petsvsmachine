<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="land view-pet">
          <div v-if="haveHouse" class="time">{{ timer }}</div>
          <div class="production">CE: {{ pet_ce }}/{{ pet_time }}h</div>

          <div
            :class="['pet', pet_rarity]"
            :style="`
              background: url('${require('@/assets/images/pets/' +
                pet_image)}');
            `"
          ></div>
          <!-- Rareza de la land -->
          <div :class="['coordinate', land_rarity]">{{ land_rarity }}</div>
          <div class="resources">
            <div v-if="isAfraid" class="coordinate btn have-light flashit">
              <i class="fal fa-bolt"></i>
            </div>
            <div v-if="haveHouse" class="coordinate btn have-house">
              <i class="fal fa-home-alt"></i>
            </div>
            <div v-if="bones == 2" class="coordinate btn have-food">
              <i class="fal fa-bone"></i>
            </div>
            <!-- <div class="coordinate have-caress">
              <i class="fal fa-hand-paper"></i>
            </div> -->
          </div>
          <div class="floor"></div>
        </div>
        <div v-if="isAfraid" class="rain"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { propsBoxPet } from "../interfaces/boxPet";

export default {
  name: "BoxPet",
  components: {},
  props: propsBoxPet,

  setup(props) {
    const calcTime = ref("00:00");
    calcTime.value = props.minsToComplete + props.extraTime;
    return {
      timer: computed(() => {
        let hours = Math.floor(calcTime.value / 60);
        if (hours < 10) hours = "0" + hours;
        let mins = calcTime.value % 60;
        if (mins < 10) mins = "0" + mins;
        return `${hours}:${mins}`;
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";
</style>
