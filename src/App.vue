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

        <div>
          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="nav-link scrollto active" href="/">Home</a></li>
              <li><a class="nav-link scrollto" href="/about">About</a></li>
              <li v-if="!isLoggedIn()"><a class="nav-link scrollto" href="/signup">Signup</a></li>
              <li v-if="!isLoggedIn()"><a class="nav-link scrollto" href="/login">Login</a></li>
              <li v-if="isLoggedIn()"><a class="nav-link scrollto" href="/logout">Logout</a></li>
              <li v-if="isLoggedIn()"><a class="nav-link scrollto" href="/chords">Chords</a></li>
              <li v-if="isLoggedIn()"><a class="nav-link scrollto" href="/user_chords">User Chords</a></li>
              <!-- <li v-if="isLoggedIn()"><a class="nav-link scrollto" href="/user_chords/new">Create User Chord</a></li> -->
              <!-- <li class="dropdown"> -->
              <!-- <a href="#">
                  <span>Something else</span>
                  <i class="bi bi-chevron-down"></i>
                </a> -->
              <!-- <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul> -->
              <!-- </li> -->
              <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
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
/* global Swiper */
/* global Isotope */
/* global AOS */
export default {
  mounted: function () {
    /**
     * Template Name: Gp - v4.3.0
     * Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
     * Author: BootstrapMade.com
     * License: https://bootstrapmade.com/license/
     */
    (function () {
      "use strict";

      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
          if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
          } else {
            selectEl.addEventListener(type, listener);
          }
        }
      };

      /**
       * Easy on scroll event listener
       */
      const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
      };

      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select("#navbar .scrollto", true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
            navbarlink.classList.add("active");
          } else {
            navbarlink.classList.remove("active");
          }
        });
      };
      window.addEventListener("load", navbarlinksActive);
      onscroll(document, navbarlinksActive);

      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el) => {
        let header = select("#header");
        let offset = header.offsetHeight;

        let elementPos = select(el).offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: "smooth",
        });
      };

      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select("#header");
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add("header-scrolled");
          } else {
            selectHeader.classList.remove("header-scrolled");
          }
        };
        window.addEventListener("load", headerScrolled);
        onscroll(document, headerScrolled);
      }

      /**
       * Back to top button
       */
      let backtotop = select(".back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }

      /**
       * Mobile nav toggle
       */
      // on("click", ".mobile-nav-toggle", function (e) {
      //   select("#navbar").classList.toggle("navbar-mobile");
      //   this.classList.toggle("bi-list");
      //   this.classList.toggle("bi-x");
      // });

      /**
       * Mobile nav dropdowns activate
       */
      on(
        "click",
        ".navbar .dropdown > a",
        function (e) {
          if (select("#navbar").classList.contains("navbar-mobile")) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active");
          }
        },
        true
      );

      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      on(
        "click",
        ".scrollto",
        function (e) {
          if (select(this.hash)) {
            e.preventDefault();

            let navbar = select("#navbar");
            if (navbar.classList.contains("navbar-mobile")) {
              navbar.classList.remove("navbar-mobile");
              let navbarToggle = select(".mobile-nav-toggle");
              navbarToggle.classList.toggle("bi-list");
              navbarToggle.classList.toggle("bi-x");
            }
            scrollto(this.hash);
          }
        },
        true
      );

      /**
       * Scroll with ofset on page load with hash links in the url
       */
      window.addEventListener("load", () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash);
          }
        }
      });

      /**
       * Preloader
       */
      let preloader = select("#preloader");
      if (preloader) {
        window.addEventListener("load", () => {
          preloader.remove();
        });
      }

      /**
       * Clients Slider
       */
      new Swiper(".clients-slider", {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        },
      });

      /**
       * Porfolio isotope and filter
       */
      window.addEventListener("load", () => {
        let portfolioContainer = select(".portfolio-container");
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
          });

          let portfolioFilters = select("#portfolio-flters li", true);

          on(
            "click",
            "#portfolio-flters li",
            function (e) {
              e.preventDefault();
              portfolioFilters.forEach(function (el) {
                el.classList.remove("filter-active");
              });
              this.classList.add("filter-active");

              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
              portfolioIsotope.on("arrangeComplete", function () {
                AOS.refresh();
              });
            },
            true
          );
        }
      });

      /**
       * Initiate portfolio lightbox
       */
      // const portfolioLightbox = GLightbox({
      //   selector: ".portfolio-lightbox",
      // });

      /**
       * Portfolio details slider
       */
      new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });

      /**
       * Testimonials slider
       */
      new Swiper(".testimonials-slider", {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });

      /**
       * Animation on scroll
       */
      window.addEventListener("load", () => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      });
    })();
  },
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
