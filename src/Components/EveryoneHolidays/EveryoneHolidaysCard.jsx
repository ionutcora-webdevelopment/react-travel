import React from 'react';
import Card from 'react-bootstrap/Card';
import ChevronRight from '../../Assets/Icons/chevron-right.svg';

function EveryoneHolidaysCard(props) {
  return (
    <div className='col-md-6 col-xl-4'>
        <Card className='shadow d-flex flex-sm-row overflow-hidden'>
            <div className='image-div img-hover col-sm-6 d-flex align-items-center justify-content-center px-4 py-5'>
                <h5 className='text-capitalize text-light'>{props.itemTitle}</h5>
            </div>
            <div className='col-sm-6 d-flex align-items-center'>
                <Card.Body className='p-4'>
                    <p className='mb-0 text-capitalize'>{props.itemSubTitle}</p>
                    <p className='price my-2 fw-bold text-green'>{props.itemPrice}</p>
                    <p className='mb-0'>per person</p>
                </Card.Body>
                <img src={ChevronRight} className='me-3' alt="chevron-right" />
            </div>
        </Card>
    </div>
  )
}

export default EveryoneHolidaysCard;