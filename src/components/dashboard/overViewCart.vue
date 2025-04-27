<template>
  <v-card>
    <!-- <v-overlay>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay> -->
    <v-card-subtitle> WORLD STATISTICS </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <toggleNumPad
            :data="TaiwanConfirmed"
            :title="`Taiwan Confirmed`"
            :subtitle="`臺灣確診案例`"
            :subData="{
              commas: true,
              data: TaiwanConfirmedUpdate,
              unit: 'Cases(new)',
            }"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <numPad
            :data="TaiwanRecovered"
            :title="`Taiwan Recovered`"
            :subtitle="`臺灣復原案例`"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <toggleNumPad
            :data="TaiwanDeaths"
            :title="`Taiwan Deaths`"
            :subtitle="`台灣死亡案例`"
            :subData="{
              commas: true,
              data: TaiwanDeathsUpdate,
              unit: 'Cases(new)',
            }"
            :unit="`Cases`"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <toggleNumPad
            :data="WorldConfirmed"
            :title="`World Confirmed`"
            :subtitle="`全球確診案例`"
            :subData="{
              commas: true,
              data: WorldConfirmedUpdate,
              unit: 'Cases(new)',
            }"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <numPad
            :data="WorldRecovered"
            :title="`World Recovered`"
            :subtitle="`全球復原案例`"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <toggleNumPad
            :data="WorldDeaths"
            :title="`World Deaths`"
            :subtitle="`全球死亡案例`"
            :subData="{
              commas: true,
              data: WorldDeathsUpdate,
              unit: 'Cases(new)',
            }"
            :unit="`Cases`"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <datePadStatic
            :title="`Last update`"
            :subtitle="`資料更新時間`"
            :data="lastUpdate"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import numPad from "@/components/charts/numPad";
import toggleNumPad from "@/components/charts/toggleNumPad";
import datePadStatic from "@/components/charts/datePad-static";
import apis from "@/apis/api";

export default {
  components: { numPad, datePadStatic, toggleNumPad },
  data() {
    return {
      // STATIC
      TaiwanConfirmed: 0,
      TaiwanRecovered: 0,
      TaiwanDeaths: 0,
      WorldConfirmed: 0,
      WorldRecovered: 0,
      WorldDeaths: 0,
      // UPDATES
      TaiwanConfirmedUpdate: 0,
      TaiwanRecoveredUpdate: 0,
      TaiwanDeathsUpdate: 0,
      WorldConfirmedUpdate: 0,
      WorldRecoveredUpdate: 0,
      WorldDeathsUpdate: 0,

      ready: false,
      lastUpdate: 1696032000,
    };
  },
  async created() {
    await this.fetchData();
    this.ready = true;
  },
  methods: {
    async fetchData() {
      const latestData = await apis.getLatestData();

      this.TaiwanConfirmed = latestData.data.TWN.Confirmed;
      this.TaiwanRecovered = latestData.data.TWN.Recovered;
      this.TaiwanDeaths = latestData.data.TWN.Deaths;

      this.WorldConfirmed = latestData.data.Total.Confirmed;
      this.WorldRecovered = latestData.data.Total.Recovered;
      this.WorldDeaths = latestData.data.Total.Deaths;

      this.TaiwanConfirmedUpdate = "-";
      this.TaiwanDeathsUpdate = "-";
      this.WorldConfirmedUpdate = "-";
      this.WorldDeathsUpdate = "-";

      // this.lastUpdate = parseInt(latestData.report.timeStampEpoch);
    },
  },
};
</script>
