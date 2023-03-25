import React from 'react'
import img1 from "../../img/avataaars.svg"

export default function Home() {
  return (
    <>
    <div className="home d-flex align-items-center justify-content-center vh-100">
        <div className='container text-center text-white'>
          {/* <img className='w-25' src="img\avataaars.svg" alt="" /> */}
          <img className='w-25' src={img1} alt="" />
            <h1 className='text-uppercase display-1 fw-bold'>Start React</h1>
            <div className='divider-custom divider-light'>
              <div className='divider-custom-line'></div>
              <div className='divider-custom-icon'>
                <i className='fas fa-star fs-1'></i>
              </div>
              <div className='divider-custom-line'></div>
            </div>
            <p className='font-weight-light fs-4'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
    
    
  )
}
