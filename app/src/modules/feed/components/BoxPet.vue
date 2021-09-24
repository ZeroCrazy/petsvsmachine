<template>
  <div class="card has-background-link">
    <div class="card-content">
      <div class="content">
        <div class="pet-options">
          <button class="mb-0 box"><i class="fal fa-home-alt"></i></button>
          <button class="mb-0 box"><i class="fal fa-bone"></i></button>
          <button class="mb-0 box"><i class="fal fa-hand-paper"></i></button>
          <button class="mb-0 box"><i class="fal fa-eye"></i></button>
          <button class="mb-0 box"><i class="fal fa-trash-alt"></i></button>
        </div>
        <div class="land">
          <div class="time">80:13</div>
          <div class="production">CE: {{ production }}/{{ hours }}h</div>

          <div
            :class="['pet', rarity]"
            :style="`
              background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(
                Math.random() * 150
              )}.png');
            `"
          ></div>
          <div class="coordinate">20, -15</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";

export default {
  name: "BoxPet",
  components: {},
  props: {
    rarity: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    production: {
      type: Number,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

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
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  height: 40%;
  margin-left: 30%;
  margin-right: 30%;
  position: relative;
  top: 49px;
  width: 40%;
}
.land .coordinate {
  background-color: rgb(0 0 0 / 50%);
  border-radius: 3px;
  border: 2px solid rgb(0 0 0 / 15%);
  bottom: 24px;
  color: $text;
  font-size: x-small;
  margin: 0px 0px 10px 10px;
  padding: 1px 7px;
  position: absolute;
  width: fit-content;
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
.pet.common {
  filter: drop-shadow($common 0px 0px 5px);
}
.pet.uncommon {
  filter: drop-shadow($uncommon 0px 0px 5px);
}
.pet.rare {
  filter: drop-shadow($rare 0px 0px 5px);
}
.pet.mythic {
  filter: drop-shadow($mythic 0px 0px 5px);
}
</style>
