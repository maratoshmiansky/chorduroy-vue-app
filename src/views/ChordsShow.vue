<template>
  <div class="chords-show">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <img v-bind:src="chord.image" class="img-fluid" alt="chord.name" />
            <br />
            <br />
            <h3>Chord: {{ chord.name }}</h3>
            <br />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <form v-on:submit.prevent="createUserChord(chord)">
              <h2>Add Chord to Catalog</h2>
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
              <input class="input" type="submit" value="Submit" />
            </form>
            <br />
            <router-link class="link" to="/chords">Back to Chord Library</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.input {
  border: 2px solid;
  border-radius: 8px;
  color: rgb(119, 0, 255);
  background-color: rgb(255, 226, 97);
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.input:hover {
  background-color: rgb(252, 245, 151);
}

.link {
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px rgb(119, 0, 255);
}
</style>

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
