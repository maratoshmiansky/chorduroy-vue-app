<template>
  <div class="userchords-index">
    <div v-for="user_chord in user_chords" :key="user_chord.id">
      <router-link v-bind:to="`/user_chords/${user_chord.id}`">
        <p>User ID: {{ user_chord.user_id }}</p>
        <p>Chord ID: {{ user_chord.chord_id }}</p>
        <p>Catalog: {{ user_chord.catalog }}</p>
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
      message: "Here are chords!",
      user_chords: [],
    };
  },
  created: function () {
    this.indexUserChords();
  },
  methods: {
    indexUserChords: function () {
      axios.get("/user_chords").then((response) => {
        this.user_chords = response.data;
        console.log("All user_chords:", this.user_chords);
      });
    },
  },
};
</script>
