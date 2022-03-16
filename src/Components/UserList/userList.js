import React from 'react'
import UserItem from './UserItem';

function UserList(props) {
  if (props.users.length === 0) {
    return <h2 className='Habit-list__fallback'>Found no Habits.</h2>;
  }
  return (
    <ul>
        {props.user.map((user) => (
          <UserItem
            name={user.name}
            age={user.age}
            />
        ))}
    </ul>
  )
}

export default UserList