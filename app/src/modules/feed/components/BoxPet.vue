<template>
  <div class="card">
    <div class="card-content">
      <div class="content is-clickable" v-if="empty">
        <div class="land add-pet">
          <div>
            <i class="fal fa-plus-circle"></i>
          </div>
        </div>
      </div>
      <div class="content" v-else>
        <div class="pet-options">
          <button class="box" @click="feed('house')">
            <i class="fal fa-home-alt"></i>
          </button>
          <button class="box" @click="feed('food')">
            <i class="fal fa-bone"></i>
          </button>
          <button class="box" @click="feed('caress')">
            <i class="fal fa-hand-paper"></i>
          </button>
          <button
            @click="$router.push({ name: 'feedDetails', params: { id: id } })"
            class="box"
          >
            <i class="fal fa-eye"></i>
          </button>
          <!-- borrar -->
          <!-- <a-popconfirm
            title="Are you sure？Si la eliminas no recibiras CE"
            body="fsdf"
            ok-text="Yes"
            cancel-text="No"
            @confirm="deleteFarm(id)"
          > -->
          <button @click="showConfirm(id)" class="box">
            <i class="fal fa-trash-alt"></i>
          </button>
          <!-- </a-popconfirm> -->
        </div>
        <div class="land">
          <div class="time" v-if="haveHouse">{{ timer }}</div>
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
            <div
              v-if="isAfraid && minsToComplete > 0"
              class="item have-light flashit"
            >
              <i class="fal fa-bolt"></i>
            </div>
            <div v-if="bones == 2 && minsToComplete > 0" class="item have-food">
              <i class="fal fa-bone"></i>
            </div>
            <div v-if="haveHouse && minsToComplete > 0" class="item have-house">
              <i class="fal fa-home-alt"></i>
            </div>
            <div v-if="minsToComplete === 0" class="item have-finish">
              <button @click="finishFarm()" class="button shop-button is-small">
                Harvest
              </button>
            </div>
          </div>
          <div v-if="minsToComplete === 0" class="pet-finish"></div>
          <div class="floor"></div>
        </div>
        <div v-if="isAfraid" class="rain"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { propsBoxPet } from "../interfaces/boxPet";
import { notification } from "ant-design-vue";
import { Modal } from "ant-design-vue";
import i18n from "@/i18n/i18n";
import useFarm from "../composables/useFarm";
import useFeed from "../composables/useFeed";
// import { canEggRecive } from "../services/farm";
// import EggRecived from "../components/EggRecived.vue";

export default {
  name: "BoxPet",
  components: {},
  props: propsBoxPet,

  setup(props) {
    const { feedPet, putHouse, caressPet, deletePet, finish } = useFarm();
    const { resources } = useFeed();

    const feed = async (resource) => {
      if (resources.value[resource] < 1) {
        // Mostrar notificacion
        notification.error({
          message: i18n.t("farm.noResources"),
          duration: 3,
        });
        return;
      }
      if (resource === "food") {
        if (!props.haveHouse) {
          notification.info({
            // message: i18n.t("farm.maxFood"),
            message: "Necesitas una casa",
            duration: 3,
          });
          return;
        }
        if (props.bones >= 2) {
          // Mostrar notificacion
          notification.info({
            message: i18n.t("farm.maxFood"),
            duration: 3,
          });
          return;
        }
        const resp = await feedPet(props.id);
        if (resp.ok) return true;
      } else if (resource === "house") {
        if (props.haveHouse) {
          // Mostrar notificacion
          notification.info({
            message: i18n.t("farm.maxHouse"),
            duration: 3,
          });
          return;
        }
        const resp = await putHouse(props.id);
        if (resp.ok) return true;
      } else if (resource === "caress") {
        if (!props.isAfraid) {
          notification.info({
            // message: i18n.t("farm.maxFood"),
            message: "La pet no esta asustada",
            duration: 3,
          });
          return;
        }
        const resp = await caressPet(props.id);
        if (resp.ok) return true;
      }
    };

    // const calcTime = ref(false);
    // calcTime.value = props.minsToComplete + props.extraTime;

    const showConfirm = (id) => {
      Modal.confirm({
        title: () => "Do you want to delete this pet?",
        content: () => "No recibiras ningun CE y no podras recuperar la pet",
        centered: true,
        destroyOnClose: true,
        okType: "primary",
        onOk() {
          deleteFarm(id);
        },
      });
    };

    const deleteFarm = async (id) => {
      const resp = await deletePet(id);
      console.log(resp);
    };

    return {
      feed,
      deleteFarm,
      showConfirm,
      async finishFarm() {
        const resp = await finish(props.id, props.pet_ce);
        if (resp.ok) {
          // Mostrar notificacion
          notification.info({
            message: `${props.pet_ce} CE recived`,
            duration: 3,
          });

          // TODO Comporovar si recibe un huevo
          // const egg = await canEggRecive();
          // if (egg && egg.canRecived)
          //   Modal.info({
          //     content: () => <EggRecived />,
          //     centered: true,
          //     destroyOnClose: true,
          //     okType: "primary",
          //     footer: "",
          //     onOk() {},
          //   });
        }
      },
      timer: computed(() => {
        let hours = Math.floor(props.minsToComplete / 60);
        if (hours < 10) hours = "0" + hours;
        let mins = props.minsToComplete % 60;
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
