import React from 'react'
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

function userInput() {
  return (
    <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography>User Details</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
               
                <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
                
                
                 

                    <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
                    
                
                <Stack>
                    <Button 
                    type="submit"
                    fullwidth
                    variant="contained"
                    sx={{ mt: 3}}>
                    Sign In
                </Button>
                    </Stack>
                
            </Box>
            </Box>
            </Container>
    </ThemeProvider>
  )
}

export default userInput