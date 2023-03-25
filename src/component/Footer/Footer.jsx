import React from 'react'

export default function Footer() {
  return (
    <footer className='text-center text-white p-0 m-0'>
      <div className="footer-first p-5">
        <div className="container">
        <div className="row align-content-center justify-content-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className='text-uppercase mb-4'>Location</h4>
            <p className='lead mb-0'>2215 John Daniel Drive</p>
            <p className='lead mb-0'>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className='text-uppercase mb-4'>Around the Web</h4>
            <a className='btn btn-outline-light btn-social mx-1'>
              <i className='fab fa-fw fa-facebook-f'></i>
            </a>
            <a className='btn btn-outline-light btn-social mx-1'>
              <i className='fab fa-fw fa-twitter'></i>
            </a>
            <a className='btn btn-outline-light btn-social mx-1'>
              <i className='fab fa-fw fa-linkedin-in'></i>
            </a>
            <a className='btn btn-outline-light btn-social mx-1'>
              <i className='fab fa-fw fa-dribbble'></i>
            </a>
          </div>
          <div className="col-lg-4">
            <h4 className='text-uppercase mb-4'>About Freelancer</h4>
            <p className='lead mb-0'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className=" footer-second p-4">
        <small>Copyright © Your Website 2021</small>
      </div>
    </footer>
  )
}
