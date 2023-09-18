<template>
  <v-card height="10.75rem" elevation="10" @click="switchMode">
    <v-card-title v-if="mode == 'clock'">Clock</v-card-title>
    <v-card-title v-else>{{ title }}</v-card-title>
    <v-card-subtitle v-if="mode == 'clock'">現在時刻</v-card-subtitle>
    <v-card-subtitle v-else>{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      <div class="info-area">
        <!-- <span class="hightlight primary--text"> -->
        <!-- <span id="count" v-if="!countUp">{{data}}</span> -->
        <div v-if="mode == 'countUp'">
          <span class="hightlight primary--text">{{ days }}</span
          ><span class="unit">日</span>
          <span class="hightlight primary--text">{{ hours }}</span
          ><span class="unit">時</span>
          <span class="hightlight primary--text">{{ mins }}</span
          ><span class="unit">分</span>
          <span class="hightlight primary--text">{{ secs }}</span
          ><span class="unit">秒</span>
        </div>
        <div v-if="mode == 'static'" v-html="epochConverter2Date(data)" />
        <div v-if="mode == 'clock'">
          <span class="hightlight primary--text">{{ year }}</span
          ><span class="unit">年</span>
          <span class="hightlight primary--text">{{ month }}</span
          ><span class="unit">月</span>
          <span class="hightlight primary--text">{{ days }}</span
          ><span class="unit">日</span>
          <span class="hightlight primary--text">{{ hours }}</span
          ><span class="unit">時</span>
          <span class="hightlight primary--text">{{ mins }}</span
          ><span class="unit">分</span>
          <span class="hightlight primary--text">{{ secs }}</span
          ><span class="unit">秒</span>
        </div>
        <!-- </span> -->
      </div>
    </v-card-text>
    <v-card-actions />
  </v-card>
</template>

<style>
.info-area {
  margin-top: 1rem;
  text-align: center;
}
.hightlight {
  /* color: #50bcff; */
  font-size: 400%;
}
.hightlight-small {
  /* color: #50bcff; */
  font-size: 280%;
}
.unit {
  font-size: 200%;
}
.unit-small {
  font-size: 110%;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    // subtitle:{
    //   type: String,
    //   default: "date card"
    // },
    subtitles: {
      type: Array,
      default: () => {
        return ["行動已啟動", "行動啟動日期"];
      },
    },
    data: {
      default: 1610831300,
    },
    unit: {
      default: "%",
    },
    countUp: {
      default: true,
    },
    clickable: {
      default: true,
    },
    modeSelect: {
      default: "countUp",
    },
  },
  data() {
    return {
      countedData: 0,
      year: 0,
      month: 0,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      mode: "countUp",
      timeinterval: undefined,
      modes: ["countUp", "static"],
      subtitle: this.subtitles[0],
    };
  },
  beforeMount() {
    this.mode = this.modeSelect;
  },
  mounted() {
    if (this.mode == "countUp") {
      // await this.animateValue(0, this.data, 1000);
      this.timeinterval = setInterval(() => {
        this.epochConverter(this.data);
      }, 1000);
    } else if (this.mode == "clock") {
      this.timeinterval = setInterval(() => {
        this.clock();
      }, 1000);
    }
  },
  watch: {
    data(v){
      this.convert(v);
    }
  },
  methods: {
    switchMode() {
      if (!this.clickable) return;
      switch (this.modes.indexOf(this.mode)) {
        case 0:
          this.mode = this.modes[1];
          this.subtitle = this.subtitles[1];
          break;
        case 1:
          this.mode = this.modes[0];
          this.subtitle = this.subtitles[0];
          break;
        default:
          break;
      }
    },
    epochConverter2Date(epoch) {
      let date = new Date(0);
      date.setUTCSeconds(epoch);
      const year = date.getFullYear();
      const month = ("0" + date.getMonth() + 1).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      return `
        <span class="hightlight-small primary--text">${year}</span><span class="unit-small">年</span>
        <span class="hightlight-small primary--text">${month}</span><span class="unit-small">月</span>
        <span class="hightlight-small primary--text">${day}</span><span class="unit-small">日</span>
        <span class="hightlight-small primary--text">${hours}</span><span class="unit-small">時</span>
        <span class="hightlight-small primary--text">${minutes}</span><span class="unit-small">分</span>
      `;
    },
    clock() {
      let date = new Date();
      this.year = date.getFullYear();
      this.month = ("0" + date.getMonth() + 1).slice(-2);
      this.days = ("0" + date.getDate()).slice(-2);
      this.hours = ("0" + date.getHours()).slice(-2);
      this.mins = ("0" + date.getMinutes()).slice(-2);
      this.secs = ("0" + date.getSeconds()).slice(-2);
    },
    epochConverter(epoch) {
      let date = new Date(0);
      date.setUTCSeconds(epoch);
      // this.year = date.getFullYear();
      // this.month = ("0" + date.getMonth() + 1).slice(-2);
      // this.day = ("0" + date.getDate()).slice(-2);
      // this.hours = ("0" + date.getHours()).slice(-2);
      // this.minutes = ("0" + date.getMinutes()).slice(-2);

      let now = Math.round(Date.now() / 1000);
      // let timeDifference = (now - date);
      let timeDifference = parseInt(now) - parseInt(epoch);

      let secondsInADay = 60 * 60 * 24,
        secondsInAHour = 60 * 60;

      this.days = Math.floor((timeDifference / secondsInADay) * 1);
      this.hours = Math.floor(
        ((timeDifference % secondsInADay) / secondsInAHour) * 1,
      );
      this.mins = Math.floor(
        (((timeDifference % secondsInADay) % secondsInAHour) / 60) * 1,
      );
      this.secs = Math.floor(
        ((timeDifference % secondsInADay) % secondsInAHour) % 60,
      );
      // const seconds = date.getSeconds();
      // return `${year}/${month}/${day} ${hours}:${minutes}`;
    },
    animateValue(start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // obj.innerHTML = Math.floor(progress * (end - start) + start);
        this.countedData = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
};
</script>
