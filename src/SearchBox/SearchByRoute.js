import React, { useEffect, useState } from "react";
import "./SearchByRoute.css";
import {
  formatDate,
  getAllDates,
  getAllFlights,
  getFlightsByAirportAndDate,
  getFlightsByAirportNameAndDate,
  searchAirports,
} from "../service/FlightService";
import SuggessionsHandler from "../components/SuggessionsHandler";

export default function SearchByRoute({
  isVisible,
  onClose,
  width,
  onLinkClick,
}) {
  const [departureQuery, setDepartureQuery] = useState('');
  const [arrivalQuery, setArrivalQuery] = useState('');
  const [departureSuggestions, setDepartureSuggestions] = useState([]);
  const [arrivalSuggestions, setArrivalSuggestions] = useState([]);

  const [dates, setDates] = useState([]);
  const [input3, setInput3] = useState("");

  const handleInputChange = async (event, type) => {
    const value = event.target.value;
    if (type === 'departure') {
      setDepartureQuery(value);
    } else {
      setArrivalQuery(value);
    }

    if (value) {
      try {
        const response = await searchAirports(value);
        const distinctAirports = [...new Set(response.data)]; // Ensure no duplicates
        // console.log(response.data);

        if (type === 'departure') {
          setDepartureSuggestions(distinctAirports);
        } else {
          setArrivalSuggestions(distinctAirports);
        }
      } catch (error) {
        console.error('Error fetching airport data:', error);
      }
    } else {
      if (type === 'departure') {
        setDepartureSuggestions([]);
      } else {
        setArrivalSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion, type) => {
    if (type === 'departure') {
      setDepartureQuery(suggestion);
      setDepartureSuggestions([]);
    } else {
      setArrivalQuery(suggestion);
      setArrivalSuggestions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getFlightsByAirportNameAndDate(departureQuery, arrivalQuery, input3);
      console.log(response.data);

      if (response.data) {
        onLinkClick("searchByRouteResult", response.data);
      } else {
        onLinkClick("searchByRouteResult", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const loadDates = async () => {
      try {
        const response = await getAllDates();
        setDates(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadDates();
  }, []);

  return (
    <div>
      <div>
        <div
          className={`additional-box searchByFlightRoute-box ${isVisible ? "show" : "hide"
            }`}
          style={{ width }}
        >
          <div className="text-end">
            <button className="close-btn" onClick={onClose}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="">
            <p className="text-center text-white fw-bold pb-0 pt-4">
              Search Flight by Route
            </p>
          </div>

          <div className="p-3 pt-1 col col-12">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  for="airline"
                  className="form-label  mb-1 text-white ms-0"
                >
                  From
                </label>
                <div className="mx-2">
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
                        placeholder="Departure Airport"
                        id="flightNumber"
                        value={departureQuery}
                        onChange={(e) => handleInputChange(e, 'departure')}
                      />
                    </div>
                  </div>
                  {/* suggesions  */}
                  <SuggessionsHandler
                        suggestions={departureSuggestions}
                        onClick={(suggestion) => handleSuggestionClick(suggestion, 'departure')}
                    />

                </div>
              </div>

              <div className="mt-3">
                <label
                  for="airline"
                  className="form-label  mb-1 text-white ms-0"
                >
                  To
                </label>
                <div className="mb-1 mx-2">
                  <div className="row bg-dark px-1 input-div">
                    <div className="col col-lg-1 align-content-center">
                      <i
                        class="fa-solid fa-plane-arrival fa-lg text-white "
                        style={{ color: "#ffffff" }}
                      ></i>
                    </div>
                    <div className="col col-lg-11">
                      <input
                        type="text"
                        className="form-control bg-dark py-2 text-white border-0 input-field"
                        placeholder="Arrival Airport"
                        id="flightNumber"
                        value={arrivalQuery}
                        onChange={(e) => handleInputChange(e, 'arrival')}
                      />
                    </div>
                  </div>
                  {/* suggesions  */}
                  <SuggessionsHandler
                        suggestions={arrivalSuggestions}
                        onClick={(suggestion) => handleSuggestionClick(suggestion, 'arrival')}
                    />
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
                      {" "}
                      <select
                        value={input3}
                        id="scheduledDepartureDate"
                        onChange={(e) => setInput3(e.target.value)}
                        className="form-control bg-dark py-2 text-white border-0 input-field"
                        required
                      >
                        <option selected>Select Date</option>
                        {dates.map((date, index) => (
                          <option key={index} value={date}>
                            {formatDate(date)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 col col-12 mb-1">
                <button
                  type="submit"
                  className="w-100 btn btn-dark submit-btn fw-bold text-white align-content-center"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
