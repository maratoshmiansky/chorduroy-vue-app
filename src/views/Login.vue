<template>
  <div class="login">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <!-- <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100"></div> -->
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <form v-on:submit.prevent="submit()">
              <h3>Login</h3>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="col-md-6 form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                  v-model="newSessionParams.email"
                />
              </div>
              <div class="col-md-6 form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                  v-model="newSessionParams.password"
                />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
