<template>
  <v-card height="10.75rem" elevation="10">
    <v-card-title>{{title}}</v-card-title>
    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
    <v-card-text>
      <div class="info-area">
        <span class="hightlight">
          <span class="primary--text" id="count" v-if="!countUp">{{data}}</span>
          <!-- <span id="count">{{countedData}}</span> -->
          <span class="primary--text" v-else>{{countedData}}</span>
        </span>
        <span class="unit">{{unit}}</span>
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
  color: #50bcff;
  font-size: 400%;
}
.unit{
  font-size: 200%;
}
</style>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "title"
    },
    subtitle:{
      type: String,
      default: "&ensp;"
    },
    data:{
      default: 100
    },
    unit:{
      default: "%"
    },
    countUp:{
      default: true,
    }
  },
  data(){
    return{
      countedData: 0,
    }
  },
  mounted() { 
    this.animateValue(0, this.data, 600);
  },
  methods: {
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
    }
  },
}
</script>
