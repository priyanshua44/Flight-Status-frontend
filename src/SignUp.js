import React, { useState } from 'react';
import { auth, db, messaging, requestPermission} from './firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { getToken } from 'firebase/messaging';


function SignUp() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await requestPermission();
      const token = await getToken(messaging, { vapidKey: 'BG4Pfo3PM6sQlyq8eeDY1vn0rA9onV-Tld8GU_DvSU7wENvNACT65mupo-inKnagZgcOHUscBIoI38C7NT_P0xQ' });

      console.log(user);
      console.log('User signed up successfully');
      if(user){
        await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            phone: phone,
            fcmToken: token,
        })
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
