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
          <!-- SECCIONES -->
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
                'is-active': routerName.includes(routeName),
              }"
            >
              <i :class="['left', 'fal', icon]"></i> {{ $t(name) }}
            </a>
          </div>

          <div class="navbar-end">
            <!-- IDIOMA -->
            <div class="navbar-item">
              <a-dropdown :trigger="['hover']">
                <a @click.prevent class="navbar-icon ant-dropdown-link">
                  <i class="left fal fa-globe"></i>
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="0">
                      <a class="navbar-item" @click="setLang('en')">
                        <div class="icon-text">
                          <span :class="{ 'text-primary': lang === 'en' }">
                            {{ $t("language.english") }}</span
                          >
                          <span v-if="lang === 'en'" class="icon text-primary">
                            <i class="fas fas fa-check"></i>
                          </span>
                        </div>
                      </a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a class="navbar-item" @click="setLang('es')">
                        <div class="icon-text">
                          <span :class="{ 'text-primary': lang === 'es' }">
                            {{ $t("language.spanish") }}</span
                          >
                          <span v-if="lang === 'es'" class="icon text-primary">
                            <i class="fas fas fa-check"></i>
                          </span>
                        </div>
                      </a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>

            <div
              v-if="authStatus"
              class="navbar-item has-dropdown is-hoverable"
            >
              <a-dropdown :trigger="['hover']">
                <a @click.prevent class="navbar-link ant-dropdown-link">
                  <i class="left fal fa-user-circle"></i>
                  {{ $t("section.myaccount") }}
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="0">
                      <a class="navbar-item">
                        {{ $t("section.settings") }}
                      </a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a class="navbar-item">
                        {{ $t("section.wallet") }}:<br />{{ metamask }}
                      </a>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a class="navbar-item" @click="onLogout">
                        {{ $t("section.logout") }}
                      </a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>

            <div v-else class="navbar-item">
              <div class="buttons">
                <a
                  class="button is-primary"
                  @click="$router.push({ name: 'login' })"
                >
                  <strong>{{ $t("section.login") }}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- SIDEBAR -->
    <!-- <o-sidebar fullheight overlay mobile="fullwidth" :open="open">
      <o-button icon-left="times" label="Close" @click="open = false" />
      <img
        width="128"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        alt="Lightweight UI components for Vue.js"
      />
      <h3>Example</h3>
    </o-sidebar> -->
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import useAuth from "@/modules/auth/composables/useAuth";

import i18n from "@/i18n/i18n";
//TODO: Refactorizar en composables
export default {
  name: "Home",
  components: {},
  setup() {
    const open = ref(false);
    const router = useRouter();
    const route = useRoute();
    const routerName = ref("");
    const lang = ref("es");

    watch(
      () => route.name,
      () => (routerName.value = route.name)
    );

    const setLang = (language) => {
      lang.value = language;
      i18n.setLocale(language);
    };

    const { logout, authStatus, metamaskAddress } = useAuth();

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
      lang,
      setLang,
      routerName,
      onLogout: () => {
        logout();
        router.push({ name: "login" });
      },
      metamask: computed(
        () =>
          `${metamaskAddress.value.substr(
            0,
            6
          )}...${metamaskAddress.value.substr(
            metamaskAddress.value.length - 13,
            13
          )}`
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.navbar {
  height: 56px;
  margin-bottom: 0px;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: $primary;
}
.navbar-link,
a.navbar-item {
  color: $text-nav;
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

.navbar-icon {
  color: $text-nav;
  transition: 300ms;
  background-color: rgba(#fff, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  text-align: center;
  &:hover {
    color: $primary;
  }
  & > i {
    vertical-align: -webkit-baseline-middle;
  }
}

.text-primary {
  color: $primary;
}
</style>
