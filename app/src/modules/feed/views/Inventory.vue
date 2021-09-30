<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="columns">
      <div class="column is-12">
        <div class="card shop-card has-text-white">
          <div class="card-content">
            <div class="content">
              <div class="tabs is-fullwidth">
                <ul>
                  <li
                    @click="activeTab = 1"
                    :class="{ tablinks: true, 'is-active': activeTab === 1 }"
                  >
                    <a class="has-text-white">
                      <span class="icon"><i class="fal fa-mountain"></i></span>
                      <span>Land</span>
                    </a>
                  </li>
                  <li
                    @click="activeTab = 2"
                    :class="{ tablinks: true, 'is-active': activeTab === 2 }"
                  >
                    <a class="has-text-white">
                      <span class="icon"><i class="fal fa-paw"></i></span>
                      <span>Pets</span>
                    </a>
                  </li>
                  <li
                    @click="activeTab = 3"
                    :class="{ tablinks: true, 'is-active': activeTab === 3 }"
                  >
                    <a class="has-text-white">
                      <span class="icon"><i class="fal fa-sack"></i></span>
                      <span>Tools</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                v-if="activeTab === 1"
                class="inventorycontent animate__animated animate__fadeIn"
              >
                <TabLand />
              </div>
              <div
                v-if="activeTab === 2"
                class="inventorycontent animate__animated animate__fadeIn"
              >
                <TabPets />
              </div>
              <div
                v-if="activeTab === 3"
                class="inventorycontent animate__animated animate__fadeIn"
              >
                <TabTools />
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
import TabLand from "../components/TabLand.vue";
import TabPets from "../components/TabPets.vue";
import TabTools from "../components/TabTools.vue";
export default {
  name: "Inventory",
  components: { TabLand, TabPets, TabTools },
  setup() {
    return {
      activeTab: ref(1),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.inventorycontent {
  padding: 6px 33px;
}

.tabs li.is-active a {
    border-bottom-color: $primary;
    color: $primary !important;
}
</style>

