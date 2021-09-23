<template>
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column is-4">
        <div class="title has-text-centered has-text-white">
          {{ $t("register.welcome") }}
        </div>
        <div class="">
          <div class="card has-background-black">
            <div class="card-content">
              <MetamaskButton type="success" />
              <div class="field has-text-centered">or</div>
              <form @submit.prevent="onSubmit()">
                <div class="field">
                  <div class="control is-large">
                    <input
                      :class="{
                        input: true,
                        'is-large': true,
                        'no-border': true,
                        'input-loginregister': true,
                        'border-danger': errors.username.length > 0,
                      }"
                      type="text"
                      required
                      :placeholder="$t('register.username')"
                      v-model="userForm.username"
                    />
                  </div>
                  <p v-if="errors.username.length > 0" class="help is-danger">
                    {{ $t(errors.username) }}
                  </p>
                </div>
                <div class="field">
                  <div class="control is-large">
                    <input
                      :class="{
                        input: true,
                        'is-large': true,
                        'no-border': true,
                        'input-loginregister': true,
                        'border-danger': errors.email.length > 0,
                      }"
                      type="email"
                      required
                      :placeholder="$t('register.email')"
                      v-model="userForm.email"
                    />
                  </div>
                  <p v-if="errors.email.length > 0" class="help is-danger">
                    {{ $t(errors.email) }}
                  </p>
                </div>
                <div class="field">
                  <div class="control is-large">
                    <input
                      :class="{
                        input: true,
                        'is-large': true,
                        'no-border': true,
                        'input-loginregister': true,
                        'border-danger': errors.password.length > 0,
                      }"
                      type="password"
                      required
                      :placeholder="$t('register.password')"
                      v-model="userForm.password"
                    />
                  </div>
                  <p v-if="errors.password.length > 0" class="help is-danger">
                    {{ $t(errors.password) }}
                  </p>
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
                    {{ $t("register.button") }}
                  </button>
                </div>
              </form>

              <div class="buttons mt-5">
                <router-link
                  :to="{ name: 'login' }"
                  style="background: transparent; border: 0px"
                  class="button is-fullwidth has-text-light"
                >
                  {{ $t("register.noAccount") }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-if="errors.active" class="notification is-danger is-light mt-4">
          {{ $t(errors.msg) }}
          {{errors.msg}}
          <ul>
            <li v-for="(error, index) in errors.msg" :key="index">
              {{ $t(error.msg) }}
              {{ error.msg }}
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import MetamaskButton from "../components/MetamaskButton.vue";

import { validateEmail } from "../helpers";
import useAuth from "../composables/useAuth";

export default {
  name: "Dashboard",
  components: { MetamaskButton },
  setup() {
    const { createUser } = useAuth();
    const router = useRouter();

    const userForm = ref({
      username: "",
      email: "",
      password: "",
    });

    const errors = ref({
      username: "",
      email: "",
      password: "",
      response: "",
    });

    const clearErrors = () => {
      errors.value.username = "";
      errors.value.email = "";
      errors.value.password = "";
      errors.value.response = "";
    };

    const isLoading = ref(false);

    const onSubmit = async () => {
      clearErrors();
      // Validar el usuario
      if (userForm.value.username.trim().length === 0) {
        errors.value.active = true;
        errors.value.username = "register.requiredUsername";
        return false;
      }
      // Validar el email
      if (userForm.value.email.trim().length === 0) {
        errors.value.active = true;
        errors.value.email = "register.requiredEmail";
        return false;
      }
      if (!validateEmail(userForm.value.email)) {
        errors.value.active = true;
        errors.value.password = "register.invalidEmail";
        return false;
      }

      if (userForm.value.password.trim().length === 0) {
        errors.value.active = true;
        errors.value.msg = "register.requiredPassowrd";
        return false;
      }

      isLoading.value = true;
      const resp = await createUser(userForm.value);

      isLoading.value = false;
      if (resp.ok) router.push({ name: "dashboard" });
      else {
        errors.value.msg = [];
        if (resp.msg.username) errors.value.username = "register.existUsername";
        if (resp.msg.email) errors.value.email = "register.existEmail";
        if (!resp.msg.username && !resp.msg.email)
          errors.value.response = resp.msg;
        if (resp.msg[0].param === "password")
          errors.value.password = "register.passwordFormat";
      }
    };

    return {
      onSubmit,
      userForm,
      errors,
      isLoading,
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

.border-danger {
  border: solid $danger 1px !important;
}

.background-transparent {
  background-color: transparent !important;
}

.input-loginregister {
  background: $input-background-color !important;
  color: #ddd;
}

.input-loginregister::placeholder {
  color: $input-placeholder-color;
}
</style>
