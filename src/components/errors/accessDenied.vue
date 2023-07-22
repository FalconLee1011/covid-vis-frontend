<template>
  <v-container fluid max-width="90%">
    <v-card height="90vh">
      <v-card-title primary-title> </v-card-title>
      <v-card-text style="height: 90%">
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" align="center">
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
export default {
  mounted() {
    this.deny();
  },
  methods: {
    deny() {
      this.$swal({
        icon: "error",
        title: "Access Denied",
        text: "You do not have permission to view this imformation.",
        showConfirmButton: false,
      });
    },
  },
};
</script>
