import React, { useState, useEffect } from 'react';
import Form from './Form';
import MessageContainer from './MessageContainer';
import Navbar from './Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const ChatBox = () => {
  const [chat, setChat] = useState([]);
  const chatRef = collection(db, 'messages');

  const getNewMessgs = () => {
    console.log('getNewMessgs called');
    const getMessages = async () => {
      const res = await getDocs(chatRef);
      if (res) {
        setChat(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };
    getMessages();
  };
  useEffect(() => {
    getNewMessgs();
  }, []);

  return (
    <div className='chatbox'>
      <Navbar />
      <MessageContainer chat={chat} />
      <Form onMsgAdded={() => getNewMessgs()} />
    </div>
  );
};

export default ChatBox;
