import React from "react";
import "./index.scss";
import  { useState } from 'react';
import Tabs from './Tab';
import Content from './Content';
import { ReactComponent as EditProfileIcon } from '../../Assets/Images/editProfile.svg';
import { ReactComponent as EditPasswordIcon } from '../../Assets/Images/password.svg';
import { ReactComponent as HelpIcon } from '../../Assets/Images/help.svg';
import { ReactComponent as SignoutIcon } from '../../Assets/Images/signout.svg';
import { Col, Container, Row } from "react-bootstrap";
import ModalComponent from '../../Shared/Components/modal/ModalComponent';


const Profile = () =>{
    const [selectedContent, setSelectedContent] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  const tabs = [
    { label: 'Edit Profile', icon:<EditProfileIcon/>},
    { label: 'Change Password', icon:<EditPasswordIcon/> },
    { label: 'Help', icon:<HelpIcon/> },
    
  ];

  const handleTabSelect = (index) => {

    setSelectedContent(index);
  };
  
    return (
        <React.Fragment>
            <Container fluid className="d-flex editProfileWrap">            
                 <Row xs={12} className="w-100">
                    <Col xs={6}>
                        <Row className="mb-5 profileHeading"><h2>Account</h2></Row>
                 <Tabs tabs={tabs} onSelect={handleTabSelect} />


                <div>
                <div className="overlay" style={{ display: showModal ? 'block' : 'none' }} onClick={handleCloseModal}></div>
                <div class="tab"  onClick={handleShowModal}>
                
                   <div class="tabicon" >
                      <SignoutIcon />
                   </div>Sign Out
                      
                </div>
                <ModalComponent show={showModal} onHide={handleCloseModal} />
                </div>




                 </Col>
                 
                 <Col xs={6}>
                 
                 <Content tab={selectedContent} />
                 </Col>
                 </Row>
            </Container>

        </React.Fragment>
    );
}

export default Profile;