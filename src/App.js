import React, { useState } from 'react'
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
import Box from '@mui/material/Box';

function App() {
  const [users, setUsers] = useState([]);

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
      <UserList />
      </Box>
      
    </div>
  );
}

export default App;
