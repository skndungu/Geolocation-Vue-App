<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="deep-purple-text center">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center">{{feedback}}</p>
      <div class="field">
        <button class="btn deep-purple center">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      // console.log(this.email);
      // console.log(this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          // console.log(cred);
          this.$router.push({ name: "GMap" });
        })
        .catch(err => {
          this.feedback = err.message;
        });
      if (this.email && this.password) {
        this.feedback = null;
      } else {
        this.feedback = "Please fill both fields";
      }
    }
  }
};
</script>

<style>
.login {
  max-width: 400px;
  margin-top: 60px;
}

.login h2 {
  font-size: 2.4em;
}

.login .field {
  margin-bottom: 14px;
}
</style>
