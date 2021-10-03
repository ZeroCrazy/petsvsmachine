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



/*
  Modal
*/
.ant-modal-centered {
  background: rgb(0 0 0 / 90%);
}
.ant-modal-content {
  background: #1e1e1e;
  border-radius: 15px;
  box-shadow: 0px 0px 50px rgb(166 90 8 / 30%);
}
.ant-modal-header {
  background-color: #a65a08;
  border-bottom: 1px solid rgb(0 0 0 / 60%);
}
.ant-modal-body {
  background: rgb(166,90,8);
  background: -moz-linear-gradient(180deg, rgba(166,90,8,1) 0%, rgba(30,30,30,1) 60%);
  background: -webkit-linear-gradient(180deg, rgba(166,90,8,1) 0%, rgba(30,30,30,1) 60%);
  background: linear-gradient(180deg, rgba(166,90,8,1) 0%, rgba(30,30,30,1) 60%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a65a08",endColorstr="#1e1e1e",GradientType=1);
}
.ant-modal-body .card {
  background: rgb(0 0 0 / 50%);
  mix-blend-mode: normal;
  -webkit-backdrop-filter: blur(35px);
  backdrop-filter: blur(35px);
}
.ant-modal-title {
  font-family: "Poppins",sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.ant-modal-body::-webkit-scrollbar {
  width: 10px;
}
.ant-modal-body::-webkit-scrollbar-track {
  background: #fff;
}
.ant-modal-body::-webkit-scrollbar-thumb {
  background: #a65a08;
}
.ant-modal-body::-webkit-scrollbar-thumb:hover {
  filter: brightness(2);
  cursor: pointer;
}

</style>

