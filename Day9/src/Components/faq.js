import React, { useState } from 'react';
import './Css/faq.css';
import { Navbar } from './nav';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Moneybase?',
      answer:
      'We are a DISTRIBUTOR of Financial Products! And Yes, we get brokerage for each financial transaction.But the good point here is, we would like to be transparent about it. From a mere 0.02% p.a. for an overnight fund to a 1% p.a. for equity funds, our revenue is pegged to your investment growth. We are paid this brokerage not upfront but monthly by the product manufacturers.So, unlike others who brag about being flat-fee based, discount brokerage and bla bla bla, we really add value to our clients investment portfolio. How do we do it?'
    },
    {
      question: 'What are the benefits of investing through Moneybase?',
      answer:
      'Moneybase is an online investment platform that aims to provide an efficient and ethical investment service to individuals and small businesses. Our platform will allow investors from all income brackets to invest their savings ethically and efficiently, by becoming an informed-investor.'
    },
    {
      question: 'How is Moneybase different from other robo-advisors?',
      answer:
      'Moneybase is an assisted Robo-investment platform – meaning a registered and licensed person will assist you in how to use the platform and guide you in how to select a product from the financial products listed in the platform, based on one’s risk-appetite. There will be a dedicated one-point-contact so that all our investor clients get to talk to a human instead of an IVRS, when in need! On the services front, we have people dedicated to cater to the specific requirements. We have created an army of Retirement Specialists, NRI Specialists, Shari ah Specialists, and Specialists servicing focused groups like Doctors and Women Investors.Moneybase also has a B2B2C model – brand named as Moneybase Nexus where we have partnered with Individual Financial Advisors (IFAs) across the country thereby cross-utilising our strengths.' 
    },
    {
      question: 'Why should I buy the securities/products through Moneybase instead of direct purchase?',
      answer:
      'While you may be able to buy the funds/products directly, or through your broker, you may not be able to get the proper service and support in a cost-effective and efficient manner. One can open a Free-account with Moneybase and can start investing with as minimum as INR 1000. Moneybase also monitors the portfolio performance and periodically helps rebalance it for no additional cost.More importantly, one may not be able to open an account anywhere else in the same seamless manner as one does with Moneybase. With Moneybase’s advanced technology, one can open an account online within a few minutes, and get access to different asset classes and can start investing in domestic and global funds.'
        },
        {
          question: 'What is the minimum investment required to become a client of Moneybase?',
          answer:
          'Registration with Moneybase is free of cost. However, a minimum investment of INR 1000 is required for one to start investing through Moneybase.'
        },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
        <Navbar />
    <div className="faq-page">
      <br></br><br></br><br></br><br></br>
      <div className='container'>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
      </div>
    
    </div>
    </div>
  );
};

export default FAQPage;