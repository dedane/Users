import React, { useState } from 'react'
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList.js'
import Box from '@mui/material/Box';



function App() {
  
  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, userAge, userId) =>{
    setUsers(prevUsers => {
      return [ ...prevUsers, {name: userName, age: userAge, id: Math.random().toString()}];
    })

  }
  return (
    
    <div className="App">
      
      <h1>Users</h1>
      <UserInput onAddUser={addUserHandler} />
      <Box sx={{mt: 10}}>
      <UserList  user={users}/>
      </Box>
      
    </div>
  );
}

export default App;
