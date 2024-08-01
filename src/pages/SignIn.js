import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const Navigate = useNavigate();

 const handleSignin = async (e) => {
   e.preventDefault();
   setError('');

   try {
     await signInWithEmailAndPassword(auth, email, password);
     console.log('User signed in successfully');
     Navigate("/");

   } catch (error) {
     setError(error.message);
   }
 };

  return (
    <div className="signin-container">
      <div className="signin-form-wrapper">
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className="signin-form" onSubmit={handleSignin}>
          <h2 className="signin-title">Sign In</h2>
          <div className="signin-form-group">
            <label htmlFor="email" className="signin-label">Email address</label>
            <input
              type="email"
              className="signin-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="signin-form-group">
            <label htmlFor="password" className="signin-label">Password</label>
            <input
              type="password"
              className="signin-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <div className='mt-4'><Link to="/signup" className="text-decoration-none"><span className='text-white'>New User? Click Here to Signup</span></Link></div>
      </div>
    </div>
  );
};

export default SignIn;
