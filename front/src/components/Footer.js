import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-white" style={{ backgroundColor: '#333' }}>
          {/* Grid container */}
          <div className="container pt-4">
            {/* Social Media Section */}
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-white m-2"
                href="#!"
                role="button"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-white m-2"
                href="#!"
                role="button"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-white m-2"
                href="#!"
                role="button"
                aria-label="Google"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-white m-2"
                href="#!"
                role="button"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-white m-2"
                href="#!"
                role="button"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-white m-2"
                href="#!"
                role="button"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
            {/* End of Social Media Section */}

            {/* Footer Links Section */}
            <section>
              <Row className="text-white">
                <Col md={4}>
                  <h5>About</h5>
                  <ul className="list-unstyled">
                    <li><a href="#!" className="text-white">Our Story</a></li>
                    <li><a href="#!" className="text-white">Team</a></li>
                    <li><a href="#!" className="text-white">Careers</a></li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h5>Contact</h5>
                  <ul className="list-unstyled">
                    <li><a href="#!" className="text-white">Support</a></li>
                    <li><a href="#!" className="text-white">Contact Us</a></li>
                    <li><a href="#!" className="text-white">FAQ</a></li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h5>Follow Us</h5>
                  <ul className="list-unstyled">
                    <li><a href="#!" className="text-white">Newsletter</a></li>
                    <li><a href="#!" className="text-white">Blog</a></li>
                  </ul>
                </Col>
              </Row>
            </section>
            {/* End of Footer Links Section */}
          </div>
          {/* End of Grid container */}

          {/* Copyright Section */}
          <div className="text-center text-white p-3" style={{ backgroundColor: '#222' }}>
            <span>© 2025 Your Company | All Rights Reserved.</span>
          </div>
          {/* End of Copyright Section */}
        </footer>
      </div>
    </div>
  );
}
