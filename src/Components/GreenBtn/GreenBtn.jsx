import React from 'react';
import './GreenBtn.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GreenBtn(props) {
  return (
    <Button id='green-btn'>
        <Link to={props.btnLink} className='text-decoration-none text-light text-capitalize'>{props.btnTitle}</Link>
    </Button>
  )
}

export default GreenBtn;