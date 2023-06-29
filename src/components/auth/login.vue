<template>
  <v-container class="fill-height" fluid>
    <div class="vid-container">
      <video ref="bg-video" src="@/assets/background-1080.mp4" autoplay muted loop></video>
    </div>
    <v-row class="z1" align="center" justify="center">
      <v-col cols="10" sm="6" md="3">
        <v-expand-transition>
          <v-card v-if="!loginInProgress" class="py-9 px-2 floating-window" elevation-20>
            <v-card-title primary-title>Covid Vis</v-card-title>
            <v-card-subtitle>The Portal</v-card-subtitle>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field 
                  label="ID" 
                  :rules="[v => !!v || 'Access ID is required.']"
                  v-model="account" 
                />
                <v-text-field 
                  label="Passphrase" 
                  :rules="[v => !!v || 'Passphrase is required.']"
                  :type="showPass ? 'text' : 'password'"
                  v-model="pass" 
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="showPass = !showPass"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="login" outlined color="success">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
        <!-- <v-expand-transition> -->
          <v-card v-if="loginInProgress" class="py-9 px-2 floating-window" elevation-20>
            <v-card-text align="center" justify="center">
              <v-progress-circular size="100" width="5" indeterminate color="primary"></v-progress-circular>
            </v-card-text>
          </v-card>
        <!-- </v-expand-transition> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPass: false, 
      account: "",
      pass: "",
      loginInProgress: false,
    }
  },
  methods: {
    login(){
      if(!this.$refs.form.validate()) return;
      this.loginInProgress = true;
      // this.$router.push("/")
      // this.$store.dispatch("setToken", {id: res.data.token, account: res.data.account.account})
    }
  },
  mounted() {
    this.$refs["bg-video"].play();
  },
}
</script>

<style scoped>
  .vid-container{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%; 
    overflow: hidden;
  }
  .vid-container video {
    min-width: 100%; 
    min-height: 100%; 
    width: auto;
    height: auto;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
  }

  .z1{
    z-index: 1;
  }
  .floating-window{
    background: #36363656;
    backdrop-filter: blur(4px);
  }
</style>