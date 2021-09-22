<template>
  <div>
    <NavBar />
    <div class="main-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./modules/shared/components/NavBar.vue";

import useAuth from "@/modules/auth/composables/useAuth";
import { onMounted } from "vue";

export default {
  name: "App",
  components: { NavBar },
  setup() {
    const { autoLogin } = useAuth();

    onMounted(() => {
      autoLogin();
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.main-container {
  height: calc(100vh - 56px);
}
</style>
