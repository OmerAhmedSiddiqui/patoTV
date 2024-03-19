import React from 'react';
import "./index.scss";
import { Button } from 'react-bootstrap';
import ButtonBox from '../../UIElements/Button';

const Banner = ({ imageUrl, svg,FavouritIcon }) => {
  const divStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '80vh', // Set height as needed
    backgroundPosition: 'center',
    position:'relative',
  };
  return (
    <div style={divStyle} className='heroTextWrap'>
     <div className='herotext'>
        <div><h2>Push to Pass - Season 1</h2></div>
        <div><p>Behind the scenes with Pato</p></div>
        <div className='heroBtnWrap'>
            <div><ButtonBox text="Play" className="primary-button" svg={svg} /></div>
            <div className="outline-btn"><ButtonBox text="Add to Favorites" FavouritIcon={FavouritIcon}/></div>
        </div>
     </div>
     
    </div>
  );
};

export default Banner;