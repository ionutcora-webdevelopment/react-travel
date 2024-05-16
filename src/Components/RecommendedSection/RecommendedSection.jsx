import React from 'react';
import './RecommendedSection.css';
import Container from 'react-bootstrap/Container';

function RecommendedSection(props) {
  return (
    <div className='recommended-section'>
        <Container className='position-relative py-5 rounded'>
            <div className='bg-shape position-absolute'>
            </div>
            <div className='row justify-content-end'>
                <div className='col-md-6 col-lg-3 z-2'>
                    <h3 className='text-light text-capitalize fw-semibold'>{props.itemRecommendedTitle}</h3>
                    <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, laboriosam.</p>
                    <a className='text-light text-capitalize text-decoration-none fw-semibold' href="/">Book now</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default RecommendedSection;