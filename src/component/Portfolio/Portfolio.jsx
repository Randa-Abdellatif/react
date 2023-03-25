import React from 'react'
import img2 from "../../img/cabin.png"
import img3 from "../../img/cake.png"
import img4 from "../../img/circus.png"
import img5 from "../../img/game.png"
import img6 from "../../img/safe.png"
import img7 from "../../img/submarine.png"
// import $ from "../../../node_modules/jquery.js"

export default function Portfolio() {



  function closeBtn()
  {
    const lightBoxContainer = document.getElementById('lightBoxContainer');
    lightBoxContainer.style.display = "none";
  }

  function details(e)
  {
    const lightBoxContainer = document.getElementById('lightBoxContainer');
    lightBoxContainer.style.display = "flex";

    const imgTarget = document.getElementById('imgTarget');
    imgTarget.setAttribute("src",e)

    console.log(e);

    // $('#lightBoxContainer').removeClass('d-none');
  }

  return (
    <section>
      <div className="container text-center p-5">
        <h2 className="text-uppercase fs-1 fw-bold">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star fs-1"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              onClick={() => {
                details(img2);
              }}
              className="rounded-3 overflow-hidden position-relative"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 ">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
              <img className="img-fluid" src={img2} alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              onClick={() => {
                details(img3);
              }}
              className="rounded-3 overflow-hidden position-relative"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 ">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
              <img className="img-fluid" src={img3} alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              onClick={() => {
                details(img4);
              }}
              className="rounded-3 overflow-hidden position-relative"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 ">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
              <img className="img-fluid" src={img4} alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              onClick={() => {
                details(img5);
              }}
              className="rounded-3 overflow-hidden position-relative"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 ">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
              <img className="img-fluid" src={img5} alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              onClick={() => {
                details(img6);
              }}
              className="rounded-3 overflow-hidden position-relative"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 ">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
              <img className="img-fluid" src={img6} alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              onClick={() => {
                details(img7);
              }}
              className="rounded-3 overflow-hidden position-relative"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 ">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
              <img className="img-fluid" src={img7} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="lightBoxContainer">
        <div id="lightbox">
          <i
            onClick={closeBtn}
            id="closeBtn"
            className="fas fa-times fa-3x"
          ></i>
          <h2 className="text-uppercase fs-1 fw-bold">LOG CABIN</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star fs-1"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
          <img
            id="imgTarget"
            className="img-fluid mb-5 rounded-3"
            src=""
            alt=""
          />
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
            inventore quisquam velit asperiores, vitae? Reprehenderit soluta,
            eos quod consequuntur itaque. Nam.
          </p>
          <button onClick={closeBtn} className="btn" data-dismiss="modal">
            <i className="fas fa-times fa-fw"></i>
            Close Window
          </button>
        </div>
      </div>
    </section>
  );
}
