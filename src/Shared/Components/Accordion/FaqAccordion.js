// FaqAccordion.js
import React from 'react';
import "./index.scss";
import Accordion from 'react-bootstrap/Accordion';

const FaqAccordion = ({ faqItems }) => {
  return (
    <div className="accordion" id="faqAccordion">
      
{faqItems.map((item, index) => (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="1">
      <Accordion.Header>{item.question}</Accordion.Header>
      <Accordion.Body>
      {item.answer}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
      ))}
    </div>


  );
};

export default FaqAccordion;
