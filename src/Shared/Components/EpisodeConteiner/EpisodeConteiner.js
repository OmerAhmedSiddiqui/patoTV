import React from 'react';
import "./EpisodeConteiner.scss";
import EpisodeImage from './EpisodeImage';
import playBtn from '../../../Assets/Images/play-btn.png';

const EpisodeConteiner = ({title,duration,description,imgSrc}) => {
  return (
    <div className='episodeContainer'>
      <EpisodeImage  imgSrc={imgSrc}  />
    
      <div className='episodeContent'>
        <h3 className='episodeTiltle'>{title} <span className='episodeDuration'>{duration}</span></h3>
        <p className='episodeDescription'>{description}</p>
      </div>
    </div>
  );
};

export default EpisodeConteiner;