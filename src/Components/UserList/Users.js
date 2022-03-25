import React from 'react'
import UserList from './UserList';
import {Container} from '@mui/material'

function Users(props) {
  return (
    <Container>
      {props.user.map((user) => (
      <UserList 
          id={user.id}
          username ={user.username}
          age={user.age}/>
      ))}
        
    </Container>
  )
}

export default Users