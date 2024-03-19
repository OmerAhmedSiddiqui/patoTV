import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavLinks.css';
import ButtonBox from '../UIElements/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from './Search';
import { ReactComponent as ProfileIcon } from '../../Assets/Images/profile.svg';
import fb from '../../Assets/Images/fb.svg';
import insta from '../../Assets/Images/insta.svg';
import Twitter from '../../Assets/Images/Twitter.svg';
import youtube from '../../Assets/Images/youtube.svg';



const FooterNavLinks = props => {

  // const[logedIn,setlogedIn]=useState(true);

  const logedIn = true;

  return (

    <React.Fragment>
      <div className='social-icons'>
        <img src={fb} alt='' />
        <img src={insta} alt='' />
        <img src={Twitter} alt='' />
        <img src={youtube} alt='' />

      </div>
      <Nav >

        {logedIn ?
          <div className='footer-container'>
            <div className='footer-links-container'>
              <div>
                <React.Fragment>
                  <Nav.Link href="/" >Audio Description</Nav.Link>
                  <Nav.Link href="/">Investor Relations</Nav.Link>
                  <Nav.Link href="/">Privacy</Nav.Link>
                  <Nav.Link href="/">Contact Us</Nav.Link>
                </React.Fragment>
              </div>
              <div>
                <React.Fragment>
                  <Nav.Link href="/" >Help Center</Nav.Link>
                  <Nav.Link href="/">Jobs</Nav.Link>
                  <Nav.Link href="/">Legal Notices</Nav.Link>
                </React.Fragment>
              </div>
              <div>
                <React.Fragment>
                  <Nav.Link href="/" >Gift Cards</Nav.Link>
                  <Nav.Link href="/">Netflix Shop</Nav.Link>
                  <Nav.Link href="/">Cookie Preferences</Nav.Link>
                </React.Fragment>
              </div>
              <div>
                <React.Fragment>
                  <Nav.Link href="/" >Media Center</Nav.Link>
                  <Nav.Link href="/">Terms Of Use</Nav.Link>
                  <Nav.Link href="/">Corporate Information</Nav.Link>
                </React.Fragment>
              </div>
            </div>
            <div className='serviceCode'>
              Service Code
            </div>
          </div>

          : <div></div>}
      </Nav>

      <div className='copyWrite'>
      © 1997-2024 Netflix, Inc. 
      </div>


    </React.Fragment>
  )
};

export default FooterNavLinks;