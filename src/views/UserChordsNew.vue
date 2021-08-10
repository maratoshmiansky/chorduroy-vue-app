<template>
  <div class="userchords-new">
    <form v-on:submit.prevent="createUserChord()">
      <h1>New User Chord</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>User ID:</label>
        <input type="integer" v-model="newUserChordParams.user_id" />
      </div>
      <div>
        <label>Chord ID:</label>
        <input type="integer" v-model="newUserChordParams.chord_id" />
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
      newUserChordParams: {},
    };
  },
  methods: {
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
