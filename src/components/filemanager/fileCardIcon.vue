<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols=12 align="center">
        <!-- <v-chip class="px-3 py-3" v-if="icon == 'loading'" label outlined color="white">
          <v-progress-circular class="mx-3" indeterminate color="white" size=15 width="2"></v-progress-circular>
            LOADING
          <v-progress-circular class="mx-3" indeterminate color="white" size=15 width="2"></v-progress-circular>
        </v-chip> -->
        <!-- <v-img v-else-if="icon == 'none'" label outlined color="red">

        </v-img> -->
        <v-chip label outlined :color="ICONS[fileStatus].color">
          <v-icon class="mr-2 ml-2">{{ICONS[fileStatus].icon}}</v-icon>
            {{fileStatus}}
          <v-icon class="mr-2 ml-2">{{ICONS[fileStatus].icon}}</v-icon>
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
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
    status:{
      type: String,
      default: undefined
    },
    file:{
      type: Object,
      default: () => {
        return {
          fileName: "[REDACTED]", 
          status: "REDACTED", 
          photo: undefined, 
          icon: undefined, 
        }
      }
    }
  },
  data(){
    return{
      ICONS: {
        REDACTED: {
          icon: "mdi-close",
          color: "red", 
        }, 
        CLASSIFIED: {
          icon: "mdi-alert-outline",
          color: "yellow", 
        }, 
        NOIMAGE: {
          icon: "mdi-image-off-outline",
          color: "green", 
        }, 
        VIEW: {
          icon: "mdi-lock-open-outline",
          color: "green", 
        }, 
      },
    }
  },
  computed: {
    fileStatus(){
      if(this.file.status) return this.file.status;
      else return "CLASSIFIED";
    },
  },
  mounted() { 
    if(!this.file.photo) return 'none';
    // else if (true) {}
  },
  methods: {
  },
}
</script>
