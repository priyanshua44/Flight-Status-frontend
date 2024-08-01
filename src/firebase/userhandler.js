import { auth, db } from './firebase'; 
import { doc, getDoc } from 'firebase/firestore';

export const fetchUserData = async () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            resolve(docSnap.data());
            // console.log("user log in successful ")
          } else {
            resolve(null);
            // console.log("user not logged in ")
          }
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  });
};
