import React, { useState } from 'react';
import { auth, db, messaging, requestPermission } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { getToken } from 'firebase/messaging';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      let token = null;

      try {
        await requestPermission();
        token = await getToken(messaging, { vapidKey: 'BBSUwsdPcZjHwW1mm5INmtWWJfJ_s7NztgzvFhWf5QBzupvC-QOJifT8u7k9SpcVYEFYAjKvjh6PshOaJliAT1E' });
      } catch (permissionError) {
        console.log('Notification permission denied:', permissionError);
      }

      console.log(user);
      console.log('User signed up successfully');
      // Navigate("/");

      //  Show success toast
       toast.success('Sign up successful!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Navigate('/');
      }, 2000);
      if (user) {
        console.log('User data:', {
          email: user.email,
          uid: user.uid,
          // Add other user details if needed
        });
        await setDoc(doc(db, "Users", user.uid), {
          uid: user.uid,
          email: user.email,
          phone: phone,
          name: fullName,
          fcmToken: token,
        });
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
      {error && <p className='bg-white' style={{ color: 'red' }}>{error}</p>}
        <form className="signup-form" onSubmit={handleSignup}>
          <h2 className="signup-title">Sign Up</h2>
          <div className="signup-form-group">
            <label htmlFor="fullName" className="signup-label">Full Name</label>
            <input
              type="text"
              className="signup-input"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="email" className="signup-label">Email address</label>
            <input
              type="email"
              className="signup-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="phone" className="signup-label">Phone Number</label>
            <input
              type="tel"
              className="signup-input"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="password" className="signup-label">Password</label>
            <input
              type="password"
              className="signup-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className='mt-4'><Link to="/signin" className="text-decoration-none"><span className='text-white'>Already Registered? Click Here to Signin</span></Link></div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default SignUp;
