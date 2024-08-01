import React, { useEffect, useState } from 'react'
import "../components/delayFlights.css"
import { calculateFlightDelay, getAllFlights } from '../service/FlightService';
import { Link } from 'react-router-dom';

export default function DelayFlights({onItemClick}) {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const getFlights = async () => {
            try {
                const res = await getAllFlights();
                const allFlights = res.data;
                setFlights(allFlights);
                // console.log(allFlights);

                // Filter delayed flights and log them
            } catch (error) {
                console.log(error);
            }
        };

        getFlights();
    }, []);

    const delayedFlights = flights.filter((flight) => flight.flightStatus.status === 'Delayed' || flight.flightStatus.status === 'Cancelled');
    console.log(delayedFlights);

    // const cancelledFlights = flights.filter((flight) => flight.flightStatus.status === 'Cancelled');
    // console.log(cancelledFlights);



    return (
        <>
            <div className='col-lg-3 delay-wrapper m-3'>
                <div className="card-container">
                    <div className="card">
                        <div className='d-flex align-content-center justify-content-center'>
                            <span className="fs-4 fw-bold">Delay in Flights</span>
                            <span className='ms-2 d bg-warning text-white live px-2 pt-2'>LIVE</span>
                        </div>

                        {delayedFlights.map((flight) => (
                            <div className="item-list" key={flight.id}>
                                    <div className='item' onClick={()=> onItemClick(flight)} style={{cursor: "pointer"}}>
                                        <div className="row">
                                            <div className="col fw-bold fs-5 text-start">{flight.flightNumber}</div>
                                            {flight.flightStatus.status === "Delayed" &&
                                                <div className="col text-end fw-bold text-warning"> {flight.flightStatus.status} </div>
                                            }
                                            {flight.flightStatus.status === "Cancelled" &&
                                                <div className="col text-end fw-bold text-danger"> {flight.flightStatus.status} </div>
                                            }

                                        </div>
                                        <div className="row">
                                            <div className=" col fw-bold text-start"> {flight.departureAirport.code} - {flight.arrivalAirport.code} </div>
                                            {flight.flightStatus.status === 'Delayed' &&
                                                <div className="col text-end fw-bold text-success"> {calculateFlightDelay(flight.scheduledDepartureTime, flight.actualDepartureTime)}</div>
                                            }

                                        </div>
                                    </div>
                            </div>
                        ))}

                        {/* {cancelledFlights.map((flight) => (
                            <div className="item-list" key={flight.id}>
                                <div className='item'>
                                    <div className="row">
                                        <div className="col fw-bold fs-5 text-start">{flight.flightNumber}</div>
                                        <div className="col text-end fw-bold text-danger"> {flight.flightStatus.status} </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col fw-bold text-start"> {flight.departureAirport.code} - {flight.arrivalAirport.code} </div>
                                        <div className="col text-end fw-bold text-success"> </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>

            </div>
        </>
    )
}
