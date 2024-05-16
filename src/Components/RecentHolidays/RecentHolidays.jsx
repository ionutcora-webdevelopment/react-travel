import React from 'react';
import './RecentHolidays.css';
import Container from 'react-bootstrap/Container';
import RecentHolidaysItems from '../../Assets/RecentHolidaysItems';
import RecentHolidayCard from './RecentHolidayCard';

function RecentHolidays() {
  return (
    <div className='recent-holidays my-4 my-sm-5'>
        <Container>
            <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Recent holidays</h2>
            <div className='row g-4'>
                {
                    RecentHolidaysItems.map((item) => <RecentHolidayCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemDescription={item.itemDescription} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default RecentHolidays;