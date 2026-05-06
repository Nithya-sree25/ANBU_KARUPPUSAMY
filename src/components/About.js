import React from "react";
import "./About.css";
import profile from "../assets/sir_photo.png";  // add your image

function About() {
  return (
    <section className="about">

      {/* PROFILE IMAGE */}
      <div className="about-header">
        <img src={profile} alt="profile" />
        <h1>About Dr. S.ANBU KARUPPUSAMY</h1>
      </div>

      
        <div className="about-card">
          <h2>Personal Ambition</h2>
          <p>
            I want to improve my international reputation as an avid promoter of 
  Educational technology to help students fuse theory and practice.
          </p>
        </div>
      <div className="about-card">
          <h2>Field of Specialization</h2>
          <ul className="specialized">
            <li>Wireless Sensor Networks</li>
            <li>Internet of Things (IoT)</li>
            <li>Artificial Intelligence</li>
            <li>Networking</li>
          </ul>
        </div>
        <div className="about-card">
  <h2>Technical Skills</h2>

  <div className="skills-two">

    <div className="skill-box">
      <h4>HDL</h4>
      <p>VHDL and Verilog</p>
    </div>

    <div className="skill-box">
      <h4>Simulation Tool</h4>
      <p>MATLAB, Ns.3</p>
    </div>

    <div className="skill-box">
      <h4>Synthesis Tool</h4>
      <p>Xilinx</p>
    </div>

    
    <div className="skill-box">
      <h4>Sheet Metal CAM Software</h4>
      <p>MEDA CAM</p>
    </div>

   
  </div>
</div>
<div className="about-card">
  <h2>Academic Experience</h2>

  <div className="experience-dashboard">

    <div className="experience-row">
      <div className="exp-year">2022 – Present</div>

      <div className="exp-details">
        <h3>Professor & Dean Administration</h3>
        <p>Excel Engineering College, Namakkal</p>
      </div>
    </div>

    <div className="experience-row">
      <div className="exp-year">2015 – 2022</div>

      <div className="exp-details">
        <h3>Professor & HOD</h3>
        <p>Excel Engineering College, Namakkal</p>
      </div>
    </div>

    <div className="experience-row">
      <div className="exp-year">2014 – 2015</div>

      <div className="exp-details">
        <h3>Professor & HOD</h3>
        <p>R.V.S.College of Engg & Tech,Dindigul</p>
      </div>
    </div>

    <div className="experience-row">
      <div className="exp-year">2011 – 2014</div>

      <div className="exp-details">
        <h3>ASP & HOD</h3>
        <p>SVHEC Engineering College, Gobi</p>
      </div>
    </div>

    <div className="experience-row">
      <div className="exp-year">2009 – 2011</div>

      <div className="exp-details">
        <h3>Assistant Professor</h3>
        <p>Sasurie College of Engineering,Tirupur</p>
      </div>
    </div>

    <div className="experience-row">
      <div className="exp-year">2004 – 2009</div>

      <div className="exp-details">
        <h3>Assistant Professor</h3>
        <p>Nandha Engineering College,Erode</p>
      </div>
    </div>

    <div className="experience-row">
      <div className="exp-year">2003 – 2004</div>

      <div className="exp-details">
        <h3>Lecturer</h3>
        <p>E.V.P Engineering College,Chennai</p>
      </div>
    </div>

  </div>
</div>
      <div className="about-card">
  <h2>Educational Profile</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>April 2021</h4>
        <p>
          <strong>D.Sc – Doctor of Science in ECE</strong>
        </p>
        <p>
          College of Engineering, Srinivas University, Mangalore
        </p>
        <p>
          Srinivas University – Highly Commended
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>May 2014</h4>
        <p>
          <strong>Ph.D – Information & Communication Engineering (ECE)</strong>
        </p>
        <p>
          Anna University, Chennai, TN, India
        </p>
        <p>
          Anna University Chennai – Highly Commended
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>May 2006</h4>
        <p>
          <strong>M.E – Applied Electronics (ECE)</strong>
        </p>
        <p>
          Kongu Engineering College, Erode, TN, India
        </p>
        <p>
          Anna University Chennai – 66%
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>April 2002</h4>
        <p>
          <strong>B.E – ECE</strong>
        </p>
        <p>
          Bharath Niketan Engineering College, Madurai, TN, India
        </p>
        <p>
          Madurai Kamaraj University – 69%
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>April 1998</h4>
        <p>
          <strong>H.S.C – Maths & Biology</strong>
        </p>
        <p>
          Carmel Matric Hr. Sec School, Erode, TN, India
        </p>
        <p>
          Matric Board – 73%
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>April 1996</h4>
        <p>
          <strong>S.S.L.C – Matric</strong>
        </p>
        <p>
          Jaycees Matric Hr. Sec School, Erode, TN, India
        </p>
        <p>
          Matric Board – 72%
        </p>
      </div>
    </div>

  </div>
</div>

    
 
    <div className="about-card">
  <h2>Personal Details</h2>

 <div className="personal-details">

  <p>
    <strong>Fathers Name</strong>
    <span>C.Shanmugam</span>
  </p>

  <p>
    <strong>Date of Birth</strong>
    <span>12.09.1979</span>
  </p>

  <p>
    <strong>Linguistic Fluency</strong>
    <span>Tamil, English</span>
  </p>

  <p>
    <strong>Marital Status</strong>
    <span>Married</span>
  </p>

  <p>
    <strong>Religion/Nationality</strong>
    <span>Hindu</span>
  </p>

  <p>
    <strong>Nationality</strong>
    <span>Indian</span>
  </p>

</div>
</div>

    </section>
  );
}

export default About;