import React from 'react';
import Card from 'react-bootstrap/Card';

function NextHolidayCard(props) {
  return (
    <div className='col-md-6 col-lg-4'>
        <Card className='shadow d-flex align-items-center justify-content-end overflow-hidden p-4 border-0 img-hover'>
            <h5 className='text-capitalize text-light text-center'>{props.itemTitle}</h5>
        </Card>
    </div>
  )
}

export default NextHolidayCard;