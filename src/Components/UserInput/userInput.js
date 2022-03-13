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
              id="USERNAME"
              label="USERNAME"
              name="USERNAME"
              autoComplete="USERNAME"
              autoFocus
            />
                
                
                 

                    <TextField
              margin="normal"
              required
              fullWidth
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

export default userInput