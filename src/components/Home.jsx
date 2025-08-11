import React from "react";
import logoImg from "../assets/aero.png";
import droneImg from "../assets/image.png";
import Box from "../assets/box.svg";
import Clip from "../assets/clipboard.svg";

export default function Home() {
  return (
    <section className="landing-container">
      <h1 className="landing-heading">Welcome to Dronix Ecosystem</h1>

      <div className="landing-grid">
        <div className="landing-logo">
          <img src={logoImg} alt="Aero360" className="logo-img" />
        </div>

        <div className="landing-drone">
          <img src={droneImg} alt="Drone" className="drone-img" />
        </div>

        <div className="landing-cards">
          <a
            href="http://148.135.138.195/"
            rel="noopener noreferrer"
            className="landing-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="card-title">IPMS</span>
            <div className="card-icon">
              <img src={Box} alt="Drone" className="drone-img" />
            </div>
          </a>

          <a
            href="http://148.135.138.195/app2/"
            rel="noopener noreferrer"
            className="landing-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="card-title">DTMS</span>
            <div className="card-icon">
              <img src={Clip} alt="Drone" className="drone-img" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
