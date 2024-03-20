import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavLinks.css';
import ButtonBox from '../UIElements/Button';
import { Link,useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from './Search';
import { ReactComponent as ProfileIcon } from '../../Assets/Images/profile.svg';



const NavLinks = props => {

  // const[logedIn,setlogedIn]=useState(true);

  
  const logedIn = props.login;
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    
    <React.Fragment>
     {console.log(logedIn)}
       <Nav className="me-auto"
       >

      {logedIn ?
     
     <React.Fragment>
      <Link  to="/dashboard" className={splitLocation[1] === "dashboard" ? " nav-link active" : "nav-link"}>Home</Link>
      <Link activeClassName='is-active'  to="/video-on-demand" className={splitLocation[1] === "video-on-demand" ? " nav-link active" : "nav-link"}>Video on Demand</Link>
      <Link activeClassName='is-active' to="/live" className={splitLocation[1] === "live" ? " nav-link active" : "nav-link"}>Live Videos</Link>
      <Link activeClassName='is-active' to="/favorites" className={splitLocation[1] === "favorites" ? " nav-link active" : "nav-link"}>Favorites</Link>
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