import React from "react";
import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ color: "white" }}>
            Portfolio
          </a>
          {/* <button>
            <span class="navbar-toggler-icon"></span>
          </button> */}

          <Menu
            size={34}
            color="#fcfcfd"
            type="button"
            className="d-md-none"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="collapsed-navbar" style={{ width: "100%" }}>
              <ul
                class="navbar-nav"
                // style={{ width: "100%" }}
              >
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
