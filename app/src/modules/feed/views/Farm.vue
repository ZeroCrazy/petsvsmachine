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
      <div class="column is-4" v-if="farm.length < floor">
        <BoxPet @click="modal2Visible = true" empty />
      </div>
    </div>

    <!-- <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <TabTools />
        </section>
      </div>
    </div> -->
    <a-modal
      :visible="modal2Visible"
      title="Select pet to farm"
      width="80vw"
      centered
      closable
      destroyOnClose
      :footer="null"
      @cancel="modal2Visible = false"
    >
      <PetSelect @onClick="clickPet" />
    </a-modal>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from "vue";
import useFarm from "../composables/useFarm";
import { floorLandActive } from "../services/lands";
// import { createEgg } from "../services";

//TODO: impedir que se alimente si no hay casa

export default {
  name: "Farm",
  components: {
    BoxPet: defineAsyncComponent(() => import("../components/BoxPet.vue")),
    PetSelect: defineAsyncComponent(() =>
      import("../components/PetSelect.vue")
    ),
  },
  setup() {
    const { getFarmByUser, farm, selectPet } = useFarm();
    const transition = ref({
      enter: true,
      leave: false,
    });

    const floor = ref(0);

    const refresh = setInterval(async () => {
      await getFarmByUser();
    }, 60_000);

    onMounted(async () => {
      const resp = await getFarmByUser();
      const resp2 = await floorLandActive();
      floor.value = resp2.floor;
      console.log(floor.value)
      if (!resp.ok) alert("error");
      refresh;
    });

    onUnmounted(() => {
      clearInterval(refresh);
    });

    const modal2Visible = ref(false);

    const clickPet = async ({ isShop, id }) => {
      const resp = await selectPet(isShop, id);
      if (resp) await getFarmByUser();
      modal2Visible.value = false;
    };

    // const a = async () => {
    //   const resp = await createEgg();
    //   const resp2 = await getPetsByUser();
    //   console.log(resp, resp2);
    // };

    return {
      farm,
      floor,
      transition,
      modal2Visible,
      clickPet,
    };
  },
};
</script>

<style lang="scss">
@import "@/css/colors.scss";

.ant-modal-content {
  background-color: rgba(#40c0ff, 1);
  height: 80vh;
  overflow: hidden;
}

.ant-modal-body {
  height: calc(100% - 55px);
  overflow-y: auto;
}

.ant-modal-header {
  background-color: rgba(#40c0ff, 1);
  border-bottom: 1px solid #40c0ff;
}

.ant-modal-title {
  color: #fff !important;
}

.anticon {
  color: #fff;
}
</style>

