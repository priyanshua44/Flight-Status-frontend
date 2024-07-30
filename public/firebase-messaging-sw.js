// Import the Firebase scripts that are needed
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in your app's Firebase config object.
// You can find your app's config object in your Firebase console.
const firebaseConfig = {
    apiKey: "AIzaSyBUuJxvmJTOIzhtoknhV8kRjh6fNsazMIU",
    authDomain: "flight-tracker-dc8fe.firebaseapp.com",
    projectId: "flight-tracker-dc8fe",
    storageBucket: "flight-tracker-dc8fe.appspot.com",
    messagingSenderId: "566008374340",
    appId: "1:566008374340:web:33b8afbeaf2b2732a44811"
  };
  
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
