import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./index.scss";
import bgImage from '../../../Assets/Images/live-bg.png';
import playBtn from '../../../Assets/Images/play-btn.png';
import ModelBtns from '../ModelButtons/ModelBtns';

const NowLiveComponet = ({ page, para, onclick }) => {
  return (
    <div>
      <div className='nowlive-container' style={{ backgroundImage: `url(${bgImage})` }} >

        <div className="liveFlag" >
          Now Live
        </div>
        <img src={playBtn} alt='' />
        <div className='content'>
          <h2>Live Now</h2>
          <p>September 14, 2024</p>
        
        </div>
        {page == true && (
          <div className='blur-overlay'></div>
        )}

      </div>
      {page == true && (
        <div className='extras'>
          <ModelBtns onclick={onclick} />
          <p className='cardDescription'>{para}</p>
        </div>
      )}
    </div>
  );
};
export default NowLiveComponet;