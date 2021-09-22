<template>
  <div class="field">
    <div class="control is-large">
      <button
        :class="{
          button: true,
          'no-border': true,
          'is-medium is-fullwidth': true,
          'has-background-black-ter': type === 'dark',
          'has-text-white': type === 'dark',
          'has-text-white has-background-success': type === 'success',
        }"
        @click="metamask = true"
      >
        <span class="icon is-medium">
          <img :src="require('@/assets/icons/metamask.svg')" />
        </span>
        <span> {{ $t("login.metamask") }}</span>
      </button>
    </div>
    <vue-metamask v-if="metamask" userMessage="msg" @onComplete="onComplete">
    </vue-metamask>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import VueMetamask from "vue-metamask";
import useAuth from "../composables/useAuth";

export default {
  name: "MetamaskButton",
  components: { VueMetamask },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { createUserMetamask } = useAuth();
    const router = useRouter();

    return {
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

.no-border {
  border: none !important;
}
</style>
