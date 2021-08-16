<template>
  <div class="userchords-new">
    <form v-on:submit.prevent="createUserChord()">
      <h1>New User Chord</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <!-- <div>
        <label>User ID:</label>
        <input type="text" v-model="newUserChordParams.user_id" />
      </div> -->
      <div v-for="chord in chords" :key="chord.id">
        <a>{{ chord.name }} = chord ID: {{ chord.id }}</a>
      </div>
      <div>
        <label>Chord name:</label>
        <input type="text" v-model="chordName" />
        <p>Chord selected: {{ chordName }}</p>
        <p>Chord ID: {{ chordName }}</p>
      </div>
      <div>
        <label>Chord ID:</label>
        <input type="text" v-model="newUserChordParams.chord_id" />
      </div>
      <div>
        <label>Catalog:</label>
        <input type="text" v-model="newUserChordParams.catalog" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      chords: [],
      chordName: "",
      newUserChordParams: {},
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
    createUserChord: function () {
      console.log("Creating that user chord!");
      axios.post("/user_chords", this.newUserChordParams).then((response) => {
        this.$router.push("/user_chords");
        console.log(response.data);
      });
    },
  },
};
</script>
