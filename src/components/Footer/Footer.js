import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const styles = {
  textDecoration: "none",
  paddingLeft: "0.5em",
  color: "#fac87b",
};

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer footer-dark">
        <div className="footer-addr">
          <h1 className="footer-logo">ITESA</h1>
          <a
            href="https://www.google.com/maps/place/D.Y.+Patil+College+of+Engineering/@18.6448433,73.7559978,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2b9f1ca8dab03:0x6237cfbd36f9acf9!8m2!3d18.6448433!4d73.7581865"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i> D Y Patil College Of
            Engineering, Akurdi, Pune
            <br />
          </a>
          <div className="info">
            ITESA is a community of students from D.Y Patil College of
            Engineering, Akurdi – Information Technology Department with diverse
            fields including but not limited to Technical, Cultural, Management,
            etc.
          </div>
        </div>
        <ul className="footer-nav">
          <li className="item">
            <h2 className="title">Navigation</h2>

            <ul className="ul-links">
              <li>
                <Link to="/technical-team">Technical Team</Link>
              </li>
              <li>
                <Link to="/management-team">Management Team</Link>
              </li>

              <li>
                <Link to="/cultural-team">Cultural Team</Link>
              </li>

              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </li>

          <li className="item">
            <h2 className="title">Other</h2>

            <ul className="ul-links">
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="title">Social</h2>
            <ul className="ul-links">
              <p style={{ fontSize: "0.9rem" }}>
                Do follow us on social platforms
              </p>
            </ul>
            <div className="col col">
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/company/itesa-dyp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <i className="fab fa-linkedin fa-lg fa-linkedin-own "></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:itesa.dyp@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <i className="fas fa-envelope fa-lg fa-envelope-own"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ITESA-DYPCOE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <i className="fab fa-github fa-lg fa-github-own"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/itesa.dyp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <i className="fab fa-instagram fa-lg fa-instagram-own"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="footer-dash footer-dash-dark">
          <div className="footer-text footer-text-dark">
            <p>Copyright © ITESA DYPCOE 2021</p>
          </div>
        </div>
      </footer>
      <div className="creator-text creator-text-dark">
        <h5 className="creator">
          Developed with ❤️ by
          <a
            href="https://www.linkedin.com/in/shubham-jadhav-77a588192"
            target="_blank"
            rel="noreferrer"
            style={styles}
          >
            SJ &
          </a>
          <a
            href="https://www.linkedin.com/in/charudutta-chaudhari-a980661a0/"
            target="_blank"
            rel="noreferrer"
            style={styles}
          >
            Charu
          </a>
        </h5>
      </div>
    </React.Fragment>
  );
};

export default Footer;
