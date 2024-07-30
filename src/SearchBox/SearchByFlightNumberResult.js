import React, { useState } from 'react'
import "./SearchByFlightNumberResult.css"
import indigo from "../assets/Indigo.png"
import StatusCard from '../components/StatusCard';

export default function SearchByFlightNumberResult({ isVisible, onClose, width, onLinkClick, data, onSendData }) {
    const [statusCardData, setStatusCardData] = useState('');

    const formatTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };

    const handleResultClick = (e) => {
        onSendData(e);
        console.log(e.id);
    }

    return (
        <> <div
            className={`additional-box2 searchByFlightNumberResult-box ${isVisible ? "show" : "hide"}`}
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

            {data.length==0 &&
                <div className="p-3 pt-2 col col-12 text-center">
                    <span className='text-white '> No Data Exists</span>
                </div>
            }

            {data && data.map((item) => (
                <div key={item.id} className="p-3 pt-2 col col-12 result-box" onClick={() => handleResultClick(item)}>
                    <div className="mb-1 mx-2">
                        <div className="row bg-dark ">
                            <div className="col col-3 align-content-center text-white border-2 border-white border-end text-start">
                            <span> {item.airline.name}</span>
                            </div>
                            <div className="col col-9">
                                <div className='row h-100'>
                                    <div className="col col-6 text-white align-content-center text-start"><span className='fs-5'>{item.flightNumber}</span> <br /> {item.departureAirport.code} - {item.arrivalAirport.code}</div>
                                    <div className="col col-6 text-white align-content-center text-end"> <span className='fw-bold'> {item.flightStatus.status} </span> <br /> <span>{formatTime(item.scheduledDepartureTime)}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}

            
        </div>
        </>
    )
}
