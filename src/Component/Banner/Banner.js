import React from 'react'
import './banner.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Banner = () => {
  return (
  <>
    <div style={{ paddingLeft: 0 }}>
      <div
        className='text-center bg-image'
        style={{height: 400 }}>
        <div className='mask h-100 overlay'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Restaurants</h1>
              <h4 className='mb-3'>Test Your best</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* simple section used here */}
<Container>
    <Card className='border-0 py-3'>
      {/* <Card.Header>Featured</Card.Header> */}

      <Card.Body className='py-5'>
        <h2>About</h2>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text className='text-cards'>
          With supporting text below as a natural lead-in to additional content.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum consequatur optio amet illum. Doloremque voluptas soluta tempore natus iure!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Container>
    </>
  )
}

export default Banner