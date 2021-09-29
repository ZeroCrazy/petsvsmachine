<template>
  <div class="animate__animated animate__fadeIn">
    <div class="columns is-multiline">
      <div class="column is-8">
        <BoxPetDetails
          v-if="pet.id"
          :id="pet.id"
          :land_id="pet.land_id"
          :land_rarity="pet.land_rarity"
          :pet_id="pet.pet_id"
          :pet_image="pet.pet_image"
          :pet_rarity="pet.pet_rarity"
          :pet_ce="pet.pet_ce"
          :pet_time="pet.pet_time"
          :startFarm_at="pet.startFarm_at"
          :completedFarm_at="pet.completedFarm_at"
          :minsToComplete="pet.minsToComplete"
          :extraTime="pet.extraTime"
          :haveHouse="pet.haveHouse"
          :bones="pet.bones"
          :isAfraid="pet.isAfraid"
          :empty="false"
        />
      </div>

      <div class="column is-4">
        <p class="title is-size-3 has-text-white">
          <i class="fal fa-chevron-circle-right"></i> Pet
        </p>
        <div class="card shop-card has-text-white mb-5">
          <div class="card-content">
            <div class="content">
              <p class="title is-size-4 has-text-white">Active tools</p>
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="pet-options pet-tools">
                    <div class="columns is-vcentered p-0 m-0">
                      <div class="column is-narrow p-0 m-0">
                        <button
                          class="box no-cursor pl-3 pr-3 pt-1 pb-1"
                          style="width: 50px"
                        >
                          <i class="fal fa-home-alt"></i>
                        </button>
                      </div>
                      <div
                        class="column p-0 m-0 ml-4"
                        style="font-size: x-small"
                      >
                        You need a small house to start digging.
                      </div>
                    </div>

                    <div class="columns is-vcentered p-0 m-0">
                      <div class="column is-narrow p-0 m-0">
                        <button
                          class="box no-cursor pl-3 pr-3 pt-1 pb-1"
                          style="width: 50px"
                        >
                          <i class="fal fa-bone"></i>
                        </button>
                      </div>
                      <div
                        class="column p-0 m-0 ml-4"
                        style="font-size: x-small"
                      >
                        Don't forget to feed your pets every day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="title is-size-3 has-text-white">
          <i class="fal fa-chevron-circle-right"></i> Land
        </p>
        <div class="card shop-card has-text-white mb-3">
          <div class="card-content">
            <div class="content">
              <p class="title is-size-4 has-text-white">About</p>
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="pet-options pet-tools">
                    <div class="item">
                      <div :class="['land-about-rarity', pet.land_rarity]">
                        {{ pet.land_rarity }}
                      </div>
                    </div>
                    <div class="columns is-vcentered p-0 m-0">
                      <div class="column is-narrow p-0 m-0">
                        <button
                          class="box no-cursor pl-3 pr-3 pt-1 pb-1"
                          style="width: 50px"
                        >
                          <i class="fal fa-paw"></i>
                        </button>
                      </div>
                      <div class="column p-0 m-0 ml-4">
                        <b>Capacity: </b> {{ pet.pets_max }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card shop-card has-text-white mb-5">
          <div class="card-content">
            <div class="content">
              <p class="title is-size-4 has-text-white">Active pets</p>
              <div class="columns is-multiline">
                <div
                  v-for="{ id, rarity } in farming"
                  :key="id"
                  class="column is-6"
                >
                  <div class="pet-options pet-tools">
                    <div class="item">
                      <div :class="['land-about-rarity', rarity]">{{ id }}</div>
                    </div>
                  </div>
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
import { onMounted, ref } from "vue";
import useDetails from "../composables/useDetails";
import BoxPetDetails from "../components/BoxPetDetails.vue";

export default {
  name: "Details",
  components: { BoxPetDetails },
  setup() {
    const { pet, route, getDetails } = useDetails();

    const id = route.params.id;
    const farming = ref([]);

    onMounted(async () => {
      const response = await getDetails(id);
      console.log(response);
      pet.value = response.pet;
      farming.value = response.farming;
    });

    return {
      pet,
      farming,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";

.pet-options .box {
  width: 100%;
  margin-left: 5px;
  border-radius: 3px;
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 20%);
  padding: 8.7px 0px;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
}
.pet-options .box:hover {
  background: rgb(255 255 255 / 15%);
  cursor: pointer;
}
.land-about-rarity.common,
.coordinate.common,
.pet.common {
  filter: drop-shadow(#00ffdd 0px 0px 5px);
}
.land-about-rarity.uncommon,
.coordinate.uncommon,
.pet.uncommon {
  filter: drop-shadow(#001eff 0px 0px 5px);
}
.land-about-rarity.rare,
.coordinate.rare,
.pet.rare {
  filter: drop-shadow(#ff0026 0px 0px 5px);
}
.land-about-rarity.mythic,
.coordinate.mythic,
.pet.mythic {
  filter: drop-shadow(#6f00ff 0px 0px 5px);
}

.land-map .land-view.common {
  background-color: #00ffdd;
}
.land-map .land-view.uncommon {
  background-color: #001eff;
}
.land-map .land-view.rare {
  background-color: #ff0026;
}
.land-map .land-view.mythic {
  background-color: #6f00ff;
}
.land-map .land-view.center {
  background-color: #d9ff00;
}

/*
  Página shop.html
*/
.shop-card {
  /*color: #3c415c;
  border: 2px solid #000000;
  box-shadow: inset 0 -4px 0 #00000063;
  box-sizing: border-box;*/
  font-family: "Poppins", sans-serif;
}
.shop-card .title {
  font-weight: 700;
  line-height: 1.25;
  font-size: x-large;
  word-spacing: 1px;
  margin-bottom: 2px !important;
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

