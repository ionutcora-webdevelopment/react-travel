import React from 'react';
import '../CityBreaksSection/CityBreaksSection.css';
import Container from 'react-bootstrap/Container';
import AfricaDestinationsItems from '../../Assets/AfricaDestinationsItems';
import CityBreakCard from '../CityBreaksSection/CityBreakCard';

function AfricaDestinationsSection() {
  return (
    <div className='city-break-section my-4 my-sm-5'>
        <Container>
            <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Africa</h3>
            <div className='row g-4'>
                {
                    AfricaDestinationsItems.map((item) => <CityBreakCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemSubTitle={item.itemSubTitle} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default AfricaDestinationsSection;