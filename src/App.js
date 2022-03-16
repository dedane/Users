import React, { useState } from 'react'
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
import Box from '@mui/material/Box';
import Users from './Components/UserList/Users'

function App() {
  const users = [
    {name: 'Max', age: 28},
  ];
  const [user, setUsers] = useState([]);

  const addUserHandler = (user) =>{
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })

  }
  return (
    <div className="App">
      <h1>Users</h1>
      <UserInput onAddUser={addUserHandler} />
      <Box sx={{mt: 10}}>
      <Users />
      </Box>
      
    </div>
  );
}

export default App;
