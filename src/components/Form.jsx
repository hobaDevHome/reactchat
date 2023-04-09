import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth, db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
const Form = ({ onMsgAdded }) => {
  const [message, setMessage] = useState('');
  const [user] = useAuthState(Auth);

  const messageRef = collection(db, 'messages');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      const res = await addDoc(messageRef, {
        message: message,
        user: user.displayName,
        logo: user.photoURL,
        uid: user.uid,
        date: new Date(),
      });
      console.log('ras', res);
      setMessage('');
      onMsgAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='message'
        placeholder='type message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button type='submit'>send</button>
    </form>
  );
};

export default Form;
