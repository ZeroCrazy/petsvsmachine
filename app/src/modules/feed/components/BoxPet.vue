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
          <button class="mb-0 box" @click="feed('house')">
            <i class="fal fa-home-alt"></i>
          </button>
          <button class="mb-0 box" @click="feed('food')">
            <i class="fal fa-bone"></i>
          </button>
          <button class="mb-0 box" @click="feed('caress')">
            <i class="fal fa-hand-paper"></i>
          </button>
          <button
            @click="$router.push({ name: 'feedDetails', params: { id: id } })"
            class="mb-0 box"
          >
            <i class="fal fa-eye"></i>
          </button>
          <!-- borrar -->
          <a-popconfirm
            title="Are you sure？"
            ok-text="Yes"
            cancel-text="No"
            @confirm="deleteFarm(id)"
          >
            <button class="mb-0 box">
              <i class="fal fa-trash-alt"></i>
            </button>
          </a-popconfirm>
        </div>
        <div class="land">
          <div class="time" v-if="haveHouse">{{ timer }}</div>
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
            <div v-if="isAfraid" class="item have-light flashit">
              <i class="fal fa-bolt"></i>
            </div>
            <div v-if="bones == 2" class="item have-food">
              <i class="fal fa-bone"></i>
            </div>
            <div v-if="haveHouse" class="item have-house">
              <i class="fal fa-home-alt"></i>
            </div>
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
import { notification } from "ant-design-vue";
import i18n from "@/i18n/i18n";
import useFarm from "../composables/useFarm";
import useFeed from "../composables/useFeed";

export default {
  name: "BoxPet",
  components: {},
  props: propsBoxPet,

  setup(props) {
    const { feedPet, putHouse, caressPet, deletePet } = useFarm();
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
        const resp = await caressPet(props.id);
        if (resp.ok) return true;
      }
    };

    const calcTime = ref(false);
    calcTime.value = props.minsToComplete + props.extraTime;

    const deleteFarm = async (id) => {
      const resp = await deletePet(id);
      console.log(resp);
    };

    return {
      feed,
      deleteFarm,
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
