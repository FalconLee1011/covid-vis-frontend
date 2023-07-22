<template>
  <v-card elevation-10>
    <v-overlay v-model="ready">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <div
      id="map"
      style="position: relative; width: 100%; height: 75vh; overflow: scroll"
    />
    <div class="caption disabled text--disabled">
      last update: {{ lastUpdate }}
    </div>
  </v-card>
</template>

<script>
/* eslint-disable no-unused-vars */
import "topojson";
import * as Datamap from "@falconlee1011/datamaps";
import apis from "@/apis/api";

export default {
  data() {
    return {
      map: undefined,
      ready: true,
      lastUpdate: 0,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    epoch2string(epoch) {
      let date = new Date(0);
      date.setUTCSeconds(epoch);
      let year = date.getFullYear();
      let month = ("0" + date.getMonth() + 1).slice(-2);
      let days = ("0" + date.getDate()).slice(-2);
      let hours = ("0" + date.getHours()).slice(-2);
      let mins = ("0" + date.getMinutes()).slice(-2);
      let secs = ("0" + date.getSeconds()).slice(-2);
      return `${month}/${days}/${year} ${hours}:${mins}:${secs}`;
    },
    async fetchData() {
      const latestData = await apis.getLatestData();
      const d = await this.cleanData(latestData.data);
      this.renderMap(d);
      this.updateColorFill(d);
      this.lastUpdate = this.epoch2string(
        parseInt(latestData.report.timeStampEpoch),
      );
    },
    updateColorFill(data) {
      var f = {};
      for (const key in data) {
        if (key == "Total") {
          continue;
        }
        f[key] = data[key].fill;
      }
      this.map.updateChoropleth(f);
    },
    reMapInt(raw_max, raw_min, new_max, new_min, now) {
      return parseInt(
        ((now - raw_min) * (new_max - new_min)) / (raw_max - raw_min) + new_min,
      );
    },
    cleanData(d) {
      for (const key in d) {
        if (key == "Total") {
          continue;
        }
        var cd = d[key];
        cd.Drate = ((cd.Deaths / cd.Confirmed) * 100).toFixed(3);
        cd.Crate = ((cd.Confirmed / d["Total"].Confirmed) * 100).toFixed(3);
        cd.CP = ((cd.Confirmed / cd.population) * 100).toFixed(5);

        var r = (
          "0" +
          this.reMapInt(
            d["Total"].Confirmed / 3,
            0,
            255,
            24,
            cd.Confirmed,
          ).toString(16)
        ).slice(-2);
        cd.fill = "#" + r + "00" + "00";
      }
      return d;
    },
    renderMap(data) {
      this.map = new Datamap({
        element: document.getElementById("map"),
        // projection: 'mercator',
        data: data,

        geographyConfig: {
          highlightBorderColor: "#fff",
          highlightFillColor: "#a55",
          borderWidth: 0.5,
          popupTemplate: function (geography, data = undefined) {
            var infowindow =
              '<div class="infoWindow" style="font-size: 120%;"><b>' +
              geography.properties.name +
              "</b>";
            if (data != undefined) {
              infowindow += "<li>Population(Approximately): " + data.population;
              infowindow += "<li>Confirmed: " + data.Confirmed;
              if (data.Crate > 0.0) {
                infowindow +=
                  "<li>Recovered: " +
                  data.Recovered +
                  " (" +
                  (
                    (parseInt(data.Recovered) / parseInt(data.Confirmed)) *
                    100
                  ).toFixed(3) +
                  "%)";
                infowindow += "<li>Confirmed / Population: " + data.CP + "%";
                infowindow +=
                  "<li>Confirmed / World Confirmed: " + data.Crate + "%";
                infowindow +=
                  "<li>Deaths: " + data.Deaths + " (" + data.Drate + "%)";
              } else {
                infowindow += "<li>Confirmed / Total: < 0.000%";
              }
            } else {
              infowindow += "<li>Confirmed: 0";
            }
            return infowindow + "</div>";
          },
          highlightBorderWidth: 0.5,
        },
        fills: {
          defaultFill: "#555",
          darkZone: "#f00",
        },
      });
      this.ready = !this.ready;
    },
  },
};
</script>

<style>
.infoWindow {
  padding: 4px;
  border-radius: 5px;
  background-color: #2222227f;
  box-shadow: 1px 1px 5px #222;
  text-shadow: 2px 2px 5px black;
  font-size: 12px;
  backdrop-filter: blur(5px);
  /* margin-left: -8rem; */
  position: relative;
  margin: auto;
}
</style>
