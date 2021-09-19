<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ $t("login.button") }}
    Probando
    <br />
    <o-button variant="primary">Primary</o-button>
    <br />
    <o-button rounded>Rounded</o-button>
    <br />
    <button class="button">Button</button>
    <p>{{ $t("login.user") }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  setup() {
    return {};
  },
};
</script>
