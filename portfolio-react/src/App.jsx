import "./App.css";
import profile from "./assets/profile.jpg";
import oracle from "./assets/oracle.jpg";
import internship from "./assets/internship.jpg";



import { useState } from "react";

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>

      {/* Navbar */}

      <nav className="navbar">

        <h2 className="logo">Portfolio</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      {/* Hero */}

      <section className="hero" id="home">

        <div className="left">

          <h3>Hello, I'm</h3>

          <h1>Dharshana A</h1>

          <h2>Full Stack Developer</h2>

          <p>
            Passionate Computer Science and Technology student with
            strong interest in Full Stack Web Development.
            I enjoy building responsive and user-friendly websites.
          </p>

          <button>Download Resume</button>

        </div>

        <div className="right">

          <img
            src={profile}
            alt="Profile"
          />

        </div>

      </section>

      {/* About */}

      <section
        className="about"
        id="about"
      >

        <h2>About Me</h2>

        <p>
          Hi, I'm <span>Dharshana A</span>,
          pursuing B.E. Computer Science and Technology.
          I love creating modern websites using
          HTML, CSS and JavaScript.
        </p>

        <div className="about-box">

          <div className="box">
            <h3>Education</h3>
            <p>B.E Computer Science and Technology</p>
          </div>

          <div className="box">
            <h3>Internship</h3>
            <p>Full Stack Web Development Intern</p>
          </div>

          <div className="box">
            <h3>Experience</h3>
            <p>Frontend Development</p>
          </div>

        </div>

      </section>
            {/* Skills */}

      <section className="skills" id="skills">

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>HTML</h3>

            <div className="progress">
              <div className="html"></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>

            <div className="progress">
              <div className="css"></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>

            <div className="progress">
              <div className="js"></div>
            </div>
          </div>

        </div>

      </section>

      {/* Projects */}

      <section className="projects" id="projects">

        <h2>My Projects</h2>

        <div className="project-container">

          <div className="project-card">

            <h3>Quiz Application</h3>

            <p>
              A Java-based quiz application that allows users
              to answer multiple-choice questions and displays
              the final score after completion.
            </p>

          </div>

          <div className="project-card">

            <h3>Temperature Converter</h3>

            <p>
              A Java application used to convert temperature
              values between Celsius, Fahrenheit and Kelvin
              with a simple user interface.
            </p>

          </div>

        </div>

      </section>
            {/* Certificates */}

      <section className="certificates" id="certificates">

        <h2>Certificates</h2>

        <div className="certificate-container">

          <div
            className="certificate-card"
            onClick={() => setSelectedImage(oracle)}
          >
            <h3>Oracle AI Foundation Associate</h3>
            <p>Click to View Certificate</p>
          </div>

          <div
            className="certificate-card"
            onClick={() => setSelectedImage(internship)}
          >
            <h3>Full Stack Web Development Internship</h3>
            <p>Click to View Certificate</p>
          </div>

          <div
            className="certificate-card"
            onClick={() => setSelectedImage(ibm)}
          >
            
          </div>

        </div>

      </section>

      {/* Certificate Popup */}

      {selectedImage && (

        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Certificate"
            className="modal-image"
          />

        </div>

      )}
            {/* Contact */}

      <section className="contact" id="contact">

        <h2>Contact Me</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/xbdvvvol"
          method="POST"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* Connect With Me */}

      <section className="social">

        <h2>Connect With Me</h2>

        <div className="social-icons">

          <a
            href="https://github.com/dharshuanandhan2006-create"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dharshana-a-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:dharshuanandhan2006@gmail.com">
            Email
          </a>

        </div>

      </section>
            {/* Footer */}

      <footer className="footer">

        <p>© 2026 Dharshana A | All Rights Reserved.</p>

      </footer>

    </>
  );
}

export default App;