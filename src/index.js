import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Request permission and get token
// const requestPermission = async () => {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       const token = await getToken(messaging, { vapidKey: 'BDqpmtMfgsSM4XCIbRM2fUlYpeOOirsnTrOo26D0qwc2yGSsjaxOipsCIvRYjB6mvCvXo9ScD_h9qpNnni3onXY' });
//       console.log('FCM Token:', token);
//     } else {
//       console.log('Unable to get permission to notify.');
//     }
//   } catch (error) {
//     console.error('Error getting permission for notifications:', error);
//   }
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
