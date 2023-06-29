<template>
  <v-card height="15rem" width="15rem" elevation="10" class="fill-height">
    <v-card-text style=" height:70%">
      <fileIcon :file=file />
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-card-title class="justify-center" v-if="!file.fileName" style="color: #777;" >[FILE NOT EXIST]</v-card-title>
      <v-card-title class="justify-center" v-else >{{ file.fileName }}</v-card-title>
    </v-card-actions>
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
import fileIcon from './fileCardIcon'

export default {
  components: { fileIcon },
  props:{
    file:{
      type: Object,
      default: () => {
        return {
          fileName: undefined, 
          status: "REDACTED", 
          photo: undefined, 
          icon: undefined, 
        }
      }
    }
  },
  data(){
    return{}
  },
  computed: {},
  mounted() { 
  },
  methods: {
  },
}
</script>
