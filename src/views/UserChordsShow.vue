<template>
  <div class="userchords-show">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <img v-bind:src="user_chord.chord.image" alt="user_chord.chord.name" />
            <br />
            <br />
            <h2>Chord: {{ user_chord.chord.name }}</h2>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <h3>Catalog: {{ user_chord.catalog }}</h3>
            <br />
            <button v-on:click="destroyUserChord()">Delete User Chord</button>
            <br />
            <br />
            <router-link to="/user_chords">Back to all User Chords</router-link>
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
      user_chord: {},
    };
  },
  created: function () {
    axios.get("/user_chords/" + this.$route.params.id).then((response) => {
      this.user_chord = response.data;
    });
  },
  methods: {
    destroyUserChord: function () {
      axios.delete(`/user_chords/${this.$route.params.id}`).then((response) => {
        console.log("User chord deleted!", response.data);
        this.$router.push("/user_chords");
      });
    },
  },
};
</script>
