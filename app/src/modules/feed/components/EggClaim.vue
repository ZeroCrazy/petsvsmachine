<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="egg-incubation land inventory-view-land">
          <div
            class="pet"
            :style="`background: url('${require('@/assets/images/egg.png')}')`"
          ></div>
          <div class="coordinate btn-egg">
            <div class="item">
              <button
                @click="openEgg(hours <= 0 && minutes <= 0 && seconds <= 0, id)"
                class="button shop-button is-small"
                :class="{
                  disabled:
                    hours <= 0 && minutes <= 0 && seconds <= 0 ? false : true,
                }"
              >
                Claim
              </button>
            </div>
          </div>
          <div class="resources farm">
            <div class="item have-light">
              {{ hours }}:{{ minutes }}:{{ seconds }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onUnmounted } from "@vue/runtime-core";
export default {
  name: "EggClaim",
  components: {},
  props: {
    id: Number,
    open_at: String,
    date: String,
  },

  setup(props) {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const date1 = new Date(props.date);
    const date2 = new Date(props.open_at);
    let milliseconds = date2 - date1; // milliseconds between

    const getTime = () => {
      if (milliseconds <= 0) {
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
      } else {
        //Get hours from milliseconds
        const hours2 = milliseconds / (1000 * 60 * 60);
        const absoluteHours = Math.floor(hours2);
        const h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;

        //Get remainder from hours and convert to minutes
        const minutes2 = (hours2 - absoluteHours) * 60;
        const absoluteMinutes = Math.floor(minutes2);
        const m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;

        //Get remainder from minutes and convert to seconds
        const seconds2 = (minutes2 - absoluteMinutes) * 60;
        const absoluteSeconds = Math.floor(seconds2);
        const s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;

        hours.value = h;
        minutes.value = m;
        seconds.value = s;
      }
      milliseconds -= 1000;
    };

    const timer = setInterval(() => {
      getTime();
    }, 1000);

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      hours,
      seconds,
      minutes,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/colors.scss";
@import "@/css/animations.scss";
</style>
