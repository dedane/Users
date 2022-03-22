import React from 'react'
import UserItem from './UserItem';

function UserList(props) {

  const userList = (props) => {
    if(props.user)
  }
  
  return (
    <ul>
        {props.user.map((user) => (
          <li>
          <UserItem
            name={user.name}
            age={user.age}
            />
            </li>
        ))}
    </ul>
  )
}

export default UserList