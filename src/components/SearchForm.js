import React from 'react'
import "./searchForm.css";

export default function SearchForm() {
    return (
        <>
            <div className='col-lg-3 border border-1 border-black search-form m-3'>
                <div className='text-center p-3 bg-black text-white'><span className='fw-bold'>Search By Flight</span></div>
                <div className='p-3 search-box'>

                    <form>
                        <div className="mb-1">
                            <label for="airline" className="form-label  mb-1 text-grey">Airline</label>
                            <select className="form-select bg-dark text-white border-0" aria-label="Default select example">
                                <option selected>Select your Airline</option>
                                <option value="1">Indigo</option>
                                <option value="2">Spicejet</option>
                                <option value="3">Emirates</option>
                            </select>
                        </div>
                        <div className="mb-1">
                            <label for="flightNumber" className="form-label mb-1">Flight Number</label>
                            <input type="text" className="form-control bg-dark text-white border-0" id="flightNumber" />
                        </div>
                        <div className="mb-1">
                            <label for="airline" className="form-label mb-1">Date</label>
                            <select className="form-select bg-dark text-white border-0" aria-label="Default select example">
                                <option selected>Select Date</option>
                                <option value="1">27 July 2024</option>
                                <option value="2">28 July 2024</option>
                                <option value="3">29 July 2024</option>
                            </select>
                        </div>
                        <div className='text-center mt-2'>
                            <button type="submit" className="btn btn-dark text-white text">Submit</button>
                        </div>
                    </form>



                </div>
            </div>
        </>
    )
}
