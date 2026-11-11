import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SubmissionSuccess.css";

function SubmissionSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <h1>🎉 Thank You for Applying!</h1>
      <p>Your application has been received successfully.</p>
      <p>Our MedAmbition admissions team will contact you shortly.</p>
      <p>Redirecting to homepage...</p>
    </div>
  );
}

export default SubmissionSuccess;
