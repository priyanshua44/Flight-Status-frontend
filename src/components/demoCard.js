import React, { useState, useEffect } from 'react';
import "./StatusCard.css";
import { auth, db, requestPermission } from '../firebase/firebase';
import { messaging } from '../firebase/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { fetchUserData } from '../firebase/userhandler';
import { getToken } from 'firebase/messaging';


export default function () {
    const [userDetails, setUserDetails] = useState(null);
    const dataItem = 1;
    const dataItem2 = "hello";
    const dataItem3 = 3;

    useEffect(() => {
        const getUserDetails = async () => {
            const data = await fetchUserData();
            setUserDetails(data);
        };
        getUserDetails();
    }, []);

    const subscribeToUpdates = async (dataItem2) => {
        if (!userDetails) {
            console.log("User is not logged in");
            return;
        }
        let token = null;

        try {

            try {
                await requestPermission();
                token = await getToken(messaging, { vapidKey: 'BBSUwsdPcZjHwW1mm5INmtWWJfJ_s7NztgzvFhWf5QBzupvC-QOJifT8u7k9SpcVYEFYAjKvjh6PshOaJliAT1E' });
            } catch (permissionError) {
                console.log('Notification permission denied:', permissionError);
            }
            // Create a unique ID for the subscription document
            const subscriptionId = new Date().toISOString(); // Or use a UUID

            // Reference to the user subscriptions subcollection
            const userSubscriptionsRef = collection(db, 'UserSubscriptions', `${userDetails.uid}`, 'Subscriptions');

            // Simplified example for debugging
            const docData = {
                dataId: dataItem3, // Ensure this is a string or valid type
                fcmToken: token,
                userDetails: {
                    uid: userDetails.uid,
                    email: userDetails.email // Ensure this is serializable
                },
                subscribedAt: new Date()
            };

            console.log('Saving document data:', docData);

            // Save the subscription to Firestore
            await setDoc(doc(userSubscriptionsRef, subscriptionId), docData);

            console.log("Subscription saved to Firestore successfully");
        } catch (error) {
            console.error("Error saving subscription to Firestore:", error);
        }
    };



    return (
        <>
            <div className="status-wrapper">
                <div className="status-container  mt-5">
                    <div className="status-card w-75 h-50  p-2 text-center text-white ">
                        <div className="row mx-0 p-2">
                            <div className="col col-lg-4 text-start">
                                <span className="fs-3 fw-bold gradient-text-2">123</span>
                                <br />
                                <span className="fw-bold gradient-text-2">
                                    adasds                </span>
                            </div>

                            <div className="col col-lg-4">
                                <div className="row">
                                    <div className="col col-lg-4">
                                        {" "}
                                        <span className="fs-3 gradient-text-9 fw-bold">
                                            sadsd                    </span>{" "}
                                        <br />{" "}
                                        <span className="gradient-text-9 fw-bold"> dsads</span>
                                    </div>
                                    <div className="col col-lg-4 d-flex align-items-center justify-content-center gradient-icon">
                                        {" "}
                                        <i class="fa-solid fa-plane fa-2xl "></i>
                                    </div>
                                    <div className="col col-lg-4">
                                        {" "}
                                        <span className="fs-3 gradient-text-9 fw-bold">
                                            dsads                    </span>{" "}
                                        <br />{" "}
                                        <span className="gradient-text-9 fw-bold">sdsd</span>{" "}
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg-4 text-end">
                                <span className="fs-3 fw-bold gradient-text-7">dasds</span>
                                <br />{" "}
                                <span className="gradient-text-4 fw-bold">sdsd</span>{" "}
                            </div>
                        </div>
                        <div className="mx-0 d-flex justify-content-center">

                            {/* left small card */}
                            <div className="col col-lg-6">
                                <div className="col col-lg-11 text-center status-item ms-4 mx-2">
                                    <div className="p-2">
                                        <span className="fw-bold text-dark">
                                            dssd
                                        </span>
                                        <br />

                                        <span className="fw-bold text-dark"> dssd</span>

                                    </div>
                                    <div className="p-2">
                                        <span className="fw-bold text-dark">
                                            Flight Departure Times
                                        </span>

                                        <br />
                                        <span className="fw-bold gradient-text-4 fs-4">sdsd</span>
                                    </div>
                                    <div className="row mx-0 w-100 p-2 border-3 border-bottom border-white">
                                        <div className="col col-lg-6">
                                            <div>
                                                {" "}
                                                <span className="fw-bold text-dark">Scheduled</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold gradient-text-4 fs-3">sdsds</span>
                                            </div>
                                        </div>
                                        <div className="col col-lg-5">
                                            <div>
                                                <span className="fw-bold text-dark">Actual</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold gradient-text-4 fs-3">dsds</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 w-100 ">
                                        <div className="col col-lg-6 p-2 border-3 border-end border-white">
                                            <div>
                                                <span className="fw-bold text-dark">Terminal</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold gradient-text-4 fs-3">sdsd</span>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 p-2">
                                            <div>
                                                <span className="fw-bold text-dark">Gate</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold gradient-text-4 fs-3">sdsds</span>
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
                                        <span className="fw-bold text-dark"> sdsdsdsd </span>
                                        <br />
                                        <span className="fw-bold text-dark">
                                            sdsdsds
                                        </span>
                                    </div>
                                    <div className="p-2">
                                        <span className="fw-bold text-dark"> Flight Arrival Times</span>
                                        <br />
                                        <span className="fw-bold fs-4 gradient-text-4">sdssd </span>
                                    </div>
                                    <div className="row mx-0 w-100 p-2 border-3 border-bottom border-white">
                                        <div className="col col-lg-6">
                                            <div>
                                                <span className="fw-bold text-dark"> Scheduled</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold fs-3 gradient-text-4"> sdsd </span>
                                            </div>
                                        </div>
                                        <div className="col col-lg-5">
                                            <div>
                                                <span className="fw-bold text-dark">Estimated</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold fs-3 gradient-text-4">sdsdsd</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 w-100  ">
                                        <div className="col col-lg-6 p-2 border-3 border-end border-white">
                                            <div>
                                                <span className="fw-bold text-dark">Terminal</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold fs-3 gradient-text-4">sdsds</span>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 p-2">
                                            <div>
                                                <span className="fw-bold text-dark">Gate</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold fs-3 gradient-text-4">sdsd</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='align-content-start h-100'>
                        <button onClick={subscribeToUpdates} className='btn btn-dark' style={{ width: "minimum-content" }}> <span > <i class="fa-solid fa-bell fs-4 "></i> </span> <br /> <span style={{fontSize: "12px"}}> Get  Updates </span>   </button>

                    </div>
                </div>
            </div>
        </>
    );
}
