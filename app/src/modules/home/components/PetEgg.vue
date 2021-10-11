<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-6">
      <div class="card background-transparent no-box-shadow">
        <div class="card-content">
          <div class="content">
            <!-- <form onchange="exchangePETtoEGG();"> -->
            <div class="field">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static is-large"> PET </a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        @keyup="exchangePETtoEGG()"
                        v-model="pet"
                        id="page_petstoegg_pet"
                        class="input is-large"
                        type="number"
                        step="100"
                        min="100"
                        required
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="field" style="margin-bottom: 30px">
              <div class="field has-text-centered">
                <i class="fal fa-repeat has-text-white"></i>
              </div>
            </div>
            <div class="field">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static is-large"> EGG </a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        v-model="egg"
                        disabled
                        id="page_petstoegg_egg"
                        class="input is-large"
                        type="number"
                        step="1"
                        min="1"
                        required
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control" style="text-align: center">
                    <button @click="onClick()" class="button shop-button">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { notification } from "ant-design-vue";
import i18n from "@/i18n/i18n";
import useFeed from "../../feed/composables/useFeed";
import useShop from "../../feed/composables/useShop";

export default {
  name: "Home",
  components: {},
  setup() {
    const { resources, getResourcesUser } = useFeed();
    const { buyEggs } = useShop();
    console.log(resources);
    const PETSHtoPETSU = 100; // número de mascotas de la tienda que necesita para convertir a una mascota suprema
    const pet = ref(100);
    const egg = ref(1);
    const exchangePETtoEGG = () => {
      egg.value = Math.floor(pet.value / PETSHtoPETSU);
    };

    onMounted(() => getResourcesUser());
    return {
      exchangePETtoEGG,
      pet,
      egg,
      async onClick() {
        if (resources.value.pet < pet.value) {
          notification.error({
            message: i18n.t("farm.noResources"),
            duration: 3,
          });
        } else {
          const resp = await buyEggs(egg.value);
          if (resp.ok)
            notification.success({
              message: "Success",
              duration: 3,
            });
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>
