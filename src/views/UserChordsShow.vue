<template>
  <div class="userchords-show">
    <div class="container">
      <p>User ID: {{ user_chord.user_id }}</p>
      <p>Chord ID: {{ user_chord.chord_id }}</p>
      <h2>Catalog: {{ user_chord.catalog }}</h2>
      <h2>Chord name: {{ user_chord.chord.name }}</h2>
      <img v-bind:src="user_chord.chord.image" alt="user_chord.chord.name" />
      <p>Root: {{ user_chord.chord.chord_root }}</p>
      <p>Alteration: {{ user_chord.chord.alteration }}</p>
      <p>Quality: {{ user_chord.chord.quality }}</p>
      <p>Option: {{ user_chord.chord.option }}</p>
      <!-- <router-link v-bind:to="`/user_chords/${user_chord.id}/edit`"><button>Edit User Chord</button></router-link> -->
      <button v-on:click="destroyUserChord()">Delete User Chord</button>
      <br />
      <router-link to="/user_chords">Back to all user chords</router-link>
    </div>
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
