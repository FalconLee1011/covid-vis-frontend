<template>
  <v-container fluid max-width="90%">
    <v-card>
      <v-card-title primary-title> HISTORICAL DATA </v-card-title>
      <v-card-subtitle> 歷史資訊 </v-card-subtitle>
      <v-card-text class="mt-4">
        <!-- <line-chart 
          :styles="{position: 'relative', height: '200px'}" 
          :chart-data="datacollection"
          :options=options
        /> -->
<!-- 
        <chartCard
          name="chart"
          ref="chart"
          title="chart"
          subtitle="chart"
          chartType="line"
          height="20vh"
          :hasMultipleDatasets="false"
          keys="labels"
        /> -->
        <v-row>
          <v-col cols=3>
            <v-select 
              label="Country | 國家"
              v-model=country
              :items=countries
              prepend-icon="mdi-map-marker-outline"
              item-value="value"
              item-text="name"
              dense
            />
          </v-col>
          <v-col cols=3>
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
                :max=today
                @input="startDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols=3>
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
                :max=today
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
import ChartCard from "../charts/chart-cards.vue";
import LineChartCard from "../charts/linechart-card.vue";
// import LineChart from "../charts/line";

export default {
  components: { LineChartCard },
  data() {
    return {
      datacollection: null, 
      options: {
        responsive: true
      }, 
      country: "TWN", 
      startDateMenu: false, 
      startDate: "2021-01-20", 
      endDateMenu: false, 
      today: "", 
      endDate: "", 
      countries: [
        {name: "Taiwan | 臺灣", value: "TWN"}, 
        {name: "Japan | 日本", value: "JPN"}, 
        {name: "United States | 美國", value: "USA"}, 
        {name: "Canada | 加拿大", value: "CAN"}, 
        {name: "Israel | 以色列", value: "ISR"}, 
        {name: "China | 支那", value: "CHN"}, 
        {name: "World | 世界", value: "Total"}, 
      ]
    }
  },
  created() {
    this.renderChart();
    this.today = new Date().toISOString().slice(0, 10);
    this.endDate = this.today;
  },
  watch: {
    country(){
      this.renderChart(true);
    }, 
    startDate(v){
      this.renderChart(true);
    }, 
    endDate(v){
      this.renderChart(true);
    }, 
  },
  methods: {
    async renderChart(update=false){
      const response = await this.$axios.get(`http://192.168.100.161:7590/parrot-db/get-daily/${this.country}`);

      const data = response.data;
      let confirmed = [];
      let death = [];
      let recovered = [];
      let crtical = [];
      let population = [];

      let dates = [];
      const startDate = new Date(this.startDate);
      let endDate = new Date(this.endDate);
      endDate.setDate(endDate.getDate() + 1);

      data.forEach(d => {
        if(d.data[this.country]){
          const dt = new Date(d.createdAt);
          if (dt <  startDate || dt > endDate){
            return;
          }

          dates.push(dt.toISOString().slice(0, 10))
          death.push(d.data[this.country].Deaths);
          recovered.push(d.data[this.country].Recovered);
          crtical.push(d.data[this.country]["Serious Critical"]);
          confirmed.push(d.data[this.country].Confirmed); 
          // population.push(d.data[this.country].population)
        }
      })

      const dataShow = {
        labels: dates,
        datasets: [
          {
            label: 'Confirmed',
            borderColor: '#F6E064',
            data: confirmed,
            pointRadius: 0, 
            pointHitRadius: 1000, 
          }, 
          {
            label: 'Deaths',
            borderColor: '#F66464',
            data: death,
            pointRadius: 0, 
            pointHitRadius: 1000, 
          }, 
          {
            label: 'Recovered',
            borderColor: '#92C45B',
            data: recovered,
            pointRadius: 0, 
            pointHitRadius: 1000, 
          }, 
          {
            label: 'Serious and Critical',
            borderColor: '#EC9B62',
            data: crtical,
            pointRadius: 0, 
            pointHitRadius: 1000, 
          }, 
        ]
      };

      const options = {
        type: 'line',
        data: dataShow,
        options: {}
      }
      if (update) this.$refs.chart.update( dataShow );
      else this.$refs.chart.render( {}, options );
    }
  },
};
</script>
