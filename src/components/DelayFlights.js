import React from 'react'
import "../components/delayFlights.css"

export default function DelayFlights() {
    return (
        <>
            <div className='col-lg-3 delay-wrapper m-3'>
                <div className="card-container">
                    <div className="card">
                        <div className='d-flex align-content-center justify-content-center'>
                            <span className="fs-4 fw-bold">Delay in Flights</span>
                            <span className='ms-2 d bg-warning text-white live px-2 pt-2'>LIVE</span>
                        </div>
                        <div className="item-list">
                            <div className='item'>
                                <div className="row">
                                    <div className="col fw-bold fs-5">1. BH804</div>
                                    <div className="col text-end fw-bold text-warning"> Arrival Delay </div>
                                </div>
                                <div className="row">
                                    <div className=" col fw-bold">Dhaka - DXB</div>
                                    <div className="col text-end fw-bold text-success"> 15 Min</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
