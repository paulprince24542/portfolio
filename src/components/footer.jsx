import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      {" "}
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-md-3 footer-section-1">
                <h6>ABOUT</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, saepe quas consequuntur quibusdam, accusantium in
                  ab optio fuga dolor veniam magni eius, iusto et adipisci iste
                  tempore praesentium molestias. Dolorum!
                </p>
              </div>
              <div className="col-md-3 social-section">
                <h6>SOCIAL</h6>
                <div
                  className="d-flex justify-content-between"
                  style={{ width: "200px", marginTop: "20px" }}
                >
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </span>
                  <span>
                    <Linkedin />
                  </span>
                  <span>
                    <Mail />
                  </span>
                </div>
              </div>
              <div className="col-md-3 footer-section-1">
                <h6>LINKS</h6>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Projects</p>
              </div>
              <div className="col-md-3 footer-section-1">
                <h6>CONTACT ME</h6>
                <div
                  className="d-flex align-items-center"
                  style={{ color: "grey" }}
                >
                  <MapPin />
                  <div
                    className="d-flex flex-column"
                    style={{ paddingLeft: "30px" }}
                  >
                    <span>Payyappilly House</span>

                    <span>Vappalassery PO</span>

                    <span>Payyappilly House</span>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "20px", color: "grey" }}
                >
                  <Phone />
                  <span style={{ paddingLeft: "30px" }}>+91 9061268071</span>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "20px", color: "grey" }}
                >
                  <Mail />
                  <span style={{ paddingLeft: "30px" }}>
                    paulprince2454@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 text-center pt-2 pb-2"
        style={{ background: "#393e46", color: "white" }}
      >
        <lead>Copyright © 2024 . All Rights Reserved</lead>
      </div>
    </>
  );
}
