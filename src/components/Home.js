import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/sir_photo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">

      {/* LEFT SIDE */}
      <div className="home-left">
        <p className="intro">Hi there 👋, I'm</p>

        <h1 className="name">Dr.S.ANBU KARUPPUSAMY</h1>

        {/* MOBILE IMAGE */}
        <div className="mobile-image">
          <img src={profile} alt="profile" />
        </div>

        <h3 className="roles"> ECE Professor | Dean Administration</h3>

        <p className="description">
          I am a senior academic leader and researcher with 23+ years of experience in higher education, academic administration, and research in Electronics and Communication Engineering. Specialized in Wireless Sensor Networks, IoT, AI, and Networking, with expertise in curriculum development, accreditation, and institutional growth. An accomplished researcher with 60+ SCI/SCOPUS/UGC publications, patents, book publications, and doctoral supervision, committed to innovation and technology-driven education.
        </p>

        <button
          className="connect-btn"
          onClick={() => navigate("/contact")}
        >
          Let's get together
        </button>
      </div>

      {/* RIGHT SIDE (DESKTOP ONLY) */}
      <div className="home-right">
        <img src={profile} alt="profile" />
      </div>

    </section>
  );
}

export default Home;