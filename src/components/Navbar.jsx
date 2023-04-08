import React from 'react';
import { Auth, Provider } from '../firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(Auth);

  const signIn = async () => {
    signInWithPopup(Auth, Provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const logOut = async () => {
    signOut(Auth)
      .then(() => alert('you are now logged out'))
      .catch((err) => console.log(err));
  };

  return (
    <div className='header'>
      <h3>ChatApp</h3>
      {!user ? (
        <button onClick={signIn}>Sign In</button>
      ) : (
        <button onClick={logOut}>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
