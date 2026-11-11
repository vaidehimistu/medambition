import React from "react";
import "./FormSubmitted.css";

const FormSubmitted = () => (
  <div className="thank-you-container">
    <h2>🎉 Application Submitted Successfully!</h2>
    <p>
      Thank you for applying with <b>MedAmbition Overseas Education</b>.  
      Our team will review your details and contact you shortly.
    </p>
    <button onClick={() => (window.location.href = "/")}>Return to Home</button>
  </div>
);

export default FormSubmitted;
