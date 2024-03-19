import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./MoreLikeThis.scss";
import MoreLikeThisContainerSuggetion from './MoreLikeThisContainerSuggetion'
import suggestion1 from '../../../Assets/Images/suggestion1.png';
import suggestion2 from '../../../Assets/Images/suggestion2.png';
import suggestion3 from '../../../Assets/Images/suggestion3.png';
import suggestion4 from '../../../Assets/Images/suggestion4.png';
import suggestion5 from '../../../Assets/Images/suggestion5.png';
import suggestion6 from '../../../Assets/Images/suggestion6.png';


const MoreLikeThis = ({ show, onHide }) => {
  return (
   <div className='MoreLikeThisContainer'>
        <h3>More Like this</h3>
        <div className='suggetion'>
          <MoreLikeThisContainerSuggetion imgSrc={suggestion1} title={'Push to Pass'} />
          <MoreLikeThisContainerSuggetion imgSrc={suggestion2} title={'Pato Podcast'} />
          <MoreLikeThisContainerSuggetion imgSrc={suggestion3} title={'Onboard Laps'} />
          <MoreLikeThisContainerSuggetion imgSrc={suggestion4} title={'Series 4'} />
          <MoreLikeThisContainerSuggetion imgSrc={suggestion5} title={'Series 5'} />
          <MoreLikeThisContainerSuggetion imgSrc={suggestion6} title={'Series 3'} />
          
        </div>
       

   </div>
  );
};

export default MoreLikeThis;