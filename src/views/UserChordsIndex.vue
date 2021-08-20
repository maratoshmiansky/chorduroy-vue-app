<template>
  <div class="userchords-index">
    <section id="team" class="team">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <br />
          <h2>User Chords</h2>
          <br />
          <h4>Click on a chord to select it</h4>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6 d-flex align-items-stretch"
            v-for="user_chord in orderBy(user_chords, 'catalog', 'chord.name')"
            :key="user_chord.id"
          >
            <router-link v-bind:to="`/user_chords/${user_chord.id}`">
              <div class="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img v-bind:src="user_chord.chord.image" alt="user_chord.chord.name" />
                </div>
                <div class="member-info">
                  <h6>Catalog: {{ user_chord.catalog }}</h6>
                  <h4>Chord: {{ user_chord.chord.name }}</h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
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
