import React from 'react';
import { Auth } from '../firebase-config';

import { useAuthState } from 'react-firebase-hooks/auth';

const MessageContainer = ({ chat }) => {
  const [user] = useAuthState(Auth);

  return (
    <div
      className='messages-container'
      style={{ maxHeight: 500, overflowY: 'scroll' }}
    >
      {user && chat ? (
        <>
          {chat
            .sort(function (a, b) {
              var c = a.date;
              var d = b.date;
              return c - d;
            })
            .map((message) => (
              <div
                className={`message-box ${
                  user.uid === message.uid ? 'current-user' : ''
                }`}
              >
                {user.uid !== message.uid && (
                  <div>
                    <img src={message.logo} alt={message.user} />
                  </div>
                )}

                <div>
                  <p>{message.message}</p>
                </div>
              </div>
            ))}
        </>
      ) : (
        <p>Make sure to login</p>
      )}
    </div>
  );
};

export default MessageContainer;
