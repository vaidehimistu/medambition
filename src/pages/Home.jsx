import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import "./Home.css";

import StepsSection from "./StepsSection";
import MissionVisionSection from "./MissionVisionSection";
import TopUniversitiesCarousel from "./TopUniversitiesCarousel";
import FaqSection from "./FaqSection";
import Contact from "./Contact";

import medical from "../assets/medical.jpg";
import dental from "../assets/dental.jpg";
import eng from "../assets/eng.jpg";
import mba from "../assets/mba.jpg";

function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [showIndia, setShowIndia] = useState(false);
  const [showAbroad, setShowAbroad] = useState(false);
  const location = useLocation();

  // ------------------ Registration Form State ------------------
  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    notes: "",
  });

  const handleRegChange = (e) => {
    setRegForm({ ...regForm, [e.target.name]: e.target.value });
  };

  // ------------------ Scroll On Nav Click ------------------
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section)
        setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);

  return (
    <>
      {/* ====================== HERO SECTION ===================== */}
      <section className="hero-section">
        <div className="floating-grid">
          <div className="float-card"><img src={medical} alt="" /></div>
          <div className="float-card"><img src={dental} alt="" /></div>
          <div className="float-card"><img src={eng} alt="" /></div>
          <div className="float-card"><img src={mba} alt="" /></div>
        </div>

        <div className="hero-right">
          <h1>Make Your Dreams Fly to International Universities 🌍</h1>
          <p>
            Are you looking for the best overseas/national education consultants?
            You are at the right place.
            At <b>MedAmbition</b>, we guide you to study MBBS, Dental, Engineering, and MBA —
            with full support from admission to visa.
          </p>

          <div className="hero-buttons">
            <button className="btn primary" onClick={() => setShowRegister(true)}>
              Register Me Now
            </button>
            <button className="btn secondary" onClick={() => setShowIndia(true)}>
              Top MBBS Colleges in India
            </button>
            <button className="btn tertiary" onClick={() => setShowAbroad(true)}>
              Top MBBS Colleges Abroad
            </button>
          </div>
        </div>
      </section>

      {/* ==================== REGISTER POPUP ==================== */}
      {showRegister && (
        <div className="popup-overlay" onClick={() => setShowRegister(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowRegister(false)}>
              <X size={24} />
            </button>

            <h2>Admission Registration Form</h2>
            <p className="subtext">
              Fill all required details to begin your admission process.
            </p>

            {/* ==================== FORMSPREE FORM ==================== */}
            <form
              action="https://formspree.io/f/xnnljool" // <-- Replace with your Formspree ID
              method="POST"
              className="popup-form"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                required
                value={regForm.name}
                onChange={handleRegChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                value={regForm.email}
                onChange={handleRegChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number*"
                required
                value={regForm.phone}
                onChange={handleRegChange}
              />

              <input
                type="text"
                name="city"
                placeholder="City*"
                required
                value={regForm.city}
                onChange={handleRegChange}
              />

              <select
                name="course"
                required
                value={regForm.course}
                onChange={handleRegChange}
              >
                <option value="">Choose Course*</option>
                <option value="mbbs">MBBS</option>
                <option value="dental">Dental</option>
                <option value="engineering">Engineering</option>
                <option value="mba">MBA</option>
              </select>

              <textarea
                name="notes"
                placeholder="Additional Notes (Optional)"
                rows="3"
                value={regForm.notes}
                onChange={handleRegChange}
              ></textarea>

              <button type="submit" className="apply-btn">
                Submit Application
              </button>
            </form>

            <p>
              Email:{" "}
              <a href="mailto:info@medambition.com">info@medambition.com</a>,{" "}
              <a href="mailto:medambition85@gmail.com">medambition85@gmail.com</a>
            </p>
          </div>
        </div>
      )}

      {/* ==================== MBBS INDIA POPUP ==================== */}
      {/* ==================== MBBS INDIA POPUP ==================== */}
{showIndia && (
  <div className="popup-overlay" onClick={() => setShowIndia(false)}>
    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setShowIndia(false)}>
        <X size={24} />
      </button>

      <h2>Top MBBS Colleges in India</h2>
      <p className="subtext">Explore the best medical institutions in India.</p>

      <div className="college-list">
        <table>
          <thead>
            <tr>
              <th>College Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>All India Institute of Medical Sciences</td><td>New Delhi</td></tr>
            <tr><td>Christian Medical College</td><td>Vellore</td></tr>
            <tr><td>Institute of Medical Sciences, Banaras Hindu University</td><td>Varanasi</td></tr>
            <tr><td>Amrita Institute of Medical Sciences & Research</td><td>Kochi</td></tr>
            <tr><td>Jawaharlal Institute of Post Graduate Medical Education & Research</td><td>Puducherry</td></tr>
            <tr><td>Kasturba Medical College</td><td>Manipal</td></tr>
            <tr><td>King George's Medical University</td><td>Lucknow</td></tr>
            <tr><td>Madras Medical College and Government General Hospital</td><td>Chennai</td></tr>
            <tr><td>Sri Ramachandra Institute of Higher Education And Research</td><td>Chennai</td></tr>
            <tr><td>St. John's Medical College</td><td>Bengaluru</td></tr>
            <tr><td>Aligarh Muslim University</td><td>Aligarh</td></tr>
            <tr><td>Christian Medical College</td><td>Ludhiana</td></tr>
            <tr><td>JSS Medical College</td><td>Mysore</td></tr>
            <tr><td>M. S. Ramaiah Medical College</td><td>Bengaluru</td></tr>
            <tr><td>Govt. Medical College & Hospital</td><td>Chandigarh</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}


   {showAbroad && (
  <div className="popup-overlay" onClick={() => setShowAbroad(false)}>
    <div className="popup-box abroad-popup" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setShowAbroad(false)}>
        <X size={24} />
      </button>

      <h2>Top MBBS Universities Abroad</h2>
      <p className="subtext">Turn your dream of studying MBBS abroad into reality! Explore top universities with MedAmbition.</p>

      <div className="abroad-grid">
        {/* Column 1 */}
        <div className="country-card">
          <h4>Europe & Asia</h4>
          <div className="country-item">
            <a href="/mbbs-russia" className="country-link">Russia</a>
            <span className="badge">Best in 2025</span>
          </div>
          <div className="country-item">
            <span>Kazakhstan</span>
            <span className="badge">Best in 2025</span>
          </div>
          <div className="country-item">
            <span>Georgia</span>
          </div>
          <div className="country-item">
            <span>Uzbekistan</span>
            <span className="badge">Best in 2025</span>
          </div>
          <div className="country-item">
            <span>Mauritius</span>
          </div>
          <div className="country-item">
            <span>Nepal</span>
            <span className="badge">Best in 2025</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="country-card">
          <h4>Other Countries</h4>
          <div className="country-item">
            <span>Bangladesh</span>
            <span className="badge">Best in 2025</span>
          </div>
          <div className="country-item"><span>Kyrgyzstan</span></div>
          <div className="country-item"><span>Philippines</span></div>
          <div className="country-item"><span>Italy</span></div>
          <div className="country-item"><span>Germany</span></div>
          <div className="country-item"><span>Egypt</span></div>
        </div>
      </div>
    </div>
  </div>
)}



      {/* Other Sections */}
      <section id="services">
        <StepsSection />
      </section>
      <section id="vision">
        <MissionVisionSection />
      </section>
      <section id="courses">
        <TopUniversitiesCarousel />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
