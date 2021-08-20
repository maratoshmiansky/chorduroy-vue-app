<template>
  <div class="chords-show">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <img v-bind:src="chord.image" class="img-fluid" alt="chord.name" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <br />
            <h3>Chord name: {{ chord.name }}</h3>
            <br />
            <form v-on:submit.prevent="createUserChord(chord)">
              <h2>Add User Chord to Catalog</h2>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter catalog name"
                  required
                  v-model="newUserChordParams.catalog"
                />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
            <br />
            <router-link to="/chords">Back to all chords</router-link>
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
      errors: [],
      chord: {},
      newUserChordParams: {},
    };
  },
  created: function () {
    axios.get("/chords/" + this.$route.params.id).then((response) => {
      this.chord = response.data;
    });
  },
  methods: {
    createUserChord: function (chord) {
      console.log("Creating that user chord!");
      this.newUserChordParams.chord_id = chord.id;
      axios.post("/user_chords", this.newUserChordParams).then((response) => {
        this.$router.push("/user_chords");
        console.log(response.data);
      });
    },
  },
};
</script>
