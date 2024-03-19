import React from "react";
import "./index.scss"
import FaqAccordion from "../../../Shared/Components/Accordion/FaqAccordion";

const faqItems = [
  {
    question: 'How do I cancel my subscription?',
    answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
  },
  {
    question: 'FAQ 2',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'FAQ 3',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  },
  {
    question: 'FAQ 4',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  },
  {
    question: 'FAQ 5',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  },
 
];


const HelpCenter = () =>{
    
    return (
        <React.Fragment>
         <div  className="profileHeading mb-5">
           <h2>Help Center</h2>
           </div>
          
      
             <FaqAccordion faqItems={faqItems} />
            
          
        </React.Fragment>
    );
}

export default HelpCenter;