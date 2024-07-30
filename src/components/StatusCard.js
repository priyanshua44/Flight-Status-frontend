import React from "react";
import "./StatusCard.css";

export default function ({data}) {

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};


  return (
    <>
      <div className="status-wrapper">
        <div className="status-container  mt-5">
          <div className="status-card w-75 h-50 mx-auto p-2 text-center text-white ">
            <div className="row mx-0 p-2">
              <div className="col col-lg-4 text-start">
                <span className="fs-3 fw-bold gradient-text-2">{data.flightNumber}</span>
                <br />
                <span className="fw-bold gradient-text-2">
                  {data.airline.name}
                </span>
              </div>

              <div className="col col-lg-4">
                <div className="row">
                  <div className="col col-lg-4">
                    {" "}
                    <span className="fs-3 gradient-text-9 fw-bold">
                      {data.departureAirport.code}
                    </span>{" "}
                    <br />{" "}
                    <span className="gradient-text-9 fw-bold"> {data.departureAirport.city}</span>
                  </div>
                  <div className="col col-lg-4 d-flex align-items-center justify-content-center gradient-icon">
                    {" "}
                    <i class="fa-solid fa-plane fa-2xl "></i>
                  </div>
                  <div className="col col-lg-4">
                    {" "}
                    <span className="fs-3 gradient-text-9 fw-bold">
                    {data.arrivalAirport.code}
                    </span>{" "}
                    <br />{" "}
                    <span className="gradient-text-9 fw-bold">{data.arrivalAirport.city}</span>{" "}
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 text-end">
                <span className="fs-3 fw-bold gradient-text-7">{data.flightStatus.status}</span>
                <br />{" "}
                <span className="gradient-text-4 fw-bold">{data.flightStatus.description}</span>{" "}
              </div>
            </div>
            <div className="mx-0 d-flex justify-content-center">

              {/* left small card */}
              <div className="col col-lg-6">
                <div className="col col-lg-11 text-center status-item ms-4 mx-2">
                  <div className="p-2">
                  <span className="fw-bold text-dark">
                      {data.departureAirport.name} 
                    </span>
                    <br />

                    <span className="fw-bold text-dark"> {data.departureAirport.city} , {data.departureAirport.country}</span>
                    
                  </div>
                  <div className="p-2">
                    <span className="fw-bold text-dark">
                      Flight Departure Times
                    </span>

                    <br />
                    <span className="fw-bold gradient-text-4 fs-4">{formatDate(data.scheduledDepartureTime)}</span>
                  </div>
                  <div className="row mx-0 w-100 p-2 border-3 border-bottom border-white">
                    <div className="col col-lg-6">
                      <div>
                        {" "}
                        <span className="fw-bold text-dark">Scheduled</span>
                      </div>
                      <div>
                        <span className="fw-bold gradient-text-4 fs-3">{formatTime(data.scheduledDepartureTime)}</span>
                      </div>
                    </div>
                    <div className="col col-lg-5">
                      <div>
                        <span className="fw-bold text-dark">Actual</span>
                      </div>
                      <div>
                        <span className="fw-bold gradient-text-4 fs-3">{formatTime(data.actualDepartureTime)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-0 w-100 ">
                    <div className="col col-lg-6 p-2 border-3 border-end border-white">
                      <div>
                        <span className="fw-bold text-dark">Terminal</span>
                      </div>
                      <div>
                        <span className="fw-bold gradient-text-4 fs-3">{data.departureTerminal}</span>
                      </div>
                    </div>
                    <div className="col col-lg-6 p-2">
                      <div>
                        <span className="fw-bold text-dark">Gate</span>
                      </div>
                      <div>
                        <span className="fw-bold gradient-text-4 fs-3">{data.departureGate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* left small card ends */}

              {/* <div className="col col-lg-1  d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-plane fa-2xl"></i>
              </div> */}

              {/* right small card */}

              <div className="col col-lg-6">
                <div className="col col-lg-11 text-center status-item mx-2 ">
                  <div className="p-2">
                    <span className="fw-bold text-dark"> {data.arrivalAirport.name} </span>
                    <br />
                    <span className="fw-bold text-dark">
                      {data.arrivalAirport.city}, {data.arrivalAirport.country}
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="fw-bold text-dark"> Flight Arrival Times</span>
                    <br />
                    <span className="fw-bold fs-4 gradient-text-4"> {formatDate(data.scheduledArrivalTime)} </span>
                  </div>
                  <div className="row mx-0 w-100 p-2 border-3 border-bottom border-white">
                    <div className="col col-lg-6">
                      <div>
                        <span className="fw-bold text-dark"> Scheduled</span>
                      </div>
                      <div>
                        <span className="fw-bold fs-3 gradient-text-4"> {formatTime(data.scheduledArrivalTime)} </span>
                      </div>
                    </div>
                    <div className="col col-lg-5">
                      <div>
                        <span className="fw-bold text-dark">Estimated</span>
                      </div>
                      <div>
                        <span className="fw-bold fs-3 gradient-text-4">{formatTime(data.actualArrivalTime)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-0 w-100  ">
                    <div className="col col-lg-6 p-2 border-3 border-end border-white">
                      <div>
                        <span className="fw-bold text-dark">Terminal</span>
                      </div>
                      <div>
                        <span className="fw-bold fs-3 gradient-text-4">{data.arrivalTerminal}</span>
                      </div>
                    </div>
                    <div className="col col-lg-6 p-2">
                      <div>
                        <span className="fw-bold text-dark">Gate</span>
                      </div>
                      <div>
                        <span className="fw-bold fs-3 gradient-text-4">{data.arrivalGate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
