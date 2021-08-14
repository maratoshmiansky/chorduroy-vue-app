<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="chord in chords" v-bind:key="chord.id">
      <h2>Chord: {{ chord.name }}</h2>
      <img v-bind:src="chord.image" alt="chord.name" />
      <!-- <p>Root: {{ chord.chord_root }}</p>
      <p>Alteration: {{ chord.alteration }}</p>
      <p>Quality: {{ chord.quality }}</p>
      <p>Option: {{ chord.option }}</p> -->
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to chorduroy-vue-app!",
      chords: [],
    };
  },
  created: function () {
    this.indexChords();
  },
  methods: {
    indexChords: function () {
      axios.get("/chords").then((response) => {
        this.chords = response.data;
        console.log("All chords:", this.chords);
      });
    },
  },
};
</script>
