<template>
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column is-4">
        <div class="title has-text-centered has-text-white">
          {{ $t("login.welcome") }}
        </div>
        <div class="">
          <div class="card has-background-black">
            <div class="card-content">
              <div class="field">
                <div class="control is-large">
                  <button
                    class="
                      button
                      no-border
                      is-medium is-fullwidth
                      has-background-black-ter has-text-white
                    "
                    @click="metamask = true"
                  >
                    <span class="icon is-medium">
                      <img :src="require('@/assets/icons/metamask.svg')" />
                    </span>
                    <span> {{ $t("login.metamask") }}</span>
                  </button>
                </div>
              </div>
              <form @submit.prevent="onSubmit()">
                <div class="field">
                  <div class="control is-large">
                    <input
                      class="input is-large no-border input-loginregister"
                      type="email"
                      required
                      :placeholder="$t('login.email')"
                      v-model="userForm.email"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control is-large">
                    <input
                      class="input is-large no-border input-loginregister"
                      type="password"
                      required
                      :placeholder="$t('login.password')"
                      v-model="userForm.password"
                    />
                  </div>
                </div>
                <div class="buttons">
                  <button
                    type="submit"
                    :class="{
                      button: true,
                      'is-primary': true,
                      'is-fullwidth': true,
                      'is-loading': isLoading,
                    }"
                  >
                    {{ $t("login.button") }}
                  </button>
                </div>
              </form>

              <div class="buttons mt-5">
                <router-link
                  :to="{ name: 'register' }"
                  style="background: transparent; border: 0px"
                  class="button is-fullwidth has-text-light"
                >
                  {{ $t("login.noAccount") }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-if="errors.active" class="notification is-danger is-light mt-4">
          {{ $t(errors.msg) }}
        </div>
        <vue-metamask
          v-if="metamask"
          userMessage="msg"
          @onComplete="onComplete"
        >
        </vue-metamask>
      </div>
    </div>
  </div>
</template>

<script>
import VueMetamask from "vue-metamask";
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

export default {
  name: "Dashboard",
  components: { VueMetamask },
  setup() {
    const { loginUser, createUserMetamask } = useAuth();
    const router = useRouter();

    const userForm = ref({
      email: "",
      password: "",
    });

    const errors = ref({
      active: false,
      msg: "",
    });

    const isLoading = ref(false);

    const onSubmit = async () => {
      errors.value.active = false;
      isLoading.value = true;
      const resp = await loginUser(userForm.value);
      isLoading.value = false;
      if (resp.ok) router.push({ name: "dashboard" });
      else {
        errors.value.active = true;
        errors.value.msg = "login.loginError";
      }
    };

    return {
      onSubmit,
      userForm,
      errors,
      isLoading,
      msg: "This is demo net work",
      metamask: ref(false),
      onComplete: async (data) => {
        const resp = await createUserMetamask(data);
        if (resp.ok) router.push({ name: "dashboard" });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.container,
.container > .columns {
  height: 100%;
}
.no-border {
  border: none !important;
}

.background-transparent {
  background-color: transparent !important;
}

.input-loginregister {
  background: $input-background-color;
  color: #ddd;
}

.input-loginregister::placeholder {
  color: $input-placeholder-color;
}
</style>
