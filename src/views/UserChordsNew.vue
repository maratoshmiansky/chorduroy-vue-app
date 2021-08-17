<template>
  <div class="userchords-new">
    <form v-on:submit.prevent="createUserChord()">
      <h1>Chords and their IDs</h1>
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
      <h1>Create a new user chord</h1>
      <div>
        <label>Chord ID:</label>
        <input type="text" v-model="newUserChordParams.chord_id" />
      </div>
      <br />
      <div>
        <label>Catalog:</label>
        <input type="text" v-model="newUserChordParams.catalog" />
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import Vue2Filters from "vue2-filters";
export default {
  // mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      errors: [],
      chords: [],
      // chordName: "",
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
