import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoBox from "../UIElements/LogoBox/index"
import Logo from "../../Assets/Images/logo.svg"
import "./MainNavigation.scss"
import NavLinks from './NavLinks';


  const CollapsibleExample = props => {

  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="bg-body-tertiary Main-Nav">
      <Container fluid>
        
        <LogoBox src={Logo} to="/"/>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
       
        <NavLinks login={props.login}/>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;