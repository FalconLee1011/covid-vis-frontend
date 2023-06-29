<template>
  <v-card height="10.75rem" elevation="10">
    <v-card-title>{{title}}</v-card-title>
    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
    <v-card-text>
      <div class="info-area">
        <span class="hightlight primary--text">{{year}}</span><span class="unit">年</span>
        <span class="hightlight primary--text">{{month}}</span><span class="unit">月</span>
        <span class="hightlight primary--text">{{days}}</span><span class="unit">日</span>
        <span class="hightlight primary--text">{{hours}}</span><span class="unit">時</span>
        <span class="hightlight primary--text">{{mins}}</span><span class="unit">分</span>
        <span class="hightlight primary--text">{{secs}}</span><span class="unit">秒</span>
      </div>
    </v-card-text>
    <v-card-actions />
  </v-card>
</template>

<style>
.info-area{
  margin-top: 1rem;
  text-align: center;
}
.hightlight{
  /* color: #50bcff; */
  font-size: 400%;
}
.hightlight-small{
  /* color: #50bcff; */
  font-size: 280%;
}
.unit{
  font-size: 200%;
}
.unit-small{
  font-size: 110%;
}
</style>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "Title"
    },
    subtitle:{
      type: String,
      default: "date card"
    },
    data:{
      default: 1610831300
    },
    unit:{
      default: "%"
    },
    countUp:{
      default: true,
    },
    clickable:{
      default: true,
    },
    modeSelect:{
      default: 'countUp',
    }
  },
  data(){
    return{
      countedData: 0,
      year: 0, 
      month: 0, 
      days: 0, 
      hours: 0, 
      mins: 0, 
      secs: 0, 
      mode: 'countUp', 
      timeinterval: undefined,
      modes: ['countUp', 'static'],
    }
  },
  mounted() { 
    this.convert(this.data);
  },
  methods: {
    convert(epoch){
      console.log(epoch);
      let date = new Date(0);
      date.setUTCSeconds(epoch);
      console.log(date);
      this.year = date.getFullYear();
      this.month = ("0" + parseInt(date.getMonth() + 1)).slice(-2);
      this.days = ("0" + date.getDate()).slice(-2);
      this.hours = ("0" + date.getHours()).slice(-2);
      this.mins = ("0" + date.getMinutes()).slice(-2);
      this.secs = ("0" + date.getSeconds()).slice(-2);
    },
  },
}
</script>
