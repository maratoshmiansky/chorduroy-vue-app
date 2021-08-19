<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-scrolled">
      <div class="container d-flex align-items-center justify-content-lg-between">
        <h1 class="logo me-auto me-lg-0">
          <a href="index.html">
            Chorduroy
            <span>.</span>
          </a>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="/about">About</a></li>
            <li v-if="!isLoggedIn()"><a class="nav-link scrollto" href="/signup">Signup</a></li>
            <li v-if="!isLoggedIn()"><a class="nav-link scrollto" href="/login">Login</a></li>
            <li v-if="isLoggedIn()"><a class="nav-link scrollto" href="/logout">Logout</a></li>
            <li><a class="nav-link scrollto" href="/chords">Chords</a></li>
            <li><a class="nav-link scrollto" href="/user_chords">User Chords</a></li>
            <li><a class="nav-link scrollto" href="/user_chords/new">Create User Chord</a></li>
            <!-- <li class="dropdown">
              <a href="#">
                <span>Drop Down</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> -->
            <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

        <!-- <a href="#about" class="get-started-btn scrollto">Get Started</a> -->
      </div>
    </header>
    <!-- End Header -->

    <router-view />

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>
                  Gp
                  <span>.</span>
                </h3>
                <p>
                  A108 Adam Street
                  <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong>
                  +1 5589 55488 55
                  <br />
                  <strong>Email:</strong>
                  info@example.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                  <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong><span>Gp</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
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
