import React from 'react';
import "./DropDownBox.css";

const DropdownBox = ({ isVisible, onLinkClick, width }) => {
    return (
        <div className={`dropdown-box ${isVisible ? 'show' : 'hide'}`} style={{ width }}>
            <a href="#" onClick={() => onLinkClick('searchByFlightNumber')}>
                <div className="row"><div className="col col-lg-1 "><i class="fa-solid fa-plane fa-lg ms-1" style={{ color: "#ffffff" }}></i></div>
                    <div className="col col-lg-11"> <span className='ms-1'> Search Flight By Flight Number</span></div>
                </div>
            </a>

            <a href="#" onClick={() => onLinkClick('searchByRoute')}>
                <div className="row"><div className="col col-lg-1 "><i class="fa-solid fa-location-dot fa-lg ms-1"></i></div>
                    <div className="col col-lg-11"> <span className='ms-1'> Search Flight By Route</span></div>
                </div>

            </a>
            <a href="#" onClick={() => onLinkClick('searchByAirline')}>
                <div className="row"><div className="col col-lg-1 "> <i class="fa-solid fa-plane-departure  fa-lg ms-1 "></i></div>
                    <div className="col col-lg-11"> <span className='ms-1'> Search Flight By Airline</span></div>
                </div>
            </a>
        </div>
    );
};

export default DropdownBox;
