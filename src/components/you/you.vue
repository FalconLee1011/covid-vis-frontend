<template>
  <v-container
    fluid
    max-width=90%
  >
    <v-card>
      <v-card-title primary-title>
        OPERATION STATISTICS
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <datePad />
          </v-col>
          <v-col>
            <numPad 
              :data=1000
              :unit="`times`"
            />
          </v-col>
          <v-col>
            <numPad 
              :data=492
              :unit="`one`"
            />
          </v-col>
          <v-col>
            <numPad 
              :data=931
              :unit="`one`"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import numPad from "@/components/charts/numPad";
import datePad from "@/components/charts/datePad";

export default {
  components: { numPad, datePad },  
}
</script>
