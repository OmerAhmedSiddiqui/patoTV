import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavLinks.css';
import ButtonBox from '../UIElements/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from './Search';
import { ReactComponent as ProfileIcon } from '../../Assets/Images/profile.svg';



const NavLinks = props => {

  // const[logedIn,setlogedIn]=useState(true);

  
  const logedIn = props.login;
  
  useEffect(()=>{
    
    // var navbar = document.getElementsByClassName('navbar-nav')[0].childNodes
    // navbar.forEach((value,key)=>{
    //   if(value.href == window.location.href){
    //     value.className = "nav-link active"
    //   }
    // })
     ;
  },[])
  return (
    
    <React.Fragment>
     {console.log(logedIn)}
       <Nav className="me-auto"
       >

      {logedIn ?
     
     <React.Fragment>
      <Link to="/dashboard" className="nav-link">Home</Link>
      <Link to="/video-on-demand" className="nav-link">Video on Demand</Link>
      <Link to="/live" className="nav-link">Live Videos</Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
      </React.Fragment>
    
    
      : <div></div> }
      </Nav>
      

<Nav>{logedIn ? <div className='searchProfileWrap'><div><SearchBar/></div><div><Link to="/profile"><ProfileIcon/></Link></div></div> :
  <Link to="/login"><ButtonBox className="primary-button" text="Sign In"/></Link>
}
          </Nav>
</React.Fragment>
)};

export default NavLinks;