import React, { useEffect } from "react";
import "./MissionVisionSection.css";
import { FaGlobe, FaUserGraduate, FaHandsHelping } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function MissionVisionSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="med-section">
      <div className="med-container">
        <h2 className="med-heading" data-aos="fade-up">
          Top Overseas Medical Education Consultants in Bangalore
        </h2>
        <p className="med-intro" data-aos="fade-up" data-aos-delay="150">
          <strong>MedAmbition</strong> is your trusted gateway to pursue MBBS
          and medical education across globally recognized universities. We
          specialize in guiding students through every step — from counselling
          and admission to visa and travel assistance — ensuring a stress-free
          journey toward your dream medical career abroad.
        </p>

        <div className="med-grid">
          <div className="med-card" data-aos="zoom-in-up">
            <FaUserGraduate className="med-icon" />
            <h3>Why Choose MedAmbition?</h3>
            <p>
              With over a decade of excellence, we have guided hundreds of
              medical aspirants to universities in{" "}
              <strong>Russia, Philippines, Bangladesh, Germany, and the USA</strong>.
              Our transparent process, expert mentoring, and partnerships with
              MCI/NMC-approved universities make us one of Bangalore’s most
              reliable consultants.
            </p>
          </div>

          <div className="med-card" data-aos="zoom-in-up" data-aos-delay="200">
            <FaGlobe className="med-icon" />
            <h3>Global Opportunities</h3>
            <p>
              Pursue <strong>MBBS Abroad</strong> with world-class education,
              affordable fees, and global exposure. We partner with top
              universities in <strong>India, Russia, Italy, Georgia, Belarus, Ukraine, Philippines, and the USA</strong>,
              helping you earn a globally recognized medical degree.
            </p>
          </div>

          <div className="med-card" data-aos="zoom-in-up" data-aos-delay="400">
            <FaHandsHelping className="med-icon" />
            <h3>Our Mission</h3>
            <p>
              To empower every medical aspirant with genuine guidance and
              personalized mentorship. Our mission is to make overseas medical
              education accessible, transparent, and affordable — turning your
              dream of becoming a doctor into a global reality.
            </p>
          </div>
        </div>

        <div className="med-bottom" data-aos="fade-up" data-aos-delay="300">
          <h3>Is It Good to Study MBBS Abroad?</h3>
          <ul>
            <li>✅ Affordable tuition and living costs compared to India</li>
            <li>✅ Global recognition and exposure to modern medical systems</li>
            <li>✅ English-medium universities approved by MCI/NMC</li>
            <li>✅ Clinical internships with top international hospitals</li>
          </ul>
          <p>
            After completing your MBBS, clear the <strong>FMGE / NExT</strong>{" "}
            exam and begin your medical career in India or abroad — guided by
            <strong> MedAmbition</strong>, your trusted overseas education partner.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;
