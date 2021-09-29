<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
       
        <div class="land view-pet">
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
 
    const calcTime = ref('00:00');
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
 margin-left: 112px;
  // margin-left: 50px;
}
.land .have-food {
  background-color: rgb(223 123 0 / 50%);
  margin-left: 80px;
  // margin-left: 80px;
}
// .land .have-caress {
//   background-color: rgb(221 221 221 / 50%);
//   margin-left: 111px;
// }
.land .have-light {
  background-color: rgb(239 255 0 / 63%);
    margin-left: 54px;
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

.flashit{
  -webkit-animation: flash ease-out 10s infinite;
  -moz-animation: flash ease-out 10s infinite;
  animation: flash ease-out 10s infinite;
  animation-delay: 2s;
}


.view-pet {
  width: 100%;
  height: 420px;
}
.view-pet .pet {
  width: 37%;
  height: 37%;
  top: 64px;
}
.view-pet .floor {
  width: 229px;
  height: 142px;
}
.view-pet .coordinate,
.view-pet .production,
.view-pet .time {
  padding: 11px 27px;
  font-size: small;
}
.view-pet .resources {
  margin-right: calc(14ch - -59px);
}
.view-pet .resources .coordinate.btn {
  padding: 11px 18px;
}
.view-pet .resources .have-house {
  margin-left: 124px;
}
.view-pet .resources .have-food {
  margin-left: 64px;
}
.view-pet .resources .have-light {
  margin-left: 12px;
}
.pet-tools {
  float: none;
  width: 100%;
  height: min-content;
}
.pet-tools .item {
  display: -webkit-box;
  line-height: 35px;
  font-size: x-small;
}
.pet-tools .item .box {
  width: 50px;
  margin-left: 0px;
  margin-right: 10px;
}
.land-about-rarity {
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  background-color: rgb(0 0 0 / 50%);
  width: fit-content;
  font-size: small;
  color: #fff;
  text-transform: capitalize;
  line-height: 17px;
  padding: 4px 10px;
  margin: 6px 6px 6px 0px;
  width: 100%;
  text-align: center;
}


</style>
