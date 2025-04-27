<template>
  <v-container fluid max-width="90%">
    <v-card>
      <v-card-title primary-title> HISTORICAL DATA </v-card-title>
      <v-card-subtitle> 歷史資訊 </v-card-subtitle>
      <v-card-text class="mt-4">
        <!-- <v-row>
          <v-col>
            <v-alert type="warning" outlined>
              Please note that due to a blackout back in June, 2023 in the old
              server, the data of the month is damaged and not available this
              time.
            </v-alert>
          </v-col>
        </v-row> -->
        <v-row>
          <v-col cols="3">
            <v-select
              label="Country | 國家"
              v-model="country"
              :items="countries"
              prepend-icon="mdi-map-marker-outline"
              item-value="value"
              item-text="name"
              dense
            />
          </v-col>
          <v-col cols="3">
            <v-menu
              v-model="startDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="Start Date | 開始日期"
                  v-model="startDate"
                  prepend-icon="mdi-calendar-outline"
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                min="2021-01-20"
                max="2023-09-30"
                @input="startDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="3">
            <v-menu
              v-model="endDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="End Date | 結束日期"
                  v-model="endDate"
                  prepend-icon="mdi-calendar-outline"
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="endDate"
                min="2021-01-20"
                max="2023-09-30"
                @input="endDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <LineChartCard
          name="chart"
          ref="chart"
          title="Trand"
          subtitle="趨勢"
          :hasMultipleDatasets="false"
          keys="labels"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import LineChartCard from "../charts/linechart-card.vue";
import apis from "@/apis/api";

export default {
  components: { LineChartCard },
  data() {
    return {
      showDialog: true,
      datacollection: null,
      options: {
        responsive: true,
      },
      country: "TWN",
      startDateMenu: false,
      startDate: "2021-01-20",
      endDateMenu: false,
      endDate: "2023-09-30",
      countries: [
        { name: "Taiwan | 臺灣", value: "TWN" },
        { name: "Japan | 日本", value: "JPN" },
        { name: "United States | 美國", value: "USA" },
        { name: "Canada | 加拿大", value: "CAN" },
        { name: "Israel | 以色列", value: "ISR" },
        { name: "China | 中國", value: "CHN" },
        { name: "World | 世界", value: "Total" },
      ],
    };
  },
  created() {
    this.renderChart();
  },
  watch: {
    country() {
      this.renderChart(true);
    },
    startDate() {
      this.renderChart(true);
    },
    endDate() {
      this.renderChart(true);
    },
  },
  methods: {
    async renderChart(update = false) {
      const data = await apis.getDailyDataOfCountry(this.country);

      let confirmed = [];
      let death = [];
      let recovered = [];
      let crtical = [];

      let dates = [];
      const startDate = new Date(this.startDate);
      let endDate = new Date(this.endDate);
      endDate.setDate(endDate.getDate() + 1);

      data.forEach((d) => {
        if (d.data[this.country]) {
          const dt = new Date(d.createdAt);
          if (dt < startDate || dt > endDate) {
            return;
          }

          dates.push(dt.toISOString().slice(0, 10));
          death.push(d.data[this.country].Deaths);
          recovered.push(d.data[this.country].Recovered);
          crtical.push(d.data[this.country]["Serious Critical"]);
          confirmed.push(d.data[this.country].Confirmed);
          // population.push(d.data[this.country].population)
        }
      });

      const dataShow = {
        labels: dates,
        datasets: [
          {
            label: "Confirmed",
            borderColor: "#F6E064",
            data: confirmed,
            pointRadius: 0,
            pointHitRadius: 1000,
          },
          {
            label: "Deaths",
            borderColor: "#F66464",
            data: death,
            pointRadius: 0,
            pointHitRadius: 1000,
          },
          {
            label: "Recovered",
            borderColor: "#92C45B",
            data: recovered,
            pointRadius: 0,
            pointHitRadius: 1000,
          },
          {
            label: "Serious and Critical",
            borderColor: "#EC9B62",
            data: crtical,
            pointRadius: 0,
            pointHitRadius: 1000,
          },
        ],
      };

      const options = {
        type: "line",
        data: dataShow,
        options: {},
      };
      if (update) this.$refs.chart.update(dataShow);
      else this.$refs.chart.render({}, options);
    },
  },
};
</script>
