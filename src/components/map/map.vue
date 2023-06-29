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
          <v-tab-item> <mapItself /> </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import mapItself from './mapItself';

export default {
  components: { mapItself }, 
  mounted() {
  },
}
</script>