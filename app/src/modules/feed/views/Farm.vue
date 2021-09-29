<template>
  <div class="animate__animated animate__fadeIn">
    <!-- <button class="button mb-4 is-primary" @click="a">HUEVO(DEVEL)</button> -->

    <div class="columns is-multiline">
      <div v-for="data in farm" :key="data.minsToComplete" class="column is-4">
        <BoxPet
          :id="data.id"
          :land_id="data.land_id"
          :land_rarity="data.land_rarity"
          :pet_id="data.pet_id"
          :pet_image="data.pet_image"
          :pet_rarity="data.pet_rarity"
          :pet_ce="data.pet_ce"
          :pet_time="data.pet_time"
          :startFarm_at="data.startFarm_at"
          :completedFarm_at="data.completedFarm_at"
          :minsToComplete="data.minsToComplete"
          :extraTime="data.extraTime"
          :haveHouse="data.haveHouse"
          :bones="data.bones"
          :isAfraid="data.isAfraid"
          :empty="false"
        />
      </div>
      <div class="column is-4">
        <BoxPet empty />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from "vue";
import useFarm from "../composables/useFarm";
// import { createEgg } from "../services";

export default {
  name: "Farm",
  components: {
    BoxPet: defineAsyncComponent(() => import("../components/BoxPet.vue")),
  },
  setup() {
    const { getFarmByUser, farm } = useFarm();
    const transition = ref({
      enter: true,
      leave: false,
    });

    const refresh = setInterval(async () => {
      await getFarmByUser();
    }, 60_000);

    onMounted(async () => {
      const resp = await getFarmByUser();
      if (!resp.ok) alert("error");
      refresh;
    });

    onUnmounted(() => {
      clearInterval(refresh);
    });

    // const a = async () => {
    //   const resp = await createEgg();
    //   const resp2 = await getPetsByUser();
    //   console.log(resp, resp2);
    // };

    return {
      farm,
      transition,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

</style>

