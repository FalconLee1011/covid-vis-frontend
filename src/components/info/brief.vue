<template>
  <v-container
    fluid
    max-width=90%
  >
    <v-card>
      <v-card-title primary-title>
        BRIEF
        <v-btn class="ml-5" x-small outlined color="success" @click="toggle">toggle</v-btn>
      </v-card-title>
      <v-card-text>
        <v-container max-width=50%>
          <v-timeline>
            <!-- @click.native.stop="show(index)" -->
            <v-timeline-item v-for="(time, index) in timeline" :key="index" :color="(time.timestamp != -1) ? 'green' : '#555'" :class="{'text-right': (index % 2 == 0)}" class="hover">
              <div :class="(showcard[index]) ? 't' : 'n' ">
                <v-card class="text-left">
                  <v-card-title primary-title>
                    {{time.event}}
                  </v-card-title>
                  <v-card-subtitle v-if="time.timestamp != -1">
                    <v-chip v-if="time.ongoing" class="mr-1" label outlined small color="blue">
                      <v-progress-circular indeterminate color="blue" class="mr-2" size=12 width="2"></v-progress-circular>
                      進行中
                    </v-chip>
                    <v-chip label outlined small color="red">
                      Initiated
                    </v-chip>
                  {{epochConverter2DateString(time.timestamp)}}</v-card-subtitle>
                  <v-card-subtitle v-else>
                    <v-chip v-if="time.ongoing" class="mr-1" label outlined small color="blue">
                      <v-progress-circular indeterminate color="blue" class="mr-2" size=12 width="2"></v-progress-circular>
                      進行中
                    </v-chip>
                    <v-chip v-if="time.ready" label outlined small color="green">
                      <v-icon small>mdi-close</v-icon>
                      Ready
                    </v-chip>
                    <v-chip v-else-if="!time.ready" label outlined small color="orange">
                      <v-icon class="mr-2" small>mdi-alert-outline</v-icon>
                      NOT Ready
                    </v-chip>
                  </v-card-subtitle>
                  <v-card-text>
                    <ul>
                      <li v-for="(item, index) in time.descriptions" :key="`${time.event}_${index}`">
                        {{item}}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.n{
  height: 0px;
  visibility: hidden;
  transition: 0.2s;
}
.t{
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-direction: alternate;
  animation-fill-mode: both;
  transition: 0.2s;
}
.hover{ transition: 0.6s; }
.hover:hover{
  cursor: pointer;
  filter: brightness(1.2);
  transition: 0.6s;
}
@keyframes fadeIn {
  0%{ opacity: 0; }
  100%{ opacity: 1; }
}
</style>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

export default {
  data() {
    return {
      timeline:[
        {
          event: "Origin", 
          timestamp: 1610831300, 
          ready: true,
          ongoing: false, 
          descriptions: []
        },
        {
          event: "DEFCON 5", 
          timestamp: 1610831300, 
          ready: true,
          ongoing: false, 
          descriptions: [
            "計畫準備前期", 
            "社區感染可能性", 
            "無大規模感染跡象", 
            "防疫物資清點與取得", 
            "戰備物資清點與取得", 
            "備戰狀態", 
          ]
        },
        {
          event: "DEFCON 4", 
          timestamp: 1611321978, 
          ready: true, 
          ongoing: true,
          descriptions: [
            "社區感染發生", 
            "小規模群聚感染跡象", 
            "防疫物資清點與取得(每週)", 
            "戰備物資清點與取得(每週)", 
            "實施安全性措施", 
          ]
        },
        {
          event: "DEFCON 3", 
          timestamp: -1, 
          ready: false, 
          ongoing: false,
          descriptions: [
            "社區感染發生", 
            "小規模群聚感染發生", 
            "可能發生物資搶奪", 
            "防疫物資清點(每5日)", 
            "戰備物資清點(每5日)", 
            "實施安全性措施", 
            "非必要不出門",
          ]
        },
        {
          event: "DEFCON 2", 
          timestamp: -1, 
          ready: false, 
          ongoing: false,
          descriptions: [
            "社區感染發生", 
            "中等規模群聚感染跡象", 
            "可能發生小規模秩序問題", 
            "防疫物資清點(每日)", 
            "非必要不出門",
            "實施高度安全性措施",
          ]
        },
        {
          event: "DEFCON 1", 
          timestamp: -1, 
          ready: false, 
          ongoing: false,
          descriptions: [
            "社區感染發生", 
            "中等或以上規模群聚感染發生", 
            "可能發生大規模秩序問題", 
            "政府介入",
            "封城、緊急命令等措施發布",
            "不出門",
            "戰備物資清點(每日)", 
            "實施高度安全性措施",
          ]
        },
      ],
    }
  },
  computed: {
    showcard(){
      return [
        // false, false, false, false, false, false
        true, true, true, true, true, true
      ]
    }
  },
  methods: {
    show(index){
      for (let idx = 0; idx < this.showcard.length; idx++) { this.showcard[idx] = false; }
      this.showcard[index] = !this.showcard[index];
      this.$forceUpdate();
    },
    toggle(){
      for (let idx = 0; idx < this.showcard.length; idx++) { this.showcard[idx] = !this.showcard[idx]; }
      this.$forceUpdate();
    },
    epochConverter2DateString(epoch){
      let date = new Date(0);
      date.setUTCSeconds(epoch);
      const year = date.getFullYear();
      const month = ("0" + date.getMonth() + 1).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      return `${year}/${month}/${day} ${hours}:${minutes}`;
    },
  },
}
</script>
