import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import {fetchUserData} from "./firebase/userhandler";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        if (data) {
          setUserDetails(data);
        } else {
          console.log("User is not logged in or no user data available");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);
  
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>Phone No: {userDetails.phone}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;