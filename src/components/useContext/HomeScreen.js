import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const HomeScreen = () => {

  /* const userContext= useContext(UserContext)

  console.log(userContext); */

  const { user }= useContext(UserContext)

  console.log(user);

  return (
    <div>
      <h1>Home Screen</h1>

      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>
    </div>
  )
}

export default HomeScreen;
