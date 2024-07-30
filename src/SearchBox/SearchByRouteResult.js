import React from 'react'
import "./SearchByRouteResult.css"
import indigo from "../assets/Indigo.png"

export default function SearchByRouteResult({ isVisible, onClose, width, onLinkClick }) {
  return (
    <div><div>
      <div
        className={`additional-box2 routeResultBox-box ${isVisible ? "show" : "hide"}`}
        style={{ width }}
      >
        <div className="text-end">
          <button className="close-btn" onClick={onClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="">
          <p className="text-center text-white fw-bold pb-0 pt-4">
            Select your Flight
          </p>
        </div>

        <div className="p-3 pt-2 col col-12">
          <div className="mb-1 mx-2">
            <div className="row bg-dark ">
              <div className="col col-2 align-content-center bg-white">
                <img className='img-fluid ' src={indigo} alt="" />
              </div>
              <div className="col col-10">
                <div className='row h-100'>
                  <div className="col col-6 text-white align-content-center text-start"><span className='fs-5'>BH804</span> <br /> Dhaka - DXB</div>
                  <div className="col col-6 text-white align-content-center text-end">Scheduled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}
