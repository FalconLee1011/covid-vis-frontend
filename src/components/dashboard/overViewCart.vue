<template>
  <v-card v-if=ready>
    <v-overlay v-if="!ready">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <v-card-subtitle>
      WORLD STATISTICS
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <toggleNumPad 
            :data=TaiwanConfirmed
            :title="`Taiwan Confirmed`"
            :subtitle="`臺灣確診案例`"
            :subData="{ commas: true,  data: TaiwanConfirmedUpdate,  unit: 'Cases(new)' }"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <numPad 
            :data=TaiwanRecovered
            :title="`Taiwan Recovered`"
            :subtitle="`臺灣復原案例`"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <toggleNumPad
            :data=TaiwanDeaths
            :title="`Taiwan Deaths`"
            :subtitle="`台灣死亡案例`"
            :subData="{ commas: true,  data: TaiwanDeathsUpdate,  unit: 'Cases(new)' }"
            :unit="`Cases`"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <toggleNumPad 
            :data=WorldConfirmed
            :title="`World Confirmed`"
            :subtitle="`全球確診案例`"
            :subData="{ commas: true,  data: WorldConfirmedUpdate,  unit: 'Cases(new)' }"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <numPad 
            :data=WorldRecovered
            :title="`World Recovered`"
            :subtitle="`全球復原案例`"
            :unit="`Cases`"
          />
        </v-col>
        <v-col>
          <toggleNumPad 
            :data=WorldDeaths
            :title="`World Deaths`"
            :subtitle="`全球死亡案例`"
            :subData="{ commas: true,  data: WorldDeathsUpdate,  unit: 'Cases(new)' }"
            :unit="`Cases`"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <datePadStatic :title="`Last update`" :subtitle="`資料更新時間`" :data=lastUpdate />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import numPad from "@/components/charts/numPad";
import toggleNumPad from "@/components/charts/toggleNumPad";
import datePadStatic from "@/components/charts/datePad-static";
// import datePad from "@/components/charts/datePad";

const parrotAPI = "/parrot";

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
      lastUpdate: 0,
    }
  },
  async created(){
    await this.fetchData();
    await this.fetchData();
    this.ready = true
  },
  methods: {
    async fetchData(){
      let res = await this.$axios.get(`${parrotAPI}/get?country=taiwan`);
      this.TaiwanConfirmed = res.data.data.Confirmed;
      this.TaiwanRecovered = res.data.data.Recovered;
      this.TaiwanDeaths = res.data.data.Deaths;
      this.TaiwanConfirmedUpdate = res.data.data["New Cases"];
      // TaiwanRecoveredUpdate
      this.TaiwanDeathsUpdate = res.data.data["New Deaths"];
      res = await this.$axios.get(`${parrotAPI}/get-total`);
      this.WorldConfirmed = res.data.data.Confirmed;
      this.WorldRecovered = res.data.data.Recovered;
      this.WorldDeaths = res.data.data.Deaths;
      this.WorldConfirmedUpdate = res.data.data["New Cases"];
      // WorldRecoveredUpdate
      this.WorldDeathsUpdate = res.data.data["New Deaths"];
      res = await this.$axios.get(`${parrotAPI}/get-data-report`);
      console.log(res);
      this.lastUpdate = parseInt(res.data.timeStampEpoch);
    }
  },
}
</script>
