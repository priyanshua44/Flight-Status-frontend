import axios from 'axios';

const API_URL = 'http://localhost:8080/api/flights';

export const getAllDates = () => axios.get(`${API_URL}/dates`);
export const getAllFlights = () => axios.get(`${API_URL}/all`);
export const getFlightById = (id) => axios.get(`${API_URL}/${id}`);

export const getFlightsByNumberAndDate = (flightNumber, date) => axios.get(`${API_URL}/flights?flightNumber=${flightNumber}&scheduledDepartureDate=${date}`);

export const getFlightsByAirportAndDate = (departureAirportCode, arrivalAirportCode, date) => axios.get(`${API_URL}/code?departureAirportCode=${departureAirportCode}&arrivalAirportCode=${arrivalAirportCode}&scheduledDepartureDate=${date}`);

export const getFlightsByAirlineAndDate = (airlineName, date) => axios.get(`${API_URL}/airline?airlineName=${airlineName}&scheduledDepartureDate=${date}`);

export const getFlightsByAirportNameAndDate = (departureAirportName, arrivalAirportName, date) => axios.get(`${API_URL}/name?departureAirportName=${departureAirportName}&arrivalAirportName=${arrivalAirportName}&scheduledDepartureDate=${date}`);


export const updateFlight = (id, flight) => axios.put(`${API_URL}/${id}`, flight);
export const deleteFlight = (id) => axios.delete(`${API_URL}/${id}`);

export const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

export const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const searchAirports = (query) => {
  return axios.get(`${API_URL}/airports/all`, {
    params: { query }
  });
};

export const searchAirlines = (query) => {
  return axios.get(`${API_URL}/airlines/all`, {
    params: { query }
  });
};

export const calculateFlightDelay = (scheduledDepartureTime, actualDepartureTime) => {
  // Parse the input times into Date objects
  const scheduledTime = new Date(scheduledDepartureTime);
  const actualTime = new Date(actualDepartureTime);

  // Calculate the difference in milliseconds
  const delayInMilliseconds = actualTime - scheduledTime;

  // Convert the difference into minutes
  const delayInMinutes = Math.round(delayInMilliseconds / (1000 * 60));

  // Return the delay formatted as "15 Min"
  return `${delayInMinutes} Min`;
}
