<template>
  <div class="home">
    <br />
    <br />
    <br />
    <br />
    <h1>{{ message }}</h1>
    <h2>{{ heading }}</h2>
    <!-- <div v-for="chord in chords" v-bind:key="chord.id">
      <h2>Chord: {{ chord.name }}</h2>
      <img v-bind:src="chord.image" alt="chord.name" />
    </div> -->
  </div>
</template>
<style></style>
<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Chorduroy - A Guitar Chord Finder App",
      heading: "Click on Chords in the menu to go to Chord Library",
      // chords: [],
    };
  },
  // created: function () {
  //   this.indexChords();
  // },
  // methods: {
  //   indexChords: function () {
  //     axios.get("/chords").then((response) => {
  //       this.chords = response.data;
  //       console.log("All chords:", this.chords);
  //     });
  //   },
  // },
};
</script>
