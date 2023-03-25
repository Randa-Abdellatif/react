import React from 'react'

export default function About() {
  return (
    <section id='About'>
      <div className="container text-white p-5">
            <h2 className='text-uppercase fs-1 fw-bold text-center'>About</h2>
            <div className='divider-custom divider-light'>
              <div className='divider-custom-line'></div>
              <div className='divider-custom-icon'>
                <i className='fas fa-star fs-1'></i>
              </div>
              <div className='divider-custom-line'></div>
            </div>

            <div className="row">
              <div className="col-lg-4 ms-auto">
                <p className='lead'>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
              </div>
              <div className="col-lg-4 me-auto">
                <p className='lead'>
                You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                </p>
              </div>
            </div>
      </div>
    </section>
  )
}
