import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span></span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faHome} className="me-3" /> PickupTruck
              </h6>
              <p>
              PickupTruck is a transport-related product, likely focusing on freight, logistics, or vehicle management. It could be a platform for booking trucks, a fleet management system, or a marketplace connecting truck owners with customers
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p><a href="#" className="text-reset">Ride  </a></p>
              <p><a href="#" className="text-reset">Drive</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#" className="text-reset">Pricing</a></p>
              <p><a href="#" className="text-reset">Settings</a></p>
              <p><a href="#" className="text-reset">Orders</a></p>
              <p><a href="#" className="text-reset">Help</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FontAwesomeIcon icon={faHome} className="me-3" /> Noida sector 18 </p>
              <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> info@pickuptruck.com</p>
              <p><FontAwesomeIcon icon={faPhone} className="me-3" /> +91 9234967201</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> pickuptruck.com</a>
      </div>
    </footer>
  );
};

export default Footer;