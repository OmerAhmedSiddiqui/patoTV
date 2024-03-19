import React from 'react';
import "./index.scss";
import Button from 'react-bootstrap/Button';




const ButtonBox = props => {
  return  <Button className={props.className}  onClick={props.onclick ? ()=>props.onclick() : ()=>console.log('btn') } >{props.text}{props.svg}<img src={props.FavouritIcon} alt=''/></Button>;
 
};

export default ButtonBox;