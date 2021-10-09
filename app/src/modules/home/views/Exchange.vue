<template>
  <div class="container">
    <div class="columns mt-6">
      <div class="column is-fullwidth">
        <div class="card shop-card has-text-white">
          <div class="card-content">
            <div class="content">
              <div class="tabs is-fullwidth">
                <ul class="columns" style="margin: auto; border: none">
                  <li
                    @click="section = 1"
                    class="tablinks column is-4"
                    :class="{ 'is-active': section === 1 }"
                  >
                    <a class="has-text-white">
                      <span>PVM <i class="fal fa-angle-right"></i> CE</span>
                    </a>
                  </li>
                  <li
                    @click="section = 2"
                    class="tablinks column is-4"
                    :class="{ 'is-active': section === 2 }"
                  >
                    <a class="has-text-white">
                      <span>CE <i class="fal fa-angle-right"></i> PVM</span>
                    </a>
                  </li>
                  <li
                    @click="section = 3"
                    class="tablinks column is-4"
                    :class="{ 'is-active': section === 3 }"
                  >
                    <a class="has-text-white">
                      <span>Pet <i class="fal fa-angle-right"></i> Egg</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                v-if="section === 1"
                id="page_pvmtoce"
                class="inventorycontent"
              >
                <PvmCe />
              </div>
              <div
                v-if="section === 2"
                id="page_cetopvm"
                class="inventorycontent"
              >
                <CePvm />
              </div>
              <div
                v-if="section === 3"
                id="page_petstoegg"
                class="inventorycontent"
              >
              <PetEgg/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PvmCe from "../components/PvmCe.vue";
import CePvm from "../components/CePvm.vue";
import PetEgg from '../components/PetEgg.vue';
export default {
  components: { PvmCe, CePvm, PetEgg },
  name: "Exchange",
  setup() {
    return {
      section: ref(1),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>
