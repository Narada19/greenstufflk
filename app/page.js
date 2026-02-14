'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Initialize Facebook Chat
    var chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
      chatbox.setAttribute("page_id", "108953347488055");
      chatbox.setAttribute("attribution", "biz_inbox");
    }

    // Load jQuery and other scripts
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load scripts
    loadScript('js/vendor/jquery-2.2.4.min.js', 'jquery')
      .then(() => loadScript('js/bootstrap.min.js', 'bootstrap'))
      .then(() => loadScript('js/owl.carousel.min.js', 'owl-carousel'))
      .then(() => loadScript('lib/custom-slider/js/jquery.nivo.slider.js', 'nivo-slider'))
      .then(() => loadScript('lib/custom-slider/home.js', 'home-slider'))
      .then(() => loadScript('js/jquery.meanmenu.min.js', 'meanmenu'))
      .then(() => loadScript('js/wow.min.js', 'wow'))
      .then(() => loadScript('js/plugins.js', 'plugins'))
      .then(() => loadScript('js/jquery.scrollUp.min.js', 'scrollup'))
      .then(() => loadScript('js/isotope.pkgd.min.js', 'isotope'))
      .then(() => loadScript('js/jquery.counterup.min.js', 'counterup'))
      .then(() => loadScript('js/waypoints.min.js', 'waypoints'))
      .then(() => loadScript('js/validator.min.js', 'validator'))
      .then(() => loadScript('js/main.js', 'main-js'))
      .then(() => {
        // Initialize WOW
        if (window.WOW) {
          new window.WOW().init();
        }
      })
      .catch(err => console.log('Error loading scripts:', err));

    // Load elfsight script
    loadScript('https://apps.elfsight.com/p/platform.js', 'elfsight-platform');
  }, []);

  return (
    <div className="wrapper-area">
      {/* Header Area Start Here */}
      <header>
        <div className="header-style1-area">
          <div className="header-top-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="header-top-left">
                    <ul className="header-social">
                      <li><a href="https://www.facebook.com/greenstuffpvtltd/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="https://twitter.com/GreenStufflk" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/greenstufflk/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.instagram.com/greenstuffpvtltd/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.pinterest.com/greenstufflk" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div className="header-top-right">
                    <ul>
                      <li><i className="fa fa-map-marker" aria-hidden="true"></i><a href="#"> 214/a Sudarshana Mawatha, Malabe 10115 </a></li>
                      <li><i className="fa fa-phone" aria-hidden="true"></i><a href="Phone:+94112119733"> (+94) 11 211 9733 </a></li>
                      <li><button className="btn-submit" type="submit">Contact Us </button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom-area" id="sticker">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <div className="logo-area">
                    <a href="index.html"><img className="img-responsive" src="img/logo.png" alt="Green Agventure Lanka Logo" /></a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                  <div className="main-menu-area">
                    <nav>
                      <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Area Start */}
        <div className="mobile-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mobile-menu">
                  <nav id="dropdown">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="news.html">News</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Area End */}
      </header>
      {/* Header Area End Here */}
      
      {/* Slider 1 Area Start Here */}
      <div className="slider1-area">
        <div className="bend niceties preview-1">
          <div id="ensign-nivoslider-3" className="slides">
            <img src="img/slider-1/1.jpg" alt="slider" title="#slider-direction-1" />
            <img src="img/slider-1/2.jpg" alt="slider" title="#slider-direction-2" />
            <img src="img/slider-1/3.jpg" alt="slider" title="#slider-direction-3" />
          </div>
          <div id="slider-direction-1" className="t-cn slider-direction">
            <div className="slider-content s-tb slider-1">
              <div className="title-container s-tb-c">
                <h1 className="title1">BRING <span>NATURE</span> INTO <span> YOUR HOME</span></h1>
                <p>Green Agventure Lanka pvt ltd is a landscaping company based in Sri Lanka and United Arab Emirates.</p>
                <p>export of plants and agriculture based products to the middle east.</p>
                <div className="slider-btn-area">
                  <a href="#" className="btn-slider-fill">Read More</a>
                  <a href="#" className="btn-slider">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          <div id="slider-direction-2" className="t-cn slider-direction">
            <div className="slider-content s-tb slider-2">
              <div className="title-container s-tb-c">
                <h1 className="title1">BRING <span>NATURE</span> INTO <span> YOUR HOME</span></h1>
                <p>Green Agventure Lanka pvt ltd is a landscaping company based in Sri Lanka and United Arab Emirates.</p>
                <p>export of plants and agriculture based products to the middle east.</p>
                <div className="slider-btn-area">
                  <a href="#" className="btn-slider-fill">Read More</a>
                  <a href="#" className="btn-slider">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          <div id="slider-direction-3" className="t-cn slider-direction">
            <div className="slider-content s-tb slider-3">
              <div className="title-container s-tb-c">
                <h1 className="title1">BRING <span>NATURE</span> INTO <span> YOUR HOME</span></h1>
                <p>Green Agventure Lanka pvt ltd is a landscaping company based in Sri Lanka and United Arab Emirates.</p>
                <p>export of plants and agriculture based products to the middle east.</p>
                <div className="slider-btn-area">
                  <a href="#" className="btn-slider-fill">Read More</a>
                  <a href="#" className="btn-slider">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider 1 Area End Here */}
      
      {/* Service 1 Area Start Here */}
      <div id="service-tab" className="service2-area sub-service2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-box margin-b-a-tab">
                <span><i className="fa fa-tree" aria-hidden="true"></i></span>
                <h2>PLANT EXPORT</h2>
                <p>Dorem ipsum dolor sit amet, consectetur elit. Curabitur euismod enim a metus adipiscing aliquam</p>
                <a className="btn-read-more-h-b" href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-box margin-b-a-tab">
                <span><i className="fa fa-tree" aria-hidden="true"></i></span>
                <h2>LANDSCAPING</h2>
                <p>Whether you are looking for a simple garden or a full wide-scale landscaping project with landscape
                design services</p>
                <a className="btn-read-more-h-b" href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-box margin-b-a-tab">
                <span><i className="fa fa-tree" aria-hidden="true"></i></span>
                <h2>HORTICULTURE</h2>
                <p>Due to long hours in the office and longer commute times, we're spending more time indoors and
                   away from ..</p>
                <a className="btn-read-more-h-b" href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-box margin-b-a-tab">
                <span><i className="fa fa-tree" aria-hidden="true"></i></span>
                <h2>VERTICAL GARDENING </h2>
                <p> Don't have space? don't worry! We specialize in vertical Gardens which are designed for the 
                    right ..
                </p>
                <a className="btn-read-more-h-b" href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-box margin-b-a-tab">
                <span><i className="fa fa-tree" aria-hidden="true"></i></span>
                <h2>ROOFTOP GARDENING</h2>
                <p>Kimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's ..
                </p>
                <a className="btn-read-more-h-b" href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-box margin-b-a-tab">
                <span><i className="fa fa-tree" aria-hidden="true"></i></span>
                <h2>MICRO-IRRIGATION</h2>
                <p>Drip Irrigation System, is an incredibly efficient watering method that slowly delivers
                    water directly..
                </p>
                <a className="btn-read-more-h-b" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service 1 Area End Here */}
      
      {/* About Us Page 1 Area Start Here */}
      <div id="aboutus-tab" className="about-us-page2-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="history-box">
                <h2 className="title-bar50">Welcome Green Agventure Sri Lanka</h2>
                <p>
                  Green Agventure Lanka PVT LTD is a leading plant exporting and landscaping company in Sri Lanka associated with UAE (Dubai). With many years of experience and the finest staff, we provide our customers with excellent service. <br />
                  We are the most modern, knowledgeable team with an enormous collection of high-quality plants. We trade them internationally to manifest our green values to the world.  <br />
                  We have many garden services to make your dream garden a reality. Our team is ready to create a unique and pleasing environment around you, not only with the plants but also with the remarkable collection of interlocking stones. Our landscaping art will make your land the most creative and attractive garden intertwined with the environment.
                </p>
                <ul className="history-list">
                  <li>
                    <h3 className="text-white">Our Mission</h3>
                    <p className="text-white">Our mission is to export high-quality plants worldwide to make a nature-loving and greener world and provide our valuable customers with the best and most reliable landscaping service. And improve living standards in Sri Lanka by promoting employment and bringing the foreign exchange to the country.</p>
                  </li>
                  <li>
                    <h3 className="text-white">Our Vision</h3>
                    <p className="text-white">Our vision is to spread the value of nature and heal human lives by distributing the best green products worldwide. And to become the best plant export and landscaping company in Sri Lanka.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div className="history-img-wraper">
                <div className="history-img-holder">
                  <a href="#"><img src="img/about/2.jpg" alt="about" className="img-responsive" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Page 1 Area End Here */}
      
      {/* Contact Banner Area Start Here */}
      <div className="contact-banner-area">
        <div className="container">
          <h2>Creat Your<span> Beautiful Garden</span> With Us!<br /><span> Please Call <a href="">(+94) 11 211 9733</a> </span> </h2>
          <a href="#contactus-tab" className="btn-contact btn-lg">Contact Us</a>
        </div>
      </div>
      {/* Contact Banner Area End Here */}
      
      {/* Why Choose Us Area Start Here */}
      <div id="contactus-tab" className="why-choose-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <h2 className="solid-title">Why Most of The People Choose Us</h2>
              <p className="sub-title">We Are Expert In Work</p>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="why-choose-us-box">
                  <div className="media">
                    <a href="#" className="pull-left">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </a>
                    <div className="media-body">
                      <h3><a href="#">Available 24/7</a></h3>
                      <p>We are available 24 hours day 7 days a week. Call our hotline (+94) 11 211 9733</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="why-choose-us-box">
                  <div className="media">
                    <a href="#" className="pull-left">
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </a>
                    <div className="media-body">
                      <h3><a href="#">Free Assistant</a></h3>
                      <p>If you Need any further details.
                        Email your specifications to info@greenstufflk.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="why-choose-us-box">
                  <div className="media">
                    <a href="#" className="pull-left">
                      <i className="fa fa-users" aria-hidden="true"></i>
                    </a>
                    <div className="media-body">
                      <h3><a href="#">Creative Ideas</a></h3>
                      <p>Modern ideas and latest trends, create stylish, interesting and comfortable landscaping.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="why-choose-us-box">
                  <div className="media">
                    <a href="#" className="pull-left">
                      <i className="fa fa-users" aria-hidden="true"></i>
                    </a>
                    <div className="media-body">
                      <h3><a href="#">Customer Focused</a></h3>
                      <p>Dream big! Our landscape designers are ready to make it a reality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div className="ask-question-right">
                <h2 className="title-bar50">Contact Us</h2>
                <form id="getQuote-form" action="https://formsubmit.co/greenstufflk@gmail.com" method="POST">
                  <fieldset>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input id="form-name" name="name" placeholder="Name*" className="form-control" type="text" data-error="Name field is required" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input id="form-email" name="email" placeholder="E-mail*" className="form-control" type="text" data-error="E-mail field is required" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input id="form-phone" name="phone" placeholder="Phone*" className="form-control" type="text" data-error="Phone field is required" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea className="textarea form-control" rows={4} id="form-message" name="message" placeholder="Message*" data-error="Message field is required" required></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group margin-b-0 text-right">
                          <button className="btn-submit" type="submit">Submit </button>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className='form-response'></div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Area End Here */}
      
      <div className="social-media">
        <div className="container-fluid">
          <div className="elfsight-app-511fca36-f709-4e82-9534-1069324d169f"></div>
        </div>
      </div>
      
      {/* Footer Area Start Here */}
      <footer>
        <div className="footer-area-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box">
                  <h3>About Us</h3>
                  <p>Green Agventure Lanka PVT LTD is a leading plants and landscaping company associated with UAE (Dubai) and Sri Lanka with the most significant collection of plants and numerous garden services and accessories. We always provide excellent service with a knowledgeable and creative staff. Mainly, we export the highest-quality plants with many years of experience to highlight the greenery identity of the country.
                       In addition, our team is ready to create and landscape your garden by fulfiling your dream a reality.</p>
                  <ul className="footer-social">
                    <li><a href="https://www.facebook.com/greenstuffpvtltd/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/GreenStufflk" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/greenstufflk/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/greenstuffpvtltd/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.pinterest.com/greenstufflk" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box">
                  <h3>Gallery</h3>
                  <ul className="flickr-photos">
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-1.jpg" alt="flickr1" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-2.jpg" alt="flickr2" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-3.jpg" alt="flickr3" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-4.jpg" alt="flickr4" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-5.jpg" alt="flickr5" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-6.jpg" alt="flickr6" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-7.jpg" alt="flickr4" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-8.jpg" alt="flickr5" /></a></li>
                    <li><a href="#"><img className="img-responsive" src="img/footer/flickr-9.jpg" alt="flickr6" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box">
                  <h3>Contact US</h3>
                  <ul className="corporate-address">
                    <li><i className="fa fa-phone" aria-hidden="true"></i><a href="">(+94) 11 211 9733</a></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><a href="#" className="text-white"> 214/a Sudarshana Mawatha, Malabe 10115 </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box">
                  <div className="newsletter-area">
                    <h3>Subcribe</h3>
                    <div className="input-group stylish-input-group">
                      <input type="text" placeholder="Enter your e-mail here" className="form-control" />
                      <span className="input-group-addon">
                        <button type="submit">
                          <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <p>&copy; {new Date().getFullYear()} greenstufflk All Rights Reserved.</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <ul className="payment-method">
                  <li><a href="#"><img alt="payment-method" src="img/payment-method1.jpg" /></a></li>
                  <li><a href="#"><img alt="payment-method" src="img/payment-method2.jpg" /></a></li>
                  <li><a href="#"><img alt="payment-method" src="img/payment-method3.jpg" /></a></li>
                  <li><a href="#"><img alt="payment-method" src="img/payment-method4.jpg" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Area End Here */}
      
      {/* Preloader Start Here */}
      <div id="preloader"></div>
      {/* Preloader End Here */}
    </div>
  );
}
