<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-6">
      <div class="card background-transparent no-box-shadow">
        <div class="card-content">
          <div class="content">
            <!-- <form @submit.=""> -->
            <div class="field">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static is-large"> PVM </a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        @keyup="exchangePVMtoCE()"
                        v-model="pvm"
                        id="page_pvmtoce_pvm"
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
                      <a class="button is-static is-large"> CE </a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        v-model="ce"
                        disabled
                        id="page_pvmtoce_ce"
                        class="input is-large"
                        type="number"
                        step="70"
                        min="70"
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
                    <button class="button shop-button">Confirm</button>
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
import { ref } from "@vue/reactivity";
export default {
  name: "Home",
  components: {},
  setup() {
    const PVMtoCE = 70; // recibe 70 CE a cambio de 1 PVM
    // const CEtoPVM = 130; // recibe 1 PVM a cambio de 130 CE
    // const PETSHtoPETSU = 100; // número de mascotas de la tienda que necesita para convertir a una mascota suprema
    // const WithdrawPVMtax = 5; // porcentage de comisión al querer retirar PVM
    const pvm = ref(1);
    const ce = ref(70);
    const exchangePVMtoCE = () => {
      ce.value = Math.round(pvm.value * PVMtoCE);
    };

    return {
      exchangePVMtoCE,
      pvm,
      ce,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>
