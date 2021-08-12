<template>
  <div class="chords-show">
    <div class="container">
      <h2>Name: {{ chord.name }}</h2>
      <img v-bind:src="chord.image" alt="chord.name" />
      <p>Root: {{ chord.chord_root }}</p>
      <p>Alteration: {{ chord.alteration }}</p>
      <p>Quality: {{ chord.quality }}</p>
      <p>Option: {{ chord.option }}</p>
      <!-- <router-link v-bind:to="`/chords/${chord.id}/edit`"><button>Edit Chord</button></router-link> -->
      <router-link to="/chords">Back to all chords</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      chord: {},
    };
  },
  created: function () {
    axios.get("/chords/" + this.$route.params.id).then((response) => {
      this.chord = response.data;
    });
  },
};
</script>
