<template>
  <v-container
    fluid
    max-width=90%
  >
    <v-card>
      <v-card-title primary-title>
        DASHBOARD
      </v-card-title>
      <v-card-text>
        <operationCard v-if="auth" />
        <overView />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import numPad from "@/components/charts/numPad";
// import datePad from "@/components/charts/datePad";
import operationCard from "./operationCard";
import overView from "./overViewCart";

export default {
  components: { operationCard, overView },  
  created() {
    this.transition();
  },
  data() {
    return {
      auth: false,
    }
  },
  methods: {
    transition(){
      const els = document.querySelectorAll(".v-card");
      els.forEach((element, index) => {
        const originalStyle = element.getAttribute("style");
        const offset = index * 0.2;
        element.setAttribute("style", `${originalStyle} transition-delay: ${offset}s;`)
        const originalClass = element.getAttribute("class");
        element.setAttribute("class", `${originalClass} t`)
      });
    }
  },
}
</script>

<style>
.t{
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-fill-mode: both;
  transition: 0.2s;
}
@keyframes fadeIn {
  0%{ opacity: 0; }
  100%{ opacity: 1; }
}
</style>
