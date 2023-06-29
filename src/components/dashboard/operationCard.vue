<template>
  <v-card>
    <v-card-subtitle>
      OPERATION STATISTICS
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <datePad :modeSelect="`clock`" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <datePad />
        </v-col>
        <v-col>
          <numPad 
            :data=DEFCON
            :title="`DEFCON`"
            :subtitle="`行動層級`"
            :unit="``"
          />
        </v-col>
        <v-col>
          <numPad 
            :data=Progress
            :title="`Progress`"
            :subtitle="`行動進度`"
            :unit="`%`"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import numPad from "@/components/charts/numPad";
import datePad from "@/components/charts/datePad";

export default {
  components: { numPad, datePad },  
  data() {
    return {
      DEFCON: 4,
      Progress: 30,
    }
  },
}
</script>
