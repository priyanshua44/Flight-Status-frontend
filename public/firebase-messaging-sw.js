importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBUuJxvmJTOIzhtoknhV8kRjh6fNsazMIU",
  authDomain: "flight-tracker-dc8fe.firebaseapp.com",
  projectId: "flight-tracker-dc8fe",
  storageBucket: "flight-tracker-dc8fe.appspot.com",
  messagingSenderId: "566008374340",
  appId: "1:566008374340:web:33b8afbeaf2b2732a44811"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});