<template>
  <div class="card">
    <div class="card-content">
      <div class="content" v-if="empty">
        <div class="land add-pet">
          <a href="inventory.html">
            <div>
              <i class="fal fa-plus-circle"></i>
            </div>
          </a>
        </div>
      </div>
      <div class="content" v-else>
        <div class="pet-options">
          <button class="mb-0 box" @click="feed('house')">
            <i class="fal fa-home-alt"></i>
          </button>
          <button class="mb-0 box" @click="feed('food')">
            <i class="fal fa-bone"></i>
          </button>
          <button class="mb-0 box" @click="feed('cress')">
            <i class="fal fa-hand-paper"></i>
          </button>
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
          <!-- Rareza de la land -->
          <div :class="['coordinate', land_rarity]">{{ land_rarity }}</div>
          <div class="resources">
            <div v-if="isAfraid" class="coordinate have-light flashit">
              <i class="fal fa-bolt"></i>
            </div>
            <div v-if="haveHouse" class="coordinate have-house">
              <i class="fal fa-home-alt"></i>
            </div>
            <div v-if="bones == 2" class="coordinate have-food">
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

import useFarm from "../composables/useFarm";

export default {
  name: "BoxPet",
  components: {},
  props: propsBoxPet,

  setup(props) {
    const { feedPet, putHouse, cressPet } = useFarm();

    const feed = async (resource) => {
      if (resource === "food") {
        if (props.bones >= 2) return;
        const resp = await feedPet(props.id);
        if (resp.ok) return true;
      } else if (resource === "house") {
        if (props.haveHouse) return;
        const resp = await putHouse(props.id);
        if (resp.ok) return true;
      } else if (resource === "cress") {
        const resp = await cressPet(props.id);
        if (resp.ok) return true;
      }
    };

    // addFood, addHouse, cureAfraid

    const calcTime = ref(false);

    calcTime.value = props.minsToComplete + props.extraTime;

    const timer = computed(() => {
      const hours = Math.floor(calcTime.value / 60);
      const mins = calcTime.value % 60;

      return `${hours}:${mins}`;
    });

    return {
      feed,
      timer,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";

.land {
  animation: rain 0.4s linear infinite;
  width: 80%;
  border-radius: 3px;
  height: 201px;
  background-color: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 20%);
  overflow: hidden;
}

.land .floor {
  background: url("../../../assets/images/land_floor.png") no-repeat;
  background-size: cover;
  width: 129px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
}

.land .production {
  background-color: rgb(0 255 243 / 50%);
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
  animation: float 3s ease-in-out infinite;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  height: 40%;
  margin-left: 30%;
  margin-right: 30%;
  position: relative;
  top: 44px;
  transform: translatey(0px);
  width: 40%;
}
.land .coordinate {
  background-color: rgb(0 0 0 / 50%);
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  bottom: 24px;
  color: #fff;
  font-size: x-small;
  margin: 0px 0px 10px 10px;
  padding: 1px 7px;
  position: absolute;
  text-transform: capitalize;
  width: fit-content;
}

.land .resources {
  float: right;
  margin-right: calc(10ch - -59px);
}
.land .have-house {
  background-color: rgb(0 255 67 / 50%);
  margin-left: 80px;
  // margin-left: 50px;
}
.land .have-food {
  background-color: rgb(223 123 0 / 50%);
  margin-left: 111px;
  // margin-left: 80px;
}
// .land .have-caress {
//   background-color: rgb(221 221 221 / 50%);
//   margin-left: 111px;
// }
.land .have-light {
  background-color: rgb(239 255 0 / 63%);
  margin-left: 50px;
  // margin-left: 25px;
}

.land .time {
  background: #151821;
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  color: #9a9fad;
  float: left;
  font-family: "Poppins", sans-serif;
  font-size: x-small;
  font-weight: bold;
  margin: 10px 0px 1px 10px;
  padding: 1px 7px;
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

.add-pet {
  width: 100%;
}
.add-pet div {
  width: max-content;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 24ch;
}
.add-pet i {
  color: #fff;
  text-align: center;
  font-size: 40px;
}

.rain {
  animation: rain 0.4s linear infinite;
  background-image: url("../../../assets/images/rain.png");
  background-size: cover;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
