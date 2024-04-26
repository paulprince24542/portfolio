import { motion } from "framer-motion";
import React from "react";

import Footer from "./footer";

export default function Hero() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 hero-section-2">
            <img src="/images/hero-4.png" alt="" />
          </div>
          <div className="col-md-6 hero-section-1">
            <div className="hero-content-wrapper">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: [100, 0] }}
                transition={{ duration: "1", delay: ".2" }}
                className=""
              >
                <h1 className="hero-header">Paul Prince</h1>
                <h1 className="stack-header">
                  <span style={{ color: "red" }}>Freelance</span> Developer
                </h1>
                <h3>
                  <span>
                    Passionate Curious{" "}
                    <span style={{ color: "red" }}>Stubborn</span>
                  </span>
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 about-image">
              <motion.img
                initial={{ x: 100 }}
                animate={{ x: [100, 0] }}
                transition={{ duration: ".8", delay: ".1" }}
                src="/images/hero-3.png"
                alt=""
              />
            </div>
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: [100, 0] }}
              transition={{ duration: ".8", delay: ".1" }}
              className="col-md-6 about-content"
            >
              <h3>About Me</h3>
              <p>
                I'm a passionate developer on a perpetual journey of learning
                and creating. With a keen eye for detail and a knack for
                problem-solving, I thrive in the ever-evolving landscape of
                technology.My expertise spans across a variety of technologies,
                Whether it's building sleek front-end interfaces or architecting
                complex back-end systems, I love diving into the intricacies of
                code to bring ideas to life.I'm driven by a relentless curiosity
                and a desire to make an impact. I'm not just content with
                writing code; I'm passionate about understanding the problem
                domain, collaborating with stakeholders, and delivering
                solutions that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
      {/* <div className="quote">
        <h1>
          <span style={{ color: "red" }}>Failures</span> are the most important
          thing in your life. <br></br>
          Because<span style={{ color: "red" }}> Success</span> doesn't teach
          you as much it boost your ego.
        </h1>
        <div className="d-flex justify-content-end" style={{ width: "73%" }}>
          <span>Virat Kohli</span>
        </div>
      </div> */}
    </>
  );
}
