<template>
  <div class="columns is-multiline">
    <!-- huevo que has de pagar 5 PVM para abrirlo -->
    <div class="column is-4">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="egg-incubation land inventory-view-land">
              <div class="time quantity">{{ eggs.eggs }}</div>

              <div
                class="pet"
                :style="`
                  background: url('${require('@/assets/images/egg.png')}');
                  filter: grayscale(1);`"
              ></div>
              <div class="coordinate btn-egg">
                <div class="item">
                  <button
                    @click="createEgg()"
                    class="button shop-button is-small"
                  >
                    5 PVM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- huevo que ya ha solicitado abrirlo y está en proceso de abrirse -->
    <div class="column is-4" v-for="egg in eggs.incubate" :key="egg.id">
      <EggClaim
        :id="egg.id"
        :open_at="egg.open_at"
        :date="egg.date"
        @openEgg="openEgg"
      />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { Modal } from "ant-design-vue";
import { notification } from "ant-design-vue";

import useInventory from "../composables/useInventory";
import EggRecived from "../components/EggRecived.vue";
import EggClaim from "./EggClaim.vue";

export default {
  name: "TabPetSupreme",
  components: { EggClaim },
  props: {},

  setup() {
    const { eggs, getEggs, generateEgg, open } = useInventory();

    const createEgg = async () => {
      // TODO comprobar en backend que solo se pueda incubar un huevo
      if (eggs.value.incubate.length > 0) {
        notification.error({
          message: "Solo puedes incubar un huevo a la vez",
          // message: i18n.t("farm.noResources"),
          duration: 3,
        });
        return;
      }

      const resp = await generateEgg();
      if (resp)
        notification.info({
          message: "El huevo ha empezado a generarse",
          // message: i18n.t("farm.noResources"),
          duration: 3,
        });
      const resp2 = await getEggs();
      if (resp2) eggs.value = resp;
      return;
    };

    const openEgg = async (canOpen, id) => {
      if (canOpen) {
        const resp = await open(id);
        if (resp) {
          Modal.info({
            content: () => <EggRecived id={`${id}`} />,
            centered: true,
            destroyOnClose: true,
            okType: "primary",
            footer: "",
            async onOk() {
              const resp = await getEggs();
              if (resp) eggs.value = resp;
            },
          });
        }
      }
    };

    onMounted(async () => {
      const resp = await getEggs();
      if (resp) eggs.value = resp;
    });

    return {
      eggs,
      createEgg,
      openEgg,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";
</style>
