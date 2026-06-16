import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/faq.css';

export default function FAQ() {
  const navigate = useNavigate();

  const faqList = [
    {
      question: 'How Do I add a new device?',
      answer: 'Go to device, click Add Device and follow the on-screen instructions to connect your Smart device'
    },
    {
      question: 'How Do I reset my Password?',
      answer: 'On the sign-in page, click “Forgot password?” and follow the instructions to receive a reset link'
    },
    {
      question: 'How Do I Invite a guest?',
      answer: 'Navigate to Users, select Invite Guest, and enter their email address to send an invitation'
    },
    {
      question: 'Is my Data secure?',
      answer: 'All data is encrypted and protected with industry standard security protocols'
    }
  ];

  return (
    <div className="faq-container">
    

      <h2 className="faq-title">Frequently Asked question</h2>

      <div className="faq-grid">
        {faqList.map((item, index) => (
          <div key={index} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
