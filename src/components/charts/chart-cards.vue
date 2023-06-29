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
    chartType: {
      type: String,
      default: undefined,
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
    skips: {
      default: undefined,
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
    _composeData: function(data, colorSettings) {
      let dataset = [];
      if (this.hasMultipleDatasets) {
        for (const key in data) {
          if (key in this.skips) continue;
          const i = Object.keys(data).indexOf(key);
          const _data = {
            data: data[key],
            fill: true,
            borderColor: colorSettings.borderColor[i],
            borderWidth: 2,
            borderDashOffset: 0.0,
            backgroundColor: colorSettings.backgroundColor[i],
            pointBackgroundColor: colorSettings.pointBackgroundColor[i],
            pointBorderColor: colorSettings.pointBorderColor[i],
            pointHoverBackgroundColor:
              colorSettings.pointHoverBackgroundColor[i],
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
          };
          dataset.push(_data);
        }
      } else {
        dataset = [
          {
            data: Object.values(data),
            fill: true,
            borderColor: colorSettings.borderColor,
            borderWidth: 2,
            borderDashOffset: 0.0,
            backgroundColor: colorSettings.backgroundColor,
            pointBackgroundColor: colorSettings.pointBackgroundColor,
            pointBorderColor: colorSettings.pointBorderColor,
            pointHoverBackgroundColor: colorSettings.pointHoverBackgroundColor,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
          },
        ];
      }
      return dataset;
    },
    _getKeys: function(data) {
      if (this.keys != undefined) return data[this.keys];
      else if (this.hasMultipleDatasets) Object.keys(data[0]);
      else return Object.keys(data);
    },
    render: function(data, colorSettings) {
      this.hasData = true;
      if (colorSettings == {} || colorSettings == undefined) {
        colorSettings = {
          borderColor: "#009fff",
          pointBackgroundColor: "#009fff",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#009fff",
        };
      }
      const _data = this._composeData(data, colorSettings);
      const _keys = this._getKeys(data);
      const ctx = document.getElementById(this.name).getContext("2d");
      // const blueGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      // blueGradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      // blueGradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      // blueGradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
      const chart = new Chart(ctx, {
        type: this.chartType,
        data: {
          label: "數量",
          labels: _keys,
          datasets: {..._data, pointHitRadius: 1000,},
        },
        options: {
          responsive: true,
          legend: {
            display: this.legend,
            position: "bottom",
          },
        },
      });
      this.chart = chart;
    },
  },
};
</script>
