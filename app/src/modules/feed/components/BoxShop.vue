<template>
  <div class="card shop-card has-text-white">
    <div class="card-content">
      <div class="content">
        <div class="shop-product">
          <div
            class="object"
            :style="`background: url(${require('@/assets/icons/' + image)})`"
          ></div>
        </div>
        <p class="title is-size-4 has-text-white">
          <b>{{ title }}</b>
        </p>
        <div class="extrainfo">
          <div style="float: left">
            <span v-if="days"
              >Duration: <b>{{ days }} days</b></span
            >
          </div>
          <div style="float: right">
            Usage: <b>{{ usages }}</b>
          </div>
          <div class="is-clearfix"></div>
        </div>
        <p class="description">{{ description }}</p>
        <div class="columns is-mobile">
          <div class="column is-2">
            <button @click="substract" class="button shop-button is-fullwidth">-</button>
          </div>
          <div class="column is-2">
            <button
              class="button shop-button is-fullwidth"
              style="background: rgb(0 0 0 / 40%) !important"
            >
              {{ quantity }}
            </button>
          </div>
          <div class="column is-2">
            <button @click="add" class="button shop-button is-fullwidth">+</button>
          </div>
          <div class="column is-6">
            <button @click="buy()" class="button shop-button is-fullwidth">
              {{ cost * quantity }} CE
            </button>
          </div>
        </div>

        <!-- <button @click="buy()" class="button shop-button is-fullwidth">
          {{ cost }} CE
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { notification } from "ant-design-vue";
import i18n from "@/i18n/i18n";

import useShop from "../composables/useShop";
import useFeed from "../composables/useFeed";
import { ref } from "vue";
// import propsBoxShop from "../interfaces/boxShop";

export default {
  name: "BoxPet",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    days: {
      days: Number,
      required: true,
    },
    usages: {
      days: Number,
      required: true,
    },
    description: {
      days: String,
      required: true,
    },
    cost: {
      days: Number,
      required: true,
    },
    image: {
      days: String,
      required: true,
    },
    action: {
      days: String,
      required: true,
    },
  },

  setup(props) {
    const { buyResource } = useShop();
    const { resources } = useFeed();

    const quantity = ref(1);

    const buy = async () => {
      if (props.cost * quantity.value > resources.value.coins) {
        // Mostrar notificacion
        notification.error({
          message: i18n.t("farm.noResources"),
          duration: 3,
        });
        return;
      }
      if (props.action === "house") {
        console.log(resources);
        const resp = await buyResource(
          "house",
          props.cost,
          props.usages,
          quantity.value
        );
        if (!resp.ok)
          notification.error({
            message: i18n.t("farm.noResources"),
            duration: 3,
          });
        return;
      } else if (props.action === "food") {
        const resp = await buyResource(
          "food",
          props.cost,
          props.usages,
          quantity.value
        );
        if (!resp.ok)
          notification.error({
            message: i18n.t("farm.noResources"),
            duration: 3,
          });
        return;
      } else if (props.action === "caress") {
        const resp = await buyResource(
          "caress",
          props.cost,
          props.usages,
          quantity.value
        );
        if (!resp.ok)
          notification.error({
            message: i18n.t("farm.noResources"),
            duration: 3,
          });
        return;
      } else if (props.action === "pet") {
        const resp = await buyResource(
          "pet",
          props.cost,
          props.usages,
          quantity.value
        );
        if (!resp.ok)
          notification.error({
            message: i18n.t("farm.noResources"),
            duration: 3,
          });
        return;
      }
    };

    return {
      buy,
      quantity,
      add() {
        quantity.value++;
      },
      substract() {
        quantity.value--;
        if (quantity.value < 1) quantity.value = 1;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";

.shop-card {
  font-family: "Poppins", sans-serif;
}
.shop-card .title {
  font-size: x-large;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 2px !important;
  word-spacing: 1px;
}
.shop-card .extrainfo {
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 15px !important;
  word-spacing: 1px;
}
.shop-card .description {
  min-height: 72px;
}
.shop-card p {
  margin-bottom: 20px !important;
}
.shop-options {
  height: auto;
  width: 100%;
  float: unset;
}
.shop-options .box {
  padding: 20px 0px;
  margin: 0px 0px 5px 0px;
}
.shop-product {
  background-color: rgb(255 255 255 / 5%);
  background-position: center bottom;
  background-repeat: no-repeat;
  border-radius: 3px;
  border: 1px solid rgb(255 255 255 / 20%);
  height: 201px;
  margin-bottom: 10px;
  width: 100%;
}
.shop-product .object {
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  height: 40%;
  margin-left: 30%;
  margin-right: 30%;
  position: relative;
  top: 49px;
  width: 40%;
}
.shop-button,
.shop-button:hover,
.shop-button:focus,
.shop-button:active {
  background: #1eb73b !important;
  border-radius: 8px;
  border: none;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
</style>
