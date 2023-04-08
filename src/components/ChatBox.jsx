import React from 'react';
import Form from './Form';
import MessageContainer from './MessageContainer';
import Navbar from './Navbar';

const ChatBox = () => {
  return (
    <div className='chatbox'>
      <Navbar />
      <MessageContainer />
      <Form />
    </div>
  );
};

export default ChatBox;
