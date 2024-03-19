import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./MainNavigation.scss"
import FooterNavLinks from './FooterNavLinks';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="bg-body-tertiary Main-Nav footerNavBar">
      <Container className='footerNav'>
          

        <FooterNavLinks/>

          
      </Container>
    </Navbar>
  );
}

export default Footer;