<template>
  <div class="signup">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <!-- <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100"></div> -->
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <form v-on:submit.prevent="submit()">
              <h3>Signup</h3>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="col-md-6 form-group">
                <input type="text" class="form-control" placeholder="Name" required v-model="newUserParams.name" />
              </div>
              <div class="col-md-6 form-group">
                <input type="email" class="form-control" placeholder="Email" required v-model="newUserParams.email" />
              </div>
              <div class="col-md-6 form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                  v-model="newUserParams.password"
                />
              </div>
              <div class="col-md-6 form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm password"
                  required
                  v-model="newUserParams.password_confirmation"
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
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
