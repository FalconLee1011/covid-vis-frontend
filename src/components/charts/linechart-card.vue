<template>
  <v-card elevation="10">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      <canvas :height="height" :id="name" />
      <div class="text-center">
        <v-progress-circular
          v-if="!hasData"
          :size="50"
          indeterminate
          style="margin-bottom: 5vh"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
      default: "卡片中文",
    },
    subtitle: {
      type: String,
      default: "Card English",
    },
    height: {
      default: "80vh",
    },
    legend: {
      type: Boolean,
      default: false,
    },
    hasMultipleDatasets: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: String,
      default: undefined,
    },
    config: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chart: undefined,
      hasData: false,
    };
  },
  mounted() {},
  methods: {
    render(data, options) {
      this.hasData = true;
      this.chart = new Chart(document.getElementById(this.name), options);
    },
    update(data) {
      this.chart.data = data;
      this.chart.update();
    },
    clear() {
      this.hasData = false;
      const canvas = document.getElementById(this.name);
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.chart = undefined;
    },
  },
};
</script>
