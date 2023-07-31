import "./assets/css/plugins.css";
import "./assets/css/style.css";
import "./assets/js/plugins";
import "./assets/js/main";

import logoImg from "./assets/images/logo.png"
import blurry from "./assets/images/shapes/blurry-shape-1.svg"
import screen1 from "./assets/images/screens/screen-1.jpg"
import trustPilot from "./assets/images/review-logos/trustpilot_reviews.svg"
import capterra from "./assets/images/review-logos/capterra_reviews.svg"
import feature1 from "./assets/images/illustrations/feature-illustration-1-dark.svg"
import feature2 from "./assets/images/illustrations/feature-illustration-2-dark.svg"
import feature3 from "./assets/images/illustrations/feature-illustration-3-dark.svg"
import reviews1 from "./assets/images/review/1.png"
import reviews2 from "./assets/images/review/2.png"
import reviews3 from "./assets/images/review/3.png"
import reviews4 from "./assets/images/review/4.png"

import Swiper from 'swiper/bundle';
import Typed from "typed.js";
import 'swiper/css/bundle';

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    const reviewCarousel = new Swiper(".review-carousel", {
      loop: false,
      freemode: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".review-carousel-container .swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    // 6. Review rolling carousel
    const reviewRollingCarousel = new Swiper(".review-rolling-carousel", {
      loop: true,
      freemode: true,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 10000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        1: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3.5,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4.5,
        },
      },
    });

    // 7. Review rolling carousel reversed
    const reviewRollingCarouselReversed = new Swiper(".review-rolling-carousel-reversed", {
      loop: true,
      freemode: true,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 8000,
      autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        1: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3.5,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4.5,
        },
      },
    });
  }, []);

  useEffect(() => {
    let typedAnimation;
    const typedElements = document.querySelectorAll(".typed-animation");
    if (typedElements.length > 0) {
      typedElements.forEach((typedElement) => {
        typedAnimation = new Typed(typedElement, {
          strings: JSON.parse(typedElement.dataset.strings),
          typeSpeed: 80,
          backSpeed: 40,
          backDelay: 3000,
          startDelay: 1000,
          fadeOut: true,
          loop: true,
        });
      });
    }
    return () => {
      typedAnimation.destroy();
    };
  }, []);

  return (
    <div className="body" data-bs-theme="dark">
      <div className="wrapper d-flex flex-column justify-between">
        <nav className="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src={logoImg} alt="" width="165" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon">
                <span />
                <span />
                <span />
              </div>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
                <ul className="navbar-nav gap-lg-2 gap-xl-5">
                  <li className="nav-item">
                    <a className="nav-link " href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">Pricing</a>
                  </li>
                </ul>
                <div className="">
                  <Link to="/login" className="lab-btn">
                    <p className="btn btn-outline-primary-dark">Get started</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">
          <section className="hero-section style-1 overflow-hidden bg-dark py-10 py-lg-15" data-bs-theme="dark">
            <div className="container">
              <div className="row justify-center">
                <div className="col-lg-9">
                  <div className="text-center">lassName="text-primary-dark"
                    <div className="position-relative z-1">
                      <p className="text-primary-dark" style={{ marginTop: "10px" }} data-aos="fade-up-sm">
                        Unleash the Power of AI
                      </p>
                      <h1 className="text-white mb-8" data-aos="fade-up-sm" data-aos-delay="150">
                        Transform your life and business with experts such as: <br />
                        <span className="fw-bold text-gradient-2 typed-animation" data-strings='["Business coach", "Email expert", "Copy writing expert", "Social media expert","Relationship coach"]'>Product Description</span>
                      </h1>
                      <Link to="/login">
                        <p className="btn btn-lg btn-gradient-1" data-aos="fade-up-sm" data-aos-delay="200">Start for free - No Credit card required</p>
                      </Link>
                    </div>
                    <div data-aos="fade-up-sm" data-aos-delay="300">
                      <div className="image-with-shape">
                        <img src={blurry} alt="" className="shape animate-scale" />
                        <div className="mt-12 rounded-5 border border-primary-dark shadow-lg overflow-hidden position-relative z-1">
                          <img className="img-fluid d-inline-block" src={screen1} alt="" />
                        </div>
                      </div>
                    </div>
                    <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                      <li>All the experts you need for growth</li>
                      <li>For personal and business use</li>
                      <li>Custom personalized advice</li>
                    </ul>
                    <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                      <img className="img-fluid" src={trustPilot} alt="" />
                      <img className="img-fluid" src={capterra} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-10 py-lg-15">
            <div className="container">
              <div className="text-center mb-18">
                <h1 className="mb-0 text-white" data-aos="fade-up-sm" data-aos-delay="50">
                  Have a team of advanced AI experts at the tip of your fingers<br className="d-none d-lg-block" />
                </h1>
              </div>

              <div className="row g-6 g-xl-14">
                <div className="col-lg-4" data-aos="fade-up-sm" data-aos-delay="200">
                  <div className="d-flex flex-column gap-6 flex-lg-row">
                    <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M30.167 10c-1.833 4.855-3.167 8.188-4 10m0 0c-3.132 6.813-6.188 10-10 10-4 0-8-4-8-10s4-10 8-10c3.778 0 6.892 3.31 10 10Zm0 0c.853 1.837 2.187 5.17 4 10" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="mb-4 text-white">Grow at Your Own Pace</h4>
                      <p>
                        You have access your experts whenever you need them. Get guidance on a new business venture, or take your existing business to new heights. We are here to support your journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="fade-up-sm" data-aos-delay="250">
                  <div className="d-flex flex-column gap-6 flex-lg-row">
                    <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M3.333 20 20 32.37 36.666 20" />
                          <path d="M11.667 15 20 21.667 28.334 15m-10.001-5L20 11.333 21.666 10 20 8.666 18.333 10Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="mb-4 text-white">Personalized Experience</h4>
                      <p>
                        At Mentaluz, we aim to provide a personalized experience. Our advanced AI agents offer personalized, expert advice. With an average of 20 pre-made tasks per expert, all you need to do is click, personalize, and get your custom advice.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="fade-up-sm" data-aos-delay="300">
                  <div className="d-flex flex-column gap-6 flex-lg-row">
                    <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M10 29.334 6.667 27.5v-4.166m0-6.668V12.5L10 10.666m6.667-3.833L20 5l3.334 1.833M30 10.666l3.333 1.834v4.166m0 6.668V27.5L30 29.367m-6.666 3.799L20 35l-3.333-1.834M20 20l3.333-1.834M30 14.333l3.333-1.833M20 20v4.167m0 6.667V35m0-15-3.333-1.867M10 14.333 6.667 12.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="mb-4 text-white">Tools for Success</h4>
                      <p>
                        Mentaluz comes packed with tools designed to help you grow. Our platform connects you with expert who will guide you in personal matters and business strategies. The only limit is your curiosity and drive to succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/login">
                  <p className="btn btn-primary-dark">Get Started</p>
                </Link>
              </div>
            </div>
          </section>

          <section id="features" className="py-10 py-lg-15 @extraclassNameList">
            <div className="container">
              <div className="row g-6 gx-lg-14 gx-xl-20 align-center">
                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="150">
                  <div className="content">
                    <p className="text-primary-dark">Features 1</p>
                    <h1 className="text-white mb-8">
                      Success is Only a Click Away with Mentaluz
                    </h1>
                    <p className="mb-6">
                      Achieving your goals just got easier with Mentaluz. Our platform combines advanced technology with human-like intelligence to provide an experience like no other. Step into a world of unlimited growth potential today with experts such as:
                    </p>
                    <ul className="list-unstyled list-check mb-8">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Business coach</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Copywriter</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Sales coach</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Relationship coach</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>And many more…</span>
                      </li>
                    </ul>
                    <Link to="/login">
                      <p className="arrow-link arrow-link-primary-dark text-primary-dark gap-3">
                        <span>Get Started</span>
                        <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
                  <div className="feature-img">
                    <img src={feature1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="row g-6 gx-lg-14 gx-xl-20 align-center mt-10 flex-row-reverse">
                <div className="col-lg-6 col-xl-6" data-aos="fade-up-sm" data-aos-delay="150">
                  <div className="content">
                    <p className="text-primary-dark">Features 2</p>
                    <h1 className="text-white mb-8">
                      Grow your business with the knowledge of AI
                    </h1>
                    <p className="mb-6">
                      Discover the power of customized business advice with Mentaluz. Simply fill in our questionnaire, and our AI will analyze your needs and goals, providing personalized strategies for business growth.
                    </p>
                    <ul className="list-unstyled list-check mb-8">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Personalized for your business</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Only get the advice that you need</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Get actionable strategies to accelerate your business</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Save time with instant feedback and practical advice</span>
                      </li>
                    </ul>
                    <Link to="/login">
                      <p className="arrow-link arrow-link-primary-dark text-primary-dark gap-3">
                        <span>Get Started</span>
                        <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
                  <div className="feature-img">
                    <img src={feature2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="row g-6 gx-lg-14 gx-xl-20 align-center mt-10">
                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="150">
                  <div className="content">
                    <p className="text-primary-dark">Features 3</p>
                    <h1 className="text-white mb-8">
                      Pre-built Tools for Success:
                      <span className="text-primary-dark">Explore the Mentaluz Advantage</span>.
                    </h1>
                    <p className="mb-6">
                      From generating business ideas to crafting compelling homepage copy, writing engaging emails, and creating captivating social media content, our AI-powered platform offers an extensive suite of tools to drive your success.
                    </p>
                    <ul className="list-unstyled list-check mb-8">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Generate powerful business ideas</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Craft a compelling homepage copy that grabs attention</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Create effective emails that engage and convert</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                          </g>
                        </svg>
                        <span>Grow your social media presence with engaging content</span>
                      </li>
                    </ul>
                    <Link to="/login">
                      <p className="arrow-link arrow-link-primary-dark text-primary-dark gap-3">
                        <span>and many more, start now</span>
                        <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
                  <div className="feature-img">
                    <img src={feature3} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden pt-20 pb-10 pt-lg-30 pb-lg-15">
            <div className="container">
              <div className="row justify-center mb-18">
                <div className="col-lg-9">
                  <div className="text-center">
                    <h1 className="text-white" data-aos="fade-up-sm" data-aos-delay="50">
                      <span className="text-primary-dark">Reviews</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-rolling-carousel-container">
              <div className="swiper review-rolling-carousel">
                <div className="swiper-wrapper rolling-carousel-wrapper">
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">James T</h6>
                          <p className="mb-0 fs-sm">Entrepreneur</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;Mentaluz has transformed my startup! The AI-powered advice has been a game-changer for our strategy.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews2} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Linda R</h6>
                          <p className="mb-0 fs-sm">Content Creator</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          : &quot;I&apos;ve seen remarkable personal growth since using Mentaluz. The life coaching insights are so accurate!&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews3} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Patricia M</h6>
                          <p className="mb-0 fs-sm">Freelancer</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          : &quot;I love how Mentaluz offers advice across different fields. It&apos;s like having a personal team of experts at my disposal.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews4} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Anthony W</h6>
                          <p className="mb-0 fs-sm">Life Coach</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;The AI experts on Mentaluz provide such insightful advice. I&apos;ve been recommending it to all my clients.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Eric L</h6>
                          <p className="mb-0 fs-sm">SEO Expert</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;Mentaluz has been a great asset in my personal growth journey. The personalized advice it provides is spot on.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Timothy Z</h6>
                          <p className="mb-0 fs-sm">., Entrepreneur</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;I have started a new business and it&apos;s already gaining traction with the power of Mentaluz. I&apos;m amazed by the value that you get.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews2} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Paul G</h6>
                          <p className="mb-0 fs-sm">Author</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;I was skeptical at first, but Mentaluz&apos;s AI has provided such insightful advice. It&apos;s transformed my writing process.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews3} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">George V</h6>
                          <p className="mb-0 fs-sm">SEO Specialist</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;Mentaluz&apos;s guidance on business strategy has helped me grow my client base significantly. I can&apos;t recommend it highly enough.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-rolling-carousel-container-reversed mt-6">
              <div className="swiper review-rolling-carousel-reversed">
                <div className="swiper-wrapper rolling-carousel-wrapper">
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">James T</h6>
                          <p className="mb-0 fs-sm">Entrepreneur</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;Mentaluz has transformed my startup! The AI-powered advice has been a game-changer for our strategy.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews2} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Linda R</h6>
                          <p className="mb-0 fs-sm">Content Creator</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          : &quot;I&apos;ve seen remarkable personal growth since using Mentaluz. The life coaching insights are so accurate!&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews3} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Patricia M</h6>
                          <p className="mb-0 fs-sm">Freelancer</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          : &quot;I love how Mentaluz offers advice across different fields. It&apos;s like having a personal team of experts at my disposal.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews4} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Anthony W</h6>
                          <p className="mb-0 fs-sm">Life Coach</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;The AI experts on Mentaluz provide such insightful advice. I&apos;ve been recommending it to all my clients.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Eric L</h6>
                          <p className="mb-0 fs-sm">SEO Expert</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;Mentaluz has been a great asset in my personal growth journey. The personalized advice it provides is spot on.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Timothy Z</h6>
                          <p className="mb-0 fs-sm">., Entrepreneur</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;I have started a new business and it&apos;s already gaining traction with the power of Mentaluz. I&apos;m amazed by the value that you get.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews2} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">Paul G</h6>
                          <p className="mb-0 fs-sm">Author</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;I was skeptical at first, but Mentaluz&apos;s AI has provided such insightful advice. It&apos;s transformed my writing process.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide h-auto">
                    <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                      <div className="d-flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-circle overflow-hidden">
                          <img src={reviews3} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                          <h6 className="text-white mb-1">George V</h6>
                          <p className="mb-0 fs-sm">SEO Specialist</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="stars d-flex items-center gap-1 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary-dark">
                            <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                          </svg>
                        </div>
                        <p className="review-text mb-0">
                          &quot;Mentaluz&apos;s guidance on business strategy has helped me grow my client base significantly. I can&apos;t recommend it highly enough.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 py-lg-15">
            <div className="container align-center">
              <div className="row justify-center mb-18">
                <div className="col-lg-10">
                  <div className="text-center">
                    <p className="text-primary-dark" data-aos="fade-up-sm" data-aos-delay="50">
                      Pricing Plan
                    </p>
                    <h1 className="text-white mb-5" data-aos="fade-up-sm" data-aos-delay="100">
                      Ready to Get Started? <br />Don&apos;t Worry, We&apos;ll Keep You Under Budget
                    </h1>
                    <p className="mb-0" data-aos="fade-up-sm" data-aos-delay="150">
                      Get started with a 5-day trial, Cancel anytime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-center mb-18">
                <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="50">
                  <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-">
                    <h3 className="text-primary-dark fw-medium mb-0">
                      Free
                    </h3>
                    <h1 className="display-2 fw-semibold text-white mb-0 mt-4">$0</h1>
                    <p className="text-white lead fw-normal mt-4 mb-0">
                      A 10X faster way to writing your professional copy
                    </p>
                    <Link to="/login">
                      <p className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-dark-blue-3">Start for Free</p>
                    </Link>
                    <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                      <li>5 Ai-experts</li>
                      <li>Task access with 10k tokens each month</li>
                      <li>Clarity questionnaire</li>
                      <li>Email support</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="100">
                  <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-">
                    <h3 className="text-primary-dark fw-medium mb-0">
                      Premium
                    </h3>
                    <h1 className="display-2 fw-semibold text-white mb-0 mt-4">$29</h1>
                    <p className="text-white lead fw-normal mt-4 mb-0">
                      A 10X faster way to writing your professional copy
                    </p>
                    <Link to="/login">
                      <p className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-dark-blue-3">Choose Plan</p>
                    </Link>
                    <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                      <li>20 Ai experts</li>
                      <li>
                        <strong className="text-white fw-medium" />Task accesss with 100k tokens each month
                      </li>
                      <li><strong className="text-white fw-medium">70+</strong>Clarity questionnaire</li>
                      <li>
                        <strong className="text-white fw-medium">100+</strong>Automatic to-do list
                      </li>
                      <li>Premium support</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer id="pricing" className="footer bg-striped pt-10 pt-lg-15">
        <div className="container">
          <div className="row g-10">
            <div className="col-lg-9 col-xl-8 order-lg-2">
              <div className="row g-6">
                <div className="col-md-4 col-lg-4">
                  <div className="footer-widget text-center text-md-start">
                    <h6 className="text-white mb-2">Mentaluz</h6>
                    <ul className="link-list list-unstyled mb-0">
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#features">Features</a>
                      </li>
                      <li>
                        <a href="#pricing">Pricing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="footer-widget text-center text-md-start">
                    <h6 className="text-white mb-2">Use Cases</h6>
                    <ul className="link-list list-unstyled mb-0">
                      <li>
                        <a href="terms.html">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="footer-widget text-center text-md-start">
                    <h6 className="text-white mb-4">News & Update</h6>
                    <form action="#">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-primary-dark px-4" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.031 8.917 15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a.5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94v0Z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-lg-1 me-auto">
              <div className="footer-widget text-center text-lg-start">
                <a href="">
                  <img src={logoImg} alt="" className="img-fluid" width="135" />
                </a>
                <p className="fs-sm mb-0 mt-4">
                  A Magical Tool to Optimize you content for the first know who you&apos;re targeting. Identify your
                  target audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-6 mt-8">
            <p className="fs-sm mb-0">Copyright 2023. <span className="text-primary-dark">Mentaluz</span></p>
          </div>
        </div>
      </footer>

    </div>
    </div >
  );
};

export default Landing;
