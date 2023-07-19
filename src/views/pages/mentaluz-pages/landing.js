import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/lightcase.css";
import "./assets/css/swiper.min.css";
import "./assets/css/style.css";
import "./assets/css/style.css.map";
import "./assets/css/odometer.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-home2">
      {/* <div className="preloader preloader--two">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div> */}

      <header className="header header--two">
        <div className="container">
          <div className="area">
            <div className="logo" style={{ fontSize: 'x-large' }}>
              <a href="index.html">MENTALUZ</a>
            </div>
            <div className="main-menu">
              <div className="menu">
                <div className="header-about-section">
                  <h3>About Us</h3>
                  <p>Introducing Mentaluz the AI-powered personal growth tool designed to help you achieve your goals and unlock your full potential.</p>
                </div>
                <div className="header__btn">
                  <Link to="/login" className="lab-btn">Login</Link>
                </div>
                <div className="header-social-icons">
                  <ul>
                    <li className="social-icon">
                      <a href="#"><i className="icofont-twitter" /></a>
                    </li>
                    <li className="social-icon">
                      <a href="#"><i className="icofont-telegram" /></a>
                    </li>
                    <li className="social-icon">
                      <a href="#"><i className="icofont-youtube-play" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header__bararea">
                <div className="header__bar d-lg-none">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="banner banner--two" id="home">
        <div className="container">
          <div className="banner__area">
            <div className="row align-items-center g-4">
              <div className="col-lg-6 col-12">
                <div className="banner__content wow fadeInUp" data-wow-delay=".5s">
                  <h2><span>Create Your Dream Team Today</span> </h2>
                  <p>Mentaluz offers 35+ Ai-experts with decades of knowledge to help you achieve your goals. Give your personal Ai powered experts tasks to do, or fill in a questionnaire so the experts can advice you on your next step. – All the experts you need, in one subscription.</p>
                  <div className="banner__groupbtn">
                    <Link to="/login" className="lab-btn">Create your Free Account</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="banner__thumb position-relative">
                  <img src="/images/banner/02.png" alt="rajibraj" className=" wow fadeInUp" data-wow-delay=".5s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature feature--two padding-tb">
        <div className="container">
          <div className="section__header text-center wow fadeInUp" data-wow-delay=".5s">
            <h3>Welcome To <span> Mentaluz</span></h3>
            <p>Where you can customize your personal team of experts, from therapists to business coaches. All in one subscription.
              Your experts are designed to support and guide you in order to achieve your goals. Here is how it works:
            </p>
          </div>
          <div className="section__wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/05.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>1. Get Instant Access</h5>
                    <p>Create an account and get instant access to experts. Chat with them or give them tasks to do. Access 35+ experts, with more than 200+ tasks</p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/06.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>2. Explore Mentaluz</h5>
                    <p>Fill in a questionnaire, chat with an expert and accelerate your growth. Get immediate feedback from your experts about your next best step.</p>
                    <br /><br /><br />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".7s">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/07.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>3. Increase knowledge</h5>
                    <p>Your experts have terabytes of data and can learn from your input. You will get advice beyond human comprehension.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature padding-tb">
        <div className="container">
          <div className="feature__area wow fadeInUp" data-wow-delay=".5s">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/01.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>Yahoo Finance</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/02.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>Marketwatch</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/03.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>Bloomberg</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="feature__item">
                  <div className="feature__thumb">
                    <img src="/images/feature/04.png" alt="rajibraj" />
                  </div>
                  <div className="feature__content">
                    <h5>Forbes</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <video width="1920" height="1080" controls poster="/images/bg/05.png">
          <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
          <source src="/images/video/videoplayback.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="offer__product padding-tb overflow-hidden" id="offer">
        <div className="product product--five padding-tb">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="product__content">
                  <div className="section__header wow fadeInUp" data-wow-delay=".5s">
                    <h3>Grow personally<span /></h3>
                    <p className="ms-0">Life can be turbulent. But with Mentaluz, you will have access to every expert you need to level up your life. Get clarity on your next step with one of the questionnaires and receive tips and actionable steps from your personalized experts. </p>
                    <br />
                  </div>
                  <div className="section__wrapper">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="ProOne-tab" data-bs-toggle="tab" data-bs-target="#ProOne" role="tab" aria-controls="ProOne" aria-selected="true">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Instant access</h6>
                            <p>20+ experts and mentors ranging from therapists to business coaches within your access 24/7. Assign tasks, ask questions or seek help at any time and get an immediate solution from the experts. </p>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="ProTwo-tab" data-bs-toggle="tab" data-bs-target="#ProTwo" role="tab" aria-controls="ProTwo" aria-selected="false">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Safe space</h6>
                            <p>Your experts will give you advice with your goals in mind. They do not have their own agenda, just yours.</p>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="ProTwo-tab" data-bs-toggle="tab" data-bs-target="#ProTwo" role="tab" aria-controls="ProTwo" aria-selected="false">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Teach your experts</h6>
                            <p>Give your experts books and information so you can use it in the tasks and chat. Personalized within minutes. </p>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="ProTwo-tab" data-bs-toggle="tab" data-bs-target="#ProTwo" role="tab" aria-controls="ProTwo" aria-selected="false">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Clarity questionnaires</h6>
                            <p>Get personalized messages from our experts from topics ranging from finance to spirituality after completing the clarity questionnaires.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="banner__groupbtn">
                    <Link to="/login" className="lab-btn">Create Your Free Account</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="ProOne" role="tabpanel" aria-labelledby="ProOne-tab">
                    <div className="product__thumb">
                      <img src="/images/product/personal.png" alt="rajibraj" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="ProTwo" role="tabpanel" aria-labelledby="ProTwo-tab">
                    <div className="product__thumb">
                      <img src="/images/product/02.jpg" alt="rajibraj" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="ProThree" role="tabpanel" aria-labelledby="ProThree-tab">
                    <div className="product__thumb">
                      <img src="/images/product/03.jpg" alt="rajibraj" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product product--five padding-tb pt-0">
          <div className="container">
            <div className="row g-5 justify-content-center flex-row-reverse">
              <div className="col-lg-6 col-12">
                <div className="product__content">
                  <div className="section__header wow fadeInUp" data-wow-delay=".5s">
                    <h3>Grow your business<span /></h3>
                    <p className="ms-0">Business is changing rapidly, and if you are not growing exponentially, you will be left behind. Mentaluz provides you with access to experts that help you grow and advise you on almost every facet of your business.</p>
                  </div>
                  <div className="section__wrapper">
                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="Pro2One-tab" data-bs-toggle="tab" data-bs-target="#Pro2One" role="tab" aria-controls="Pro2One" aria-selected="true">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>No more sourcing</h6>
                            <p>Find all the experts you need to grow your business in one subscription. From startup experts to social media marketeers. With more then 35+ experts with over more then 300+ tasks to give.</p>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="Pro2Two-tab" data-bs-toggle="tab" data-bs-target="#Pro2Two" role="tab" aria-controls="Pro2Two" aria-selected="false">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Immediate results</h6>
                            <p>No more waiting time untill your adcopy is done. Get personalized adcopy, growth strategies and feedback from experts within seconds.</p>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="Pro2Three-tab" data-bs-toggle="tab" data-bs-target="#Pro2Three" role="tab" aria-controls="Pro2Three" aria-selected="false">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Customize your data</h6>
                            <p>Teach your experts custom text or files so you can use it as content. Give them information about your business and they will know it within minutes.</p>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div className="nav-link" id="Pro2Three-tab" data-bs-toggle="tab" data-bs-target="#Pro2Three" role="tab" aria-controls="Pro2Three" aria-selected="false">
                          <div className="thumb">
                            <img src="/images/product/022.png" alt="rajibraj" />
                          </div>
                          <div className="content">
                            <h6>Unlock your growth</h6>
                            <p>Fill in the questionnaire and your experts will send you customized feedback and actionable steps on how to grow your business.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="banner__groupbtn">
                    <Link to="/login" className="lab-btn">Create Your Free Account</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="tab-content" id="myTabContent2">
                  <div className="tab-pane fade show active" id="Pro2One" role="tabpanel" aria-labelledby="Pro2One-tab">
                    <div className="product__thumb">
                      <img src="/images/product/business.png" alt="rajibraj" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Pro2Two" role="tabpanel" aria-labelledby="Pro2Two-tab">
                    <div className="product__thumb">
                      <img src="/images/product/05.jpg" alt="rajibraj" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Pro2Three" role="tabpanel" aria-labelledby="Pro2Three-tab">
                    <div className="product__thumb">
                      <img src="/images/product/06.jpg" alt="rajibraj" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery padding-tb" id="gallery">
        <div className="container">
          <div className="section__wrapper">
            <div className="row g-4 maso">
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="gallery__item">
                  <div className="gallery__thumb">
                    <a href="/images/gallery/01.jpg" data-rel="lightcase"><img src="/images/gallery/01.jpg" alt="rajibraj" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                <div className="gallery__item">
                  <div className="gallery__thumb">
                    <a href="/images/gallery/02.jpg" data-rel="lightcase"><img src="/images/gallery/02.jpg" alt="rajibraj" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".7s">
                <div className="gallery__item">
                  <div className="gallery__thumb">
                    <a href="/images/gallery/03.jpg" data-rel="lightcase"><img src="/images/gallery/03.jpg" alt="rajibraj" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".8s">
                <div className="gallery__item">
                  <div className="gallery__thumb">
                    <a href="/images/gallery/04.jpg" data-rel="lightcase"><img src="/images/gallery/04.jpg" alt="rajibraj" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".9s">
                <div className="gallery__item">
                  <div className="gallery__thumb">
                    <a href="/images/gallery/05.jpg" data-rel="lightcase"><img src="/images/gallery/05.jpg" alt="rajibraj" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing padding-tb" id="pricing">
        <div className="container">
          <div className="section__header text-center wow fadeInUp" data-wow-delay=".5s">
            <h6>WE BELIEVE </h6>
            <h3>Growth is for everyone <span> </span></h3>
            <p>Choose between free or premium service</p>
          </div>
          <div className="section__wrapper">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".5s">
                <div className="pricing__item">
                  <div className="pricing__head">
                    <div className="pricing__left">
                      <h4>Basic</h4>
                      <p>Most Popular</p>
                    </div>
                    <div className="pricing__right">
                      <h5>Free</h5>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <div className="pricing__body">
                    <ul>
                      <li><i className="icofont-check" /> 5 Ai-Experts</li>
                      <li><i className="icofont-check" /> Task access with 10k tokens </li>
                      <li><i className="icofont-check" /> Clarity questionnaire</li>
                      <li><i className="icofont-close" /> Email support</li>
                      <li><i className="icofont-close" /> Habitant morbi </li>
                      <li><i className="icofont-close" /> Dictum varius </li>
                    </ul>
                    <a href="contact.html" className="lab-btn">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                <div className="pricing__item">
                  <div className="pricing__head">
                    <div className="pricing__left">
                      <h4>Premium</h4>
                      <p>Most Popular</p>
                    </div>
                    <div className="pricing__right">
                      <h5>$34.95</h5>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <div className="pricing__body">
                    <ul>
                      <li><i className="icofont-check" /> 20+ Experts</li>
                      <li><i className="icofont-check" /> Task access with 50k tokens</li>
                      <li><i className="icofont-check" /> Clarity questionnaires</li>
                      <li><i className="icofont-check" /> Premium support</li>
                      <li><i className="icofont-check" /> Smart notifications</li>
                      <li><i className="icofont-close" /> Dictum varius</li>
                    </ul>
                    <a href="contact.html" className="lab-btn">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".7s">
                <div className="pricing__item">
                  <div className="pricing__head">
                    <div className="pricing__left">
                      <h4>Enterprise</h4>
                      <p>Most Popular</p>
                    </div>
                    <div className="pricing__right">
                      <h5>$49.95</h5>
                      <p>Per Month</p>
                    </div>
                  </div>
                  <div className="pricing__body">
                    <ul>
                      <li><i className="icofont-check" /> 35+ Experts</li>
                      <li><i className="icofont-check" /> Task access with 250k tokens</li>
                      <li><i className="icofont-check" /> Clarity questionnaires</li>
                      <li><i className="icofont-check" /> Premium support</li>
                      <li><i className="icofont-check" /> Smart notifications</li>
                      <li><i className="icofont-check" /> Bulk export</li>
                    </ul>
                    <a href="contact.html" className="lab-btn">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial testimonial--two padding-tb">
        <div className="container">
          <div className="section__header text-center wow fadeInUp" data-wow-delay=".5s">
            <h6>Testimonial</h6>
            <h3>Customer  <span> Feedback</span></h3>
            <p>We are trusted by customers globally</p>
          </div>
          <div className="section__wrapper">
            <div className="testimonial__slidertwo overflow-hidden wow fadeInUp" data-wow-delay=".5s">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial__item">
                    <div className="testimonial__inner">
                      <div className="testimonial__thumb">
                        <img src="/images/testimonial/03.png" alt="rajibraj" />
                      </div>
                      <div className="testimonial__content">
                        <p>&quot; Having natural conversations unfold around your work adds another layer to your business. It&apos;s really wonderful. Thanks for the great service. We can&apos;t understand how we&apos;ve been living without Mentaluz. I&apos;m totally blown away&quot;</p>
                        <div className="testimonial__author">
                          <div className="thumb" />
                          <div className="content">
                            <h5>Devi R</h5>
                            <span>CEO of Posuere</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial__item">
                    <div className="testimonial__inner">
                      <div className="testimonial__thumb">
                        <img src="/images/testimonial/04.png" alt="rajibraj" />
                      </div>
                      <div className="testimonial__content">
                        <p>&quot; Having natural conversations unfold around your work adds another layer to your business. It&apos;s really wonderful. Thanks for the great service. We can&apos;t understand how we&apos;ve been living without Mentaluz. I&apos;m totally blown away&quot;</p>
                        <div className="testimonial__author">
                          <div className="thumb" />
                          <div className="content">
                            <h5>Rick E</h5>
                            <span>CEO of vitae</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__pagination" />
            </div>
          </div>
        </div>
      </div>

      <div className="faq faq--hometwo padding-tb">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="faq__content">
                <div className="section__header wow fadeInUp" data-wow-delay=".5s">
                  <h3>Frequently Asked Questions <span> </span></h3>
                  <p className="ms-0">If you have any other questions, you can contact directly via : x</p>
                </div>
                <div className="section__wrapper">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                      <h5 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is Mentaluz?</button>
                      </h5>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Mentaluz is an AI-powered personal growth tool designed to help individuals achieve their goals and unlock their full potential. The name is derived from the word mental, and luz, meaning light. Through our mentality we can interact with the experts to bring the steps to light which we need for growth.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                      <h5 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How does Mentaluz work?</button>
                      </h5>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Mentaluz utilizes information from questionnaires and user input to create personalized AI specialists. You can chat with their specialists, give them tasks to complete, and receive personalized content and guidance. After filling in a questionnaire, one of the experts will send you a message with information and a action step to get closer to your goal.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                      <h5 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What kind of experts are available on Mentaluz?</button>
                      </h5>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Mentaluz offers a diverse team of experts, including therapists, business coaches, cooks, email marketing experts, and lawyers. Overall there are 20+ experts ready for your service.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                      <h5 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Is Mentaluz expensive?</button>
                      </h5>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>: Mentaluz offers expert guidance and support at an affordable price. This eliminates the need for expensive coaching fees, making personal growth accessible to everyone. Within our platform you have access to 300+ tasks and 20+ experts for the same price as some people might ask for 1 task.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                      <h5 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Is my data secure on Mentaluz?</button>
                      </h5>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p> Yes, Mentaluz takes user privacy and data security seriously. All user data is encrypted and stored securely, ensuring that user information is protected. </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                      <h5 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How can I get started with Mentaluz?</button>
                      </h5>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>: Simply sign up on the Mentaluz website, complete a questionnaire to create your personalized AI specialist, and start chatting with your specialist to receive personalized guidance and support.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="newsletter newsletter--two padding-tb bg-img" id="newslet">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="newsletter__content wow fadeInUp " data-wow-delay=".5s">
                <h3><span>Subscribe To Our Newsletter</span></h3>
                <form action="#">
                  <input type="text" placeholder="Enter your Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer--two">
        <div className="footer__top padding-tb bg-white">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__about">
                  <div className="footer__title wow fadeInUp" data-wow-delay=".5s">
                    <h5>MENTALUZ</h5>
                  </div>
                  <div className="footer__body wow fadeInUp" data-wow-delay=".5s">
                    <p>Aliquam pellentesque pellentese neque vitae elementum.</p>
                    <ul>
                      <li>
                        <div className="icon"><i className="icofont-phone" /></div>
                        <div className="text">+(141 - 589 - 548 - 656</div>
                      </li>
                      <li>
                        <div className="icon"><i className="icofont-envelope" /></div>
                        <div className="text">info@mentaluz.com</div>
                      </li>
                      <li>
                        <div className="icon"><i className="icofont-google-map" /></div>
                        <div className="text">Birkbeck Court, Birkbeck Rd, London W3 6BQ, UK</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer__timetable" />
              </div>
              <div className="col-lg-2 col-sm-6 col-12">
                <div className="footer__link">
                  <div className="footer__title wow fadeInUp" data-wow-delay=".5s">
                    <h5>Quick Links</h5>
                  </div>
                  <div className="footer__body wow fadeInUp" data-wow-delay=".5s">
                    <ul>
                      <li><a href="#">Home </a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="terms.html " target="_blank">Terms and Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__newsletter">
                  <div className="footer__title wow fadeInUp" data-wow-delay=".5s">
                    <h5>Subscribe</h5>
                  </div>
                  <div className="footer__body wow fadeInUp" data-wow-delay=".5s">
                    <p>Pellentesque aliquam sem in tellus fringilla interdum.</p>
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button type="submit"><i className="icofont-paper-plane" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom wow fadeInUp" data-wow-delay=".5s">
          <div className="container">
            <p>&copy; 2023 <a href="index.html">MENTALUZ</a> all Right Reserved by <a href="#" target="_blank"> MENTALUZ </a></p>
          </div>
        </div>
      </footer>

      <a href="#" className="scrollToTop"><i className="fa-solid fa-arrow-turn-up bg-theme2" /></a>
    </div>
  );
};

export default Landing;
