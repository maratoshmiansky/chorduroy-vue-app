<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <a v-if="!isLoggedIn()">
        <router-link to="/signup">Signup</router-link>
        |
      </a>
      <a v-if="!isLoggedIn()">
        <router-link to="/login">Login</router-link>
        |
      </a>
      <a v-if="isLoggedIn()">
        <router-link to="/logout">Logout</router-link>
        |
      </a>
      <router-link to="/chords">Chords</router-link>
      |
      <router-link to="/user_chords">User Chords</router-link>
      |
      <router-link to="/user_chords/new">Create User Chord</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
