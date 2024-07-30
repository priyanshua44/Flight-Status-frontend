import React, { useEffect, useState } from 'react'
import "./SearchByFlightNumber.css";
import axios from 'axios';
import { formatDate, getAllDates, getFlightsByNumberAndDate } from '../service/FlightService';

export default function SearchByFlightNumber({ isVisible, onClose, width, onLinkClick, flightNumberData }) {
  const [dates, setDates] = useState([]);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getFlightsByNumberAndDate(input1, input2);
      console.log(response.data);

      if (response.data) {
        onLinkClick('searchByFlightNumberResult', response.data);
      } else {
        onLinkClick('searchByFlightNumberResult', response.data);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  useEffect(() => {
    const loadDates = async () => {
      try {
        const response = await getAllDates();
        console.log(response.data);
        setDates(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadDates();
  }, []);


  return (
    <div><div>
      <div
        className={`additional-box searchByFlightNumber-box ${isVisible ? "show" : "hide"}`}
        style={{ width }}
      >
        <div className="text-end">
          <button className="close-btn" onClick={onClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="">
          <p className="text-center text-white fw-bold pb-0 pt-4">
            Search Flight by Flight Number
          </p>
        </div>

        <div className="p-3 pt-2 col col-12">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                for="airline"
                className="form-label  mb-1 text-white ms-0"
              >
                Flight Number
              </label>
              <div className="mb-1 mx-2">
                <div className="row bg-dark px-1 input-div">
                  <div className="col col-lg-1 align-content-center">
                    <i
                      class="fa-solid fa-plane-departure fa-lg text-white "
                      style={{ color: "#ffffff" }}
                    ></i>
                  </div>
                  <div className="col col-lg-11">
                    <input
                      type="text"
                      className="form-control bg-dark py-2 text-white border-0 input-field"
                      placeholder="Flight Number"
                      id="flightNumber"
                      onChange={(e) => setInput1(e.target.value)}
                      value={input1}
                      required />
                  </div>
                </div>
              </div>
            </div>



            <div className="mt-3">
              <label
                for="airline"
                className="form-label  mb-1 text-white ms-0"
              >
                Date
              </label>
              <div className="mb-1 mx-2">
                <div className="row bg-dark px-1 input-div">
                  <div className="col col-lg-1 align-content-center">
                    <i
                      class="fa-regular fa-calendar fa-lg text-white "
                      style={{ color: "#ffffff" }}
                    ></i>
                  </div>
                  <div className="col col-lg-11">
                    <select value={input2} id="scheduledDepartureDate" onChange={(e) => setInput2(e.target.value)}
                      className="form-control bg-dark py-2 text-white border-0 input-field"
                      required>
                      <option selected>Select Date</option>
                      {
                        dates.map((date,index) => (

                          <option key={index} value={date}>{formatDate(date)}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 col col-12 mb-1">
              <button type="submit" className="w-100 btn btn-dark submit-btn fw-bold text-white align-content-center">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div></div>
  )
}
