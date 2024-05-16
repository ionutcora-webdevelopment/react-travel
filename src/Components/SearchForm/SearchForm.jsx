import React, { useRef } from 'react';
import './SearchForm.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm() {

    const checkInRef = useRef();
    const checkOutRef = useRef();

  return (
    <div className='position-relative'>
        <Container>
            <Form className='search-form d-lg-flex align-items-center justify-content-center mx-auto p-4 mt-4 mt-lg-0 z-2 rounded'>
                <div className='col-lg-2'>
                    <Form.Select>
                        <option>Search place</option>
                        <option value="1">London</option>
                        <option value="2">Dubai</option>
                        <option value="3">Paris</option>
                    </Form.Select>
                </div>
                <div className='col-lg-2 mx-lg-3 my-2 my-lg-0'>
                    <Form.Select>
                        <option>Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className='col-lg-2'>
                    <Form.Control type='text' ref={checkInRef} placeholder='Check-in date' onFocus={() => (checkInRef.current.type = 'date')} onBlur={() => (checkInRef.current.type = 'date')} />
                </div>
                <div className='col-lg-2 mx-lg-3 my-2 my-lg-0'>
                    <Form.Control type='text' ref={checkOutRef} placeholder='Check-out date' onFocus={() => (checkOutRef.current.type = 'date')} onBlur={() => (checkOutRef.current.type = 'date')} />
                </div>
                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default SearchForm;