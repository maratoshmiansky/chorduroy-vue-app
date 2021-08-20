<template>
  <div class="chords-show">
    <div class="container">
      <h2>Chord name: {{ chord.name }}</h2>
      <img v-bind:src="chord.image" alt="chord.name" />
      <!-- <p>Root: {{ chord.chord_root }}</p>
      <p>Alteration: {{ chord.alteration }}</p>
      <p>Quality: {{ chord.quality }}</p>
      <p>Option: {{ chord.option }}</p> -->
      <!-- <router-link v-bind:to="`/chords/${chord.id}/edit`"><button>Edit Chord</button></router-link> -->
      <form v-on:submit.prevent="createUserChord(chord)">
        <br />
        <h3>Add User Chord to Catalog</h3>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <!-- <div>
          <p>Chord ID: {{ chord.id }}</p>
        </div> -->
        <div class="col-md-6 form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter catalog name"
            required
            v-model="newUserChordParams.catalog"
          />
        </div>
        <!-- <div>
          <label>Catalog:</label>
          <input type="text" v-model="newUserChordParams.catalog" />
        </div> -->
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
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
      newUserChordParams: {},
    };
  },
  created: function () {
    axios.get("/chords/" + this.$route.params.id).then((response) => {
      this.chord = response.data;
    });
  },
  methods: {
    createUserChord: function (chord) {
      console.log("Creating that user chord!");
      this.newUserChordParams.chord_id = chord.id;
      axios.post("/user_chords", this.newUserChordParams).then((response) => {
        this.$router.push("/user_chords");
        console.log(response.data);
      });
    },
  },
};
</script>
