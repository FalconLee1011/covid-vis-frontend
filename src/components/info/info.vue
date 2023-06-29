<template>
  <v-container
    fluid
    max-width=90%
  >
    <v-card>
      <v-card-title primary-title>
        DATABASE
      </v-card-title>
      <v-card-text>
        <v-row>
          <div v-for="(file, index) in files" :key="index">
            <fileCard 
              :file=file
            />
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

import numPad from "@/components/charts/numPad";
import datePad from "@/components/charts/datePad";
import fileCard from "@/components/filemanager/fileCard";
import filePreview from "@/components/filemanager/filePreview";

export default {
  components: { numPad, datePad, fileCard, filePreview },  
  data() {
    return {
      files: [
        {
          fileName: "briefing",
          status: "VIEW", 
          photo: undefined, 
          icon: undefined, 
        },
        {}
      ],
    }
  },
}
</script>
