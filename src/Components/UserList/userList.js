
import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function UserList(props) {

  return (
    <Card>
      <CardContent>
    <ul>
        {props.user.map((use) => (
          <li>
          
            {use.name} ({use.age}) years old
            
            </li>
        ))}
    </ul>
    </CardContent>
    </Card>
  )
}

export default UserList