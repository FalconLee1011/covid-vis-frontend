<template>
  <v-container
    fluid
    max-width=90%
  >
    <v-card height=75vh>
      <v-card-title primary-title>
      </v-card-title>
      <v-card-text style="height: 90%">
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols=12 align="center">
              <v-chip class="px-16" label outlined color="red" x-large>
                <v-icon class="mr-16 ml-16" x-large>mdi-alert-outline</v-icon>
                  CLASSIFIED
                <v-icon class="mr-16 ml-16" x-large>mdi-alert-outline</v-icon>
              </v-chip>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import 'topojson';
import * as Datamap from 'datamaps';

export default {
  mounted() {
    this.map = new Datamap(
      {
        element: document.getElementById("map"),
        // projection: 'mercator',

        geographyConfig: {
          highlightBorderColor: '#fff',
          highlightFillColor: '#a55',
          borderWidth: 0.5,
          popupTemplate: function (geography, data = undefined) {
            var infowindow = '<div class="infoWindow" style="font-size: 120%;"><b>' + geography.properties.name + '</b>';
            if (data != undefined) {
              infowindow += "<li>Population(Approximately): " + data.population;
              infowindow += "<li>Confirmed: " + data.Confirmed;
              if (data.Crate > 0.000) {
                infowindow += "<li>Recovered: " + data.Recovered + " (" + (parseInt(data.Recovered) / parseInt(data.Confirmed) * 100).toFixed(3) + "%)";
                infowindow += "<li>Confirmed / Population: " + data.CP + "%";
                infowindow += "<li>Confirmed / World Confirmed: " + data.Crate + "%";
                infowindow += "<li>Deaths: " + data.Deaths + " (" + data.Drate + "%)";
              }
              else { infowindow += "<li>Confirmed / Total: < 0.000%"; }
            } else {
              infowindow += "<li>Confirmed: 0";
            }
            return infowindow + "</div>";
          },
          highlightBorderWidth: 0.5
        },
        fills: {
          defaultFill: "#555",
          'darkZone': "#f00"
        },
      }
    );
  },
}
</script>