import React, { useState, useRef } from 'react'
import  {
     Container, 
     Typography,
     TextField, 
     Button, 
     Box,
     Stack,
     CssBaseline } from '@mui/material'
//import { createTheme, ThemeProvider } from '@mui/material/styles'
import ErrorModal from '../Error/ErrorModal'
import Wrapper from '../Helpers/Wrapper'



const UserInput = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
   
    const [error, setError] = useState('');


    
    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        
        const enteredAge = ageInputRef.current.value;
        
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
          setError({
            title: "Invalid Name",
            message: 'Please enter a valid username and age'
          })
          return;
        }
        if(+enteredAge < 1) {
          setError({ 
            title: "Invalid Age",
            message: 'Please enter a valid age greater than 0'
          })
          return;
        }  
        props.onAddUser(enteredName, enteredAge);
    
    }
   
  
    const errorHandler = () => {
      setError(null);
    };
  return (
    <Wrapper>
      
    
    {error && (
    <ErrorModal 
    title={error.title}
    message={error.message}
    onConfirm={errorHandler}/> )}
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
              ref={nameInputRef}
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              ref={ageInputRef}
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

    </Wrapper>
  )
}

export default UserInput