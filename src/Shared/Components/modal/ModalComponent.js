import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./index.scss";

const ModalComponent = ({ show, onHide }) => {
  return (
      <Modal show={show} onHide={onHide} centered>
     
      <Modal.Body>
        
        <h3 className='h3-modal'>Sign out</h3>
        <p>Are you sure you want to Sign Out?</p>
       
        <Button className="btn btn-primary primary-button mb-2" onClick={onHide}>
          Continue
        </Button>
        <Button variant="" className="cancel-button" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Body>

        
      
    </Modal>
  
  );
};

export default ModalComponent;