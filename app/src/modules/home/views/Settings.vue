<template>
  <div class="container mt-6">
    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="card shop-card has-text-white">
          <div class="card-content">
            <div class="content">
              <aside class="menu">
                <p class="menu-label has-text-white">General</p>
                <ul class="menu-list">
                  <li>
                    <a class="has-text-white"
                      ><i class="fal fa-cog"></i> Account settings</a
                    >
                  </li>
                  <!-- cambio de username, password y mail -->
                  <li>
                    <a class="has-text-white"
                      ><i class="fal fa-address-card"></i> Wallets</a
                    >
                  </li>
                  <!-- vincular cuenta de metamask -->
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-8">
        <div class="card shop-card has-text-white">
          <div class="card-content">
            <div class="content">
              <p class="title has-text-white">Account settings</p>

              <div class="columns is-multiline is-mobile">
                <div class="column is-8">
                  <div class="field">
                    <label class="label has-text-white">Username</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-model="username"
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="field">
                    <label class="label" style="color: transparent !important"
                      >btn</label
                    >
                    <div class="control">
                      <!-- si detecta que el user ha cambiado algo del input, se quite la class disabled -->
                      <button
                        class="button shop-button disabled"
                        style="width: 100%"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns is-multiline is-mobile">
                <div class="column is-8">
                  <div class="field">
                    <label class="label has-text-white">Email</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-model="email"
                        class="input"
                        type="email"
                        placeholder="Email input"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="field">
                    <label class="label" style="color: transparent !important"
                      >btn</label
                    >
                    <div class="control">
                      <!-- si detecta que el user ha cambiado algo del input, se quite la class disabled -->
                      <button
                        class="button shop-button disabled"
                        style="width: 100%"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-primary">Change password</button>
                  <!-- cuando hagas clic, salga un modal con un contenido similar a este https://prnt.sc/1vh598b -->
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
import { ref } from "vue";
export default {
  components: {},
  name: "Settings",
  setup() {
    const username = ref("");
    const email = ref("");
    return {
      username,
      email,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
</style>
