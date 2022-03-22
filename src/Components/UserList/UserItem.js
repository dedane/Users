import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container,
         List,
         Typography,
         ListItem,
         ListItemButton,
         ListItemIcon,
         ListItemText} from '@mui/material';
function UserItem(props) {
  return (
    <Container>
    <Typography>USERLIST</Typography>
    <List>
        <ListItem>
          <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>
            {props.name}{props.age}
          </ListItemText>
          </ListItemButton>
        </ListItem>
    </List>
</Container>
  )
}

export default UserItem