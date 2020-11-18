import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const newUser={
    id:12343,
    name:'Sof'
  }
  
  console.log(user, setUser);

  return (
    <div>
      <h1>Login Screen</h1>
      <button
        className="btn btn-primary"
        onClick={() =>{
          setUser({
            ...user,
            newUser
          })
        }}
      >
      Login
      </button>
    </div>
  )
}

export default LoginScreen
