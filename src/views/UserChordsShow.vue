<template>
  <div class="userchords-show">
    <div class="container">
      <p>User ID: {{ user_chord.user_id }}</p>
      <p>Chord ID: {{ user_chord.chord_id }}</p>
      <p>Catalog: {{ user_chord.catalog }}</p>
      <!-- <router-link v-bind:to="`/user_chords/${user_chord.id}/edit`"><button>Edit User Chord</button></router-link> -->
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
};
</script>
