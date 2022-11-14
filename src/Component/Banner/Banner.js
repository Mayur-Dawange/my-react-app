import React from 'react'


const Banner = () => {
  return (
  <>

    <div style={{ paddingLeft: 0 }}>
      <div
        className='text-center bg-image'
        style={{height: 400 }}
      >
        <div className='mask h-100' style={{ backgroundColor: 'rgb(0 0 0 / 51%)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Banner