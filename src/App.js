import React, { useState } from 'react'
import './App.css';
import UserInput from './Components/UserInput/UserInput';

import Box from '@mui/material/Box';
import Users from './Components/UserList/Users'

function App() {
  
  const [user, setUsers] = useState([]);

  const addUserHandler = (userName, userAge) =>{
    setUsers(prevUsers => {
      return [ ...prevUsers, {name: userName, age: userAge}];
    })

  }
  return (
    <div className="App">
      <h1>Users</h1>
      <UserInput onAddUser={addUserHandler} />
      <Box sx={{mt: 10}}>
      <Users  user={user}/>
      </Box>
      
    </div>
  );
}

export default App;
