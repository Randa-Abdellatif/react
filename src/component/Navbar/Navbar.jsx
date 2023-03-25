import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  function startClick()
  {
    const portfolioSrc = document.getElementById("Portfolio");
    portfolioSrc.style.backgroundColor = "transparent";

    const aboutSrc = document.getElementById("about");
    aboutSrc.style.backgroundColor = "transparent";

    const contactSrc = document.getElementById("contact");
    contactSrc.style.backgroundColor = "transparent";
  }

  function portfolioClick()
  {
    const contactSrc = document.getElementById("contact");
    contactSrc.style.backgroundColor = "transparent";
    const aboutSrc = document.getElementById("about");
    aboutSrc.style.backgroundColor = "transparent";
    const portfolioSrc = document.getElementById("Portfolio");
    portfolioSrc.style.backgroundColor = "var(--blueLight)";
  }

  function aboutClick()
  {
    const contactSrc = document.getElementById("contact");
    contactSrc.style.backgroundColor = "transparent";
    const portfolioSrc = document.getElementById("Portfolio");
    portfolioSrc.style.backgroundColor = "transparent";
    const aboutSrc = document.getElementById("about");
    aboutSrc.style.backgroundColor = "var(--blueLight)";
  }

  function contactClick()
  {
    const portfolioSrc = document.getElementById("Portfolio");
    portfolioSrc.style.backgroundColor = "transparent";
    const aboutSrc = document.getElementById("about");
    aboutSrc.style.backgroundColor = "transparent";
    const contactSrc = document.getElementById("contact");
    contactSrc.style.backgroundColor = "var(--blueLight)";
  }

  return (
   <>
   <nav className="navbar navbar-expand-lg text-uppercase">
  <div className="container w-75">
    <Link onClick={startClick} id='start' className="navbar-brand text-white" to="/">Start React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-lg-1">
          <Link onClick={portfolioClick} id='Portfolio' className="nav-link py-3 rounded text-white" to="Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item mx-lg-1">
          <Link onClick={aboutClick} id='about' className="nav-link py-3 rounded text-white" to="About">About</Link>
        </li>
        <li className="nav-item mx-lg-1">
          <Link onClick={contactClick} id='contact' className="nav-link py-3 rounded text-white" to="Contact">Contact </Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}
