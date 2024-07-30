// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUuJxvmJTOIzhtoknhV8kRjh6fNsazMIU",
    authDomain: "flight-tracker-dc8fe.firebaseapp.com",
    projectId: "flight-tracker-dc8fe",
    storageBucket: "flight-tracker-dc8fe.appspot.com",
    messagingSenderId: "566008374340",
    appId: "1:566008374340:web:33b8afbeaf2b2732a44811"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 
export const db = getFirestore(app);
export const messaging = getMessaging(app);
  
// export default app;

export const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        const token = await getToken(messaging, { vapidKey: 'BG4Pfo3PM6sQlyq8eeDY1vn0rA9onV-Tld8GU_DvSU7wENvNACT65mupo-inKnagZgcOHUscBIoI38C7NT_P0xQ' });
        console.log('FCM Token:', token);
        // Send the token to your server and save it in the user's record in Firestore
      } else {
        console.log('Unable to get permission to notify.');
      }
    } catch (error) {
      console.error('Error getting permission for notifications:', error);
    }
  }; 

