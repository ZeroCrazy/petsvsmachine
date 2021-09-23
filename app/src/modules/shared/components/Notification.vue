<template>
  <section
    class="position animate__animated animate__slideInRight animate__faster"
  >
    <o-notification
      closable
      type="info"
      iconClass="fas fa-exclamation-circle"
      closeClass="far fa-times bg-btn"
      variant="danger"
      aria-close-label="Close notification"
    >
      {{ msg }}
    </o-notification>
  </section>
</template>

<script>
export default {
  name: "Nofitication",
  components: {},
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.position {
  position: fixed;
  top: 80px;
  right: 20px;
}
</style>
