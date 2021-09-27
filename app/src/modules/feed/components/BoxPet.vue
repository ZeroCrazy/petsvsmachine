<template>
  <div class="card has-background-link">
    <div class="card-content">
      <div class="content">
        <div class="pet-options">
          <button class="mb-0 box">
            <div v-if="haveHouse" class="pet-attr-number"><span>1</span></div>
            <i class="fal fa-home-alt"></i>
          </button>
          <button class="mb-0 box">
            <div v-if="haveBone" class="pet-attr-number">
              <span>{{ startBone ? 2 : 1 }}</span>
            </div>
            <i class="fal fa-bone"></i>
          </button>
          <button class="mb-0 box"><i class="fal fa-hand-paper"></i></button>
          <button
            @click="
              $router.push({ name: 'feedDetails', params: { id: pet_id } })
            "
            class="mb-0 box"
          >
            <i class="fal fa-eye"></i>
          </button>
          <button class="mb-0 box"><i class="fal fa-trash-alt"></i></button>
        </div>
        <div class="land">
          <div class="time">{{ timer }}</div>
          <div class="production">CE: {{ pet_ce }}/{{ pet_time }}h</div>

          <div
            :class="['pet', pet_rarity]"
            :style="`
              background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png');
            `"
          ></div>
          <div :class="['coordinate', land_rarity]">{{ land_rarity }}</div>
          <!-- Rareza de la land -->
        </div>
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
    const calcTime = ref(false);

    calcTime.value = props.minsToComplete + props.extraTime;

    const timer = computed(() => {
      const hours = Math.floor(calcTime.value / 60);
      const mins = calcTime.value % 60;

      return `${hours}:${mins}`;
    });

    return { timer };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";

.land {
  background: url("../../../assets/images/land.svg");
  background-color: rgb(255 255 255 / 5%);
  background-position: center bottom;
  background-repeat: no-repeat;
  border-radius: 3px;
  border: 1px solid rgb(255 255 255 / 20%);
  height: 201px;
  width: 80%;
}
.land .production {
  background-color: rgb(0 0 0 / 50%);
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  color: $text;
  float: right;
  font-size: x-small;
  margin: 10px 10px 0px 0px;
  padding: 1px 7px;
  width: fit-content;
}
.land .pet {
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  animation: float 3s ease-in-out infinite;
  height: 40%;
  margin-left: 30%;
  margin-right: 30%;
  position: relative;
  top: 49px;
  transform: translatey(0px);
  width: 40%;
}
.land .coordinate {
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  background-color: rgb(0 0 0 / 50%);
  width: fit-content;
  padding: 1px 7px;
  bottom: 24px;
  margin: 0px 0px 10px 10px;
  font-size: x-small;
  color: #fff;
  position: absolute;
  text-transform: capitalize;
}
.land .time {
  background: $primary;
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  color: $text;
  float: left;
  font-size: x-small;
  margin: 10px 0px 1px 10px;
  padding: 0px 2px;
  width: fit-content;
}
.shop-options,
.pet-options {
  display: flex;
  flex-direction: column;
  float: right;
  height: 201px;
  justify-content: space-between;
  width: 19%;
}
.shop-options .box,
.pet-options .box {
  background: rgb(255 255 255 / 5%);
  border-radius: 3px;
  border: 1px solid rgb(255 255 255 / 20%);
  color: $text;
  margin-bottom: 5px;
  margin-left: 5px;
  padding: 5px 0px;
  text-align: center;
  width: 100%;
}
.shop-options .box:hover,
.pet-options .box:hover {
  background: rgb(255 255 255 / 15%);
  cursor: pointer;
}

.pet-attr-number {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  line-height: 18px;
  background: #238636;
  margin-top: -18px;
  margin-right: -9px;
  float: right;
  text-align: center;
  font-weight: bold;
  /*font-size: 12px;*/
  color: #fff;
}

.coordinate.common,
.pet.common {
  filter: drop-shadow($common 0px 0px 5px);
}
.coordinate.uncommon,
.pet.uncommon {
  filter: drop-shadow($uncommon 0px 0px 5px);
}
.coordinate.rare,
.pet.rare {
  filter: drop-shadow($rare 0px 0px 5px);
}
.coordinate.mythic,
.pet.mythic {
  filter: drop-shadow($mythic 0px 0px 5px);
}
</style>
