import React, { useState } from 'react';
import './FaqSection.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "What is NEET Counselling, and why is it important?",
    answer:
      "NEET counselling allocates seats in medical and dental colleges based on the NEET exam rank. It's crucial because it determines a student's admission to these courses, impacting their future career in healthcare.",
  },
  {
    question: "How can MedAmbition assist me in the NEET counselling process?",
    answer:
      "MedAmbition offers personalized guidance, expert strategies, and real-time updates to help you navigate the NEET counselling process efficiently.",
  },
  {
    question: "Who are the counselling experts at MedAmbition?",
    answer:
      "Our experts include experienced academic advisors, doctors, and NEET specialists with years of counselling success stories.",
  },
  {
    question: "Can MedAmbition help with both NEET UG and NEET PG counselling?",
    answer:
      "Yes, we support students through both NEET UG and PG counselling with tailored support and dedicated advisors.",
  },
  {
    question: "How do I get started with MedAmbition?",
    answer:
      "Simply register on our website or contact our team. We'll assign you a dedicated mentor who will guide you step-by-step.",
  },
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Got a question? We have the answers!</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
