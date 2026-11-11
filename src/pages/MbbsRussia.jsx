import React from "react";
import { Link } from "react-router-dom";
import "./MbbsRussia.css";

function MbbsRussia() {
  return (
    <div className="mbbs-russia-page">
      {/* Hero Section */}
      <div className="page-hero">
        <h1>Study MBBS in Russia 2025-26</h1>
        <p>
          For many Indian students, pursuing MBBS abroad is an attractive and affordable option. Russian medical universities offer a globally recognized curriculum, affordable fees, and practical internships.
        </p>
        <Link to="/contact" className="btn primary">
          Get Free Counseling
        </Link>
      </div>

      {/* Overview */}
      <section className="overview">
        <h2>Why Choose Russia for MBBS?</h2>
        <ul>
          <li>Globally recognized MBBS degree</li>
          <li>Affordable tuition & living costs</li>
          <li>English medium programs available</li>
          <li>No donation or capitation fees</li>
          <li>Indian mess & hostel facilities</li>
          <li>One-year practical internship included</li>
        </ul>
      </section>

      {/* MBBS Details */}
      <section className="mbbs-details">
        <h2>MBBS in Russia - Key Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Course Duration</td>
              <td>6 years</td>
            </tr>
            <tr>
              <td>Eligibility</td>
              <td>NEET qualified, PCB ≥50%</td>
            </tr>
            <tr>
              <td>Mode of Teaching</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Fees</td>
              <td>₹ 20-25 Lakhs</td>
            </tr>
            <tr>
              <td>Living Cost</td>
              <td>₹ 10,000-15,000 per month</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Ruble</td>
            </tr>
            <tr>
              <td>Flight Duration (Delhi to Moscow)</td>
              <td>6-7 hours</td>
            </tr>
            <tr>
              <td>Major Cities</td>
              <td>Moscow, Kazan, St. Petersburg</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Universities Table */}
      <section className="universities">
        <h2>Top MBBS Universities in Russia 2025-26</h2>
        <table>
          <thead>
            <tr>
              <th>University Name</th>
              <th>Tuition Fees</th>
              <th>Hostel Charges</th>
              <th>Total Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kabardino-Balkarian State University</td>
              <td>2,45,500 Rub</td>
              <td>12,000 Rub</td>
              <td>17.56 Lakh</td>
            </tr>
            <tr>
              <td>Ural State Medical University</td>
              <td>2,60,000 Rub</td>
              <td>16,000 Rub</td>
              <td>18.63 Lakh</td>
            </tr>
            <tr>
              <td>Kazan Federal University</td>
              <td>4,75,000 Rub</td>
              <td>18,000 Rub</td>
              <td>31.03 Lakh</td>
            </tr>
            <tr>
              <td>Petrozavodsk University</td>
              <td>2,85,000 Rub</td>
              <td>18,000 Rub</td>
              <td>19.64 Lakh</td>
            </tr>
            <tr>
              <td>Tver State Medical University</td>
              <td>3,50,000 Rub</td>
              <td>20,000 Rub</td>
              <td>23.96 Lakh</td>
            </tr>
            {/* Add remaining universities similarly */}
          </tbody>
        </table>
      </section>

      {/* Admission Procedure */}
      <section className="admission-procedure">
        <h2>Admission Procedure</h2>
        <ol>
          <li>Check NEET eligibility (minimum 50% PCB marks)</li>
          <li>Choose a university & submit application</li>
          <li>Prepare required documents (Passport, 10th, 12th, NEET score)</li>
          <li>Get admission confirmation & visa guidance</li>
          <li>Travel & join classes in Russia</li>
        </ol>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Need Assistance?</h2>
        <p>Contact MedAmbition for free personalized counseling.</p>
        <p>Call: +91-9742809502 | WhatsApp: +91-9742809502</p>
      </section>
    </div>
  );
}

export default MbbsRussia;
