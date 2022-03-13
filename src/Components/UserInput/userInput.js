import React, {useState} from 'react'
import  {
    Container, 
    Typography,
     TextField, 
     Button, 
     Box,
    Stack,
    CssBaseline,
   } from '@mui/material'
     import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

function UserInput() {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const ageHandler = (e) => {
        setAge(e.target.value);
    }
    const userHandler = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const user = {
            username: setUsername,
            age: setAge
        }
        console.log(username, age);
        setUsername('');
        setAge('');
    }
  return (
    <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs">
            
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            onSubmit={handleSubmit}>
                <Typography>User Details</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
               
                <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              value={username}
              onChange={userHandler}
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
                
                
                 

                    <TextField
              margin="normal"
              required
              fullWidth
              value={age}
              onChange={ageHandler}
              id="Age"
              label="Age"
              name="Age"
              autoComplete="Age"
              autoFocus
            />
                    
                
                <Stack>
                    <Button 
                    type="submit"
                    fullwidth
                    variant="contained"
                    sx={{ mt: 3}}>
                  Add User
                </Button>
                    </Stack>
                
            </Box>
            </Box>
            
            </Container>
    </ThemeProvider>
  )
}

export default UserInput