import React from 'react';
import './NextHoliday.css';
import Container from 'react-bootstrap/Container';
import NextHolidayItems from '../../Assets/NextHolidayItems';
import NextHolidayCard from './NextHolidayCard';

function NextHoliday() {
  return (
    <div className='next-holiday-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Your next holiday</h2>
            <div className="row g-4">
                {
                    NextHolidayItems.map((item) => <NextHolidayCard key={item.id} itemTitle={item.itemTitle} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default NextHoliday;