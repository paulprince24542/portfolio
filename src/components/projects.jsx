import React from "react";

export default function Projects() {
  return (
    <div className="project-wrapper">
      <h1 className="project-header">Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="p-card">
              <h1>CTIM Lab</h1>
              <div style={{ textAlign: "center" }}>
                {" "}
                <p>
                  System for analysing the depth and intensity of pothole using
                  deep learning. Report generation of the analysed pothole.
                </p>
                <a className="btn" href="ctimlab.in">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="p-card">
              <h1>Pothole Detection</h1>
              <div style={{ textAlign: "center" }}>
                {" "}
                <p>
                  System for analysing the depth and intensity of pothole using
                  deep learning. Report generation of the analysed pothole.
                </p>
                <a className="btn" href="ctimlab.in">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="p-card">
              <h1>Centralized Medical Record System</h1>
              <div style={{ textAlign: "center" }}>
                {" "}
                <p>
                  Medico is an open-source project that provide a comprehensive
                  solution for medical assistance.
                </p>
              </div>
              <a className="btn" href="ctimlab.in">
                Visit Project
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="p-card">
              <h1>E-Commerce Application API</h1>
              <div style={{ textAlign: "center" }}>
                {" "}
                <p>
                  An API for an e-commerce website to streamline transactions,
                  manage inventory, and enhance user experience.
                </p>
              </div>
              <a className="btn" href="ctimlab.in">
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
