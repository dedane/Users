import React, { useState } from 'react'
import  {
     Container, 
     Typography,
     TextField, 
     Button, 
     Box,
     Stack,
     CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ErrorModal from '../Error/ErrorModal'

const theme = createTheme()

function UserInput(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');


    const ageHandler = (e) => {
        setAge(e.target.value);
    }
    const userHandler = (e) => {
        setUsername(e.target.value);
    }
    const errorHandler =(e) => {
      setError(null);
    }
    const handleSubmit = (e) => {

        e.preventDefault();

        if(username.trim().length === '' || age.trim().length === '') {
          setError({
            title: "Invalid Name",
            message: 'Please enter a valid username and age'
          })
          return;
        }
        if(+age < 1) {
          setError({ 
            title: "Invalid Age",
            message: 'Please enter a valid age greater than 0'
          })
          return;
        }  
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }
  return (
    <div>
      
    <ThemeProvider theme={theme} >
    {error && 
    <ErrorModal 
    title={error.title}
    message={error.message}
    onConfirm={errorHandler}/> }
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
    </div>
  )
}

export default UserInput