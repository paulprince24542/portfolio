import React from "react";

export default function Skills() {
  return (
    <div className="skill-wrapper">
      <h1 className="skill-header">Skills</h1>
      <div className="skill-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3 skill-content-wrap active">
              <img src="/images/js.png" alt="" />
              <h1>Node JS</h1>
              <p>
                Node.js is a JavaScript runtime built on Chrome's V8 engine,
                facilitating server-side execution.
              </p>
            </div>
            <div className="col-md-3 skill-content-wrap">
              <img src="/images/library.png" alt="" />
              <h1>React JS</h1>
              <p>
                React.js is a JavaScript library for building user interfaces,
                emphasizing component-based architecture
              </p>
            </div>
            <div className="col-md-3 skill-content-wrap">
              <img src="/images/python.png" alt="" />
              <h1>Python</h1>
              <p>
                Python is a versatile, high-level programming language renowned
                for its simplicity and readability.
              </p>
            </div>

            <div className="col-md-3 skill-content-wrap">
              {/* <h1><span>Machine</span><br></br><span>Learning</span></h1> */}
              <img src="/images/brain.png" alt="" />
              <h1>Machine Learning</h1>
              <p>
                {" "}
                Machine learning leverages algorithms to enable systems to learn
                from data and make predictions or decisions.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
