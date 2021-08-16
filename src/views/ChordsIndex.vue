<template>
  <div class="chords-index">
    <div v-for="chord in chords" :key="chord.id">
      <router-link v-bind:to="`/chords/${chord.id}`">
        <h2>Chord: {{ chord.name }}</h2>
        <img v-bind:src="chord.image" alt="chord.name" />
        <!-- <p>Root: {{ chord.chord_root }}</p>
        <p>Alteration: {{ chord.alteration }}</p>
        <p>Quality: {{ chord.quality }}</p>
        <p>Option: {{ chord.option }}</p> -->
      </router-link>
      <!-- <button>More info!</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
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
