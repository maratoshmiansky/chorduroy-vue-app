<template>
  <div class="chords-index">
    <section id="team" class="team">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <br />
          <h2>Chord Library</h2>
          <br />
          <h4>Click on a chord to select it</h4>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" v-for="chord in chords" :key="chord.id">
            <router-link v-bind:to="`/chords/${chord.id}`">
              <div class="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img v-bind:src="chord.image" class="img-fluid" alt="chord.name" />
                </div>
                <div class="member-info">
                  <h4>Chord: {{ chord.name }}</h4>
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
