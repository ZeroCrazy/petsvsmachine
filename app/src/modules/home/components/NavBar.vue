<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item is-hidden-desktop">
            <a role="button" class="navbar-item" @click="open = true">
              <span class="icon">
                <i class="fas fa-2x fa-bars"></i>
              </span>
            </a>
          </a>
          <a class="navbar-item">
            <img :src="require('@/assets/images/logo.png')" />
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <a
              v-for="({ name, icon, route: routeName }, index) in sections"
              :key="index"
              @click="
                {
                  $router.push({ name: routeName });
                }
              "
              :class="{
                'navbar-item': true,
                'is-active': $route.name === routeName,
              }"
            >
              <i :class="['left', 'fal', icon]"></i> {{ $t(name) }}
            </a>
          </div>

          <div class="navbar-end">
            <div
              v-if="authStatus"
              class="navbar-item has-dropdown is-hoverable"
            >
              <a class="navbar-link">
                <i class="left fal fa-user-circle"></i>
                {{ $t("section.myaccount") }}
              </a>

              <div
                class="
                  navbar-dropdown
                  animate__animated animate__slideInRight animate__faster
                "
              >
                <a class="navbar-item">
                  Wallet address:<br />0x17ee...99110a97ba18e
                </a>
              </div>
            </div>

            <div v-else class="navbar-item">
              <div class="buttons">
                <a
                  class="button is-primary"
                  @click="$router.push({ name: 'dashboard' })"
                >
                  <strong>{{ $t("section.login") }}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <o-sidebar fullheight overlay mobile="fullwidth" :open="open">
      <o-button icon-left="times" label="Close" @click="open = false" />
      <img
        width="128"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        alt="Lightweight UI components for Vue.js"
      />
      <h3>Example</h3>
    </o-sidebar>
  </div>
</template>

<script>
import { ref } from "vue";
import useAuth from "@/modules/auth/composables/useAuth";

export default {
  name: "Home",
  components: {},
  setup() {
    const open = ref(false);

    const { logout, authStatus } = useAuth();
    console.log(authStatus.value);

    return {
      sections: [
        {
          name: "section.dashboard",
          icon: "fa-paw",
          route: "dashboard",
        },
        {
          name: "section.marketplace",
          icon: "fa-store",
          route: "marketplace",
        },
        {
          name: "section.feed",
          icon: "fa-bone",
          route: "feed",
        },
        {
          name: "section.newOffering",
          icon: "fa-megaphone",
          route: "newOffering",
        },
      ],

      open,
      authStatus,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.navbar {
  height: 56px;
}
.navbar-link,
a.navbar-item {
  color: $text;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
}

.navbar-link.is-active,
a.navbar-item.is-active {
  color: #fff;
  position: relative;
}

.navbar-link.is-active,
a.navbar-item.is-active::after {
  border-bottom: 3px solid $primary;
  content: "";
  display: block;
  height: 3px;
  position: absolute;
  top: 53px;
  transform: translateX(30%);
  width: 50%;
}

a.navbar-link i.left,
a.navbar-item i.left {
  font-size: 14px;
  margin-right: 10px;
}

.navbar-link:hover,
a.navbar-item:hover {
  background-color: transparent;
  color: $primary;
  transition: 300ms;
}

nav {
  background-color: #000 !important;
  margin-bottom: 4rem;
}
</style>
