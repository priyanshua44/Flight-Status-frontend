import React, { useState, useEffect } from "react";
import { getAllFlights } from "../service/FlightService";

const FlightData = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getAllFlights()
      .then((response) => setFlights(response.data))
      .catch((error) => console.error("Error fetching flights:", error));
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Flight Number</th>
            <th scope="col">Flight Status</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.flightNumber}</td>
              <td>{flight.flightStatus}</td>
              <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
              <td>{new Date(flight.departureTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightData;
