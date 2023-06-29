<template>
  <v-container
    fluid
    max-width=90%
  >
    <v-card height=90vh>
      <v-card-title primary-title>The Map</v-card-title>
      <v-card-text>
        <v-tabs>
          <v-tab>WORLD</v-tab>
          <v-tab>TAIWAN</v-tab>
          <v-tab>3D</v-tab>
          <v-tab-item> <mapItself /> </v-tab-item>
          <v-tab-item> <mapItselfTW /> </v-tab-item>
          <v-tab-item> <mapItselfCesium /> </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import mapItself from './mapItself';
import mapItselfTW from './mapItselfTW';
import mapItselfCesium from './mapItselfCesium';

export default {
  components: { mapItself, mapItselfTW, mapItselfCesium }, 
  mounted() {
  },
}
</script>