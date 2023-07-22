<template>
  <v-container fluid max-width="90%">
    <v-card>
      <v-card-title primary-title> OPERATION STATISTICS </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <datePad
              title="System initialized for"
              :subtitles="['系統已啟動', '系統啟動自']"
            ></datePad>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <v-card elevation-10>
                  <v-card-title primary-title> About </v-card-title>
                  <v-card-text>
                    <h2>關於這個專案</h2>
                    <v-divider class="my-2"></v-divider>
                    <p>
                      This version of COVID-19 dashboard starts from a drunk
                      night at 2021-01-17.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import datePad from "@/components/charts/datePad";

export default {
  components: { datePad },
};
</script>
