<template>
  <div class="columns is-multiline">
    <!-- huevo que has de pagar 5 PVM para abrirlo -->
    <div class="column is-4">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="egg-incubation land inventory-view-land">
              <div
                class="pet"
                :style="`
                  background: url('${require('@/assets/images/egg.png')}');
                  filter: grayscale(1);`"
              ></div>
              <div class="coordinate btn-egg">
                <div class="item">
                  <button class="button shop-button is-small">5 PVM</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="column is-4" v-for="egg in eggs.eggs" :key="egg">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="egg-incubation land inventory-view-land">
              <div
                class="pet"
                :style="`background: url('${require('@/assets/images/egg.png')}');`"
              ></div>
              <div class="coordinate btn-egg">
                <div class="item">
                  <button
                    @click="createEgg()"
                    class="button shop-button is-small"
                  >
                    Open
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
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="egg-incubation land inventory-view-land">
              <div
                class="pet"
                :style="`background: url('${require('@/assets/images/egg.png')}')`"
              ></div>
              <div class="coordinate btn-egg">
                <div class="item">
                  <button
                    @click="
                      openEgg(
                        egg.hours <= 0 && egg.minutes <= 0 && egg.seconds <= 0,
                        egg.id
                      )
                    "
                    class="button shop-button is-small"
                    :class="{
                      disabled:
                        egg.hours <= 0 && egg.minutes <= 0 && egg.seconds <= 0
                          ? false
                          : true,
                    }"
                  >
                    Claim
                  </button>
                </div>
              </div>
              <div class="resources farm">
                <div class="item have-light">
                  {{ egg.hours }}:{{ egg.minutes }}:{{ egg.seconds }}
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
import { onMounted } from "vue";
import { Modal } from "ant-design-vue";
import useInventory from "../composables/useInventory";
import EggRecived from "../components/EggRecived.vue";

export default {
  name: "TabPetSupreme",
  components: {},
  props: {},

  setup() {
    const { eggs, getEggs, generateEgg, open } = useInventory();

    const createEgg = async () => {
      const resp = await generateEgg();
      if (resp) {
        Modal.info({
          content: () => <EggRecived />,
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
    };

    const openEgg = async (canOpen, id) => {
      if (canOpen) {
        const resp = await open(id);
        if (resp) {
          const resp = await getEggs();
          if (resp) eggs.value = resp;
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
