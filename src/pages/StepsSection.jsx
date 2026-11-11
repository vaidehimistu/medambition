import React from 'react';
import './StepsSection.css';

function StepsSection() {
  const steps = [
    {
      number: 1,
      title: 'Free Introductory Webinar',
      description: 'Kickstart your journey with expert-led sessions tailored to your goals.',
    },
    {
      number: 2,
      title: 'Dedicated Admission Team',
      description: 'Receive personalized support from experienced counsellors who care.',
    },
    {
      number: 3,
      title: 'Comprehensive Preparation Tools',
      description: 'Access curated tools to prepare for entrance exams, interviews, and more.',
    },
    {
      number: 4,
      title: 'Curated Learning Resources',
      description: 'Benefit from handpicked guides, practice materials, and checklists.',
    },
    {
      number: 5,
      title: 'Timely Progress Updates',
      description: 'Stay on track with regular notifications, follow-ups, and status reports.',
    },
    {
      number: 6,
      title: 'End-to-End Mentorship',
      description: 'Enjoy continuous guidance—from application to admission confirmation.',
    },
  ];

  return (
    <section className="steps-wrapper">
      <h2 className="services-title" >Our Services: Your Success</h2>
      <p className="steps-subtitle">
        Our proven, student-focused process takes you from uncertainty to admission with clarity and confidence. 
        Each step is designed to ensure a smooth and successful journey.
      </p>
      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
