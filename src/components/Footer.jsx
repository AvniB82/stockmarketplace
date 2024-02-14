import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footerContainer fixed-bottom bg-light p-3 mt-5'>
      <div className='text-center text-lg-start bg-body-tertiary text-muted footer-section '>
        {/*Section: Social media */}
        {/* Section: Links  */}
        <section className=''>
          <div className='container text-center text-md-start mt-0'>
            {/* Grid row */}
            <div className='row mt-3'>
              {/* Grid column */}
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-0'>
                {/* Content */}
                <h6 className='text-uppercase fw-bold mb-0 '>
                  <i className='fas fa-city me-3'></i>STOCK MARKET PLACE
                </h6>
                <p>
                  We instantly deliver to you the most up-to-date product stocks
                  you are curious about.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-0'>
                {/* Links */}
                <h6 className='text-uppercase fw-bold mb-0'>Follow Us</h6>
                <p>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                    <FontAwesomeIcon icon={faInstagram} className='me-2' />
                  </a>
                </p>
                <p>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-facebook'></i>
                    <FontAwesomeIcon icon={faFacebook} className='me-2' />
                  </a>
                </p>
                <p>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-twitter'></i>
                    <FontAwesomeIcon icon={faTwitter} className='me-2' />
                  </a>
                </p>
                <p>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-youtube'></i>
                    <FontAwesomeIcon icon={faYoutube} className='me-2' />
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div
                className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-0'
                id='footerLinks'
              >
                {/* Links */}
                <h6 className='text-uppercase fw-bold mb-0'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    FAQs
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    About Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-0'>
                {/* Links */}
                <h6 className='text-uppercase fw-bold mb-0'>Contact</h6>
                <p>
                  <i className='fas fa-home me-1'></i> 1 London, London Street,
                  UK
                </p>
                <p>
                  <i className='fas fa-envelope me-1'></i>
                  hello@stockmarketplace.com
                </p>
                <p>
                  <i className='fas fa-phone me-1'></i> + 000 555 55 55
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div
          className='text-center p-2'
          style={{ backgroundColor: 'rgb(190, 190, 190)' }}
        >
          <p>
            &copy; Website created by POD 8, EdX Front End Development Course
            2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
