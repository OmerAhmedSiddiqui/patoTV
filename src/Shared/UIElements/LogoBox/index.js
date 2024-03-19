import React from 'react';
import "./index.scss"
import { Link } from 'react-router-dom';




const LogoBox = props => {
  return <Link to={props.to}><img src={props.src} alt="Logo" /></Link>;
};

export default LogoBox;