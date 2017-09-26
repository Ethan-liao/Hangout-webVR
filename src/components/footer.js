import React from 'react';
import './../CSS/bootstrap.css'
import '../CSS/App.css'

class Footer extends React.Component {
  render() {
    return (
<footer class="page-footer center-on-small-only unique-color-dark pt-0">

        <div style="background-color: #6351ce;">
          <div class="container">
            {/* <!--Grid row--> */}
            <div class="row py-4 d-flex align-items-center">

              {/* <!--Grid column--> */}
              <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-md-6 col-lg-7 text-center text-md-right">
                {/* <!--Facebook--> */}
                <a class="icons-sm fb-ic ml-0">
                  <i class="fa fa-facebook white-text mr-lg-4"></i>
                </a>
                {/* <!--Twitter--> */}
                <a class="icons-sm tw-ic">
                  <i class="fa fa-twitter white-text mr-lg-4"></i>
                </a>
                {/* <!--Google +--> */}
                <a class="icons-sm gplus-ic">
                  <i class="fa fa-google-plus white-text mr-lg-4"></i>
                </a>
                {/* <!--Linkedin--> */}
                <a class="icons-sm li-ic">
                  <i class="fa fa-linkedin white-text mr-lg-4"></i>
                </a>
                {/* <!--Instagram--> */}
                <a class="icons-sm ins-ic">
                  <i class="fa fa-instagram white-text mr-lg-4"></i>
                </a>
              </div>
              {/* <!--Grid column--> */}

            </div>
            {/* <!--Grid row--> */}
          </div>
        </div>

        {/* <!--Footer Links--> */}
        <div class="container mt-5 mb-4 text-center text-md-left">
          <div class="row mt-3">

            {/* <!--First column--> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mb-r">
              <h6 class="title font-bold">
                <strong>Company name</strong>
              </h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              {/* <!--/.First column-->

              <!--Second column--> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r">
                <h6 class="title font-bold">
                  <strong>Products</strong>
                </h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                  <p>
                    <a href="#!">MDBootstrap</a>
                  </p>
                  <p>
                    <a href="#!">MDWordPress</a>
                  </p>
                  <p>
                    <a href="#!">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!">Bootstrap Angular</a>
                  </p>
                </div>
                {/* <!--/.Second column--> */}

                {/* <!--Third column--> */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-r">
                  <h6 class="title font-bold">
                    <strong>Useful links</strong>
                  </h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                    <p>
                      <a href="#!">Your Account</a>
                    </p>
                    <p>
                      <a href="#!">Become an Affiliate</a>
                    </p>
                    <p>
                      <a href="#!">Shipping Rates</a>
                    </p>
                    <p>
                      <a href="#!">Help</a>
                    </p>
                  </div>
                  {/* <!--/.Third column--> */}

                  {/* <!--Fourth column--> */}
                  <div class="col-md-4 col-lg-3 col-xl-3">
                    <h6 class="title font-bold">
                      <strong>Contact</strong>
                    </h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                      <p>
                        <i class="fa fa-home mr-3"></i>
                        New York, NY 10012, US</p>
                      <p>
                        <i class="fa fa-envelope mr-3"></i>
                        info@example.com</p>
                      <p>
                        <i class="fa fa-phone mr-3"></i>
                        + 01 234 567 88</p>
                      <p>
                        <i class="fa fa-print mr-3"></i>
                        + 01 234 567 89</p>
                    </div>
                    {/* <!--/.Fourth column--> */}

                  </div>
                </div>
                {/* <!--/.Footer Links--> */}

                {/* <!-- Copyright--> */}
                <div class="footer-copyright">
                  <div class="container-fluid">
                    © 2017 Copyright:
                    <a href="https://www.MDBootstrap.com">
                      <strong>
                        MDBootstrap.com</strong>
                    </a>
                  </div>
                </div>
              </footer>
            )
          }
        }
export default Footer;
