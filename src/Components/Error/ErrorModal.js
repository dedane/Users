import React from 'react'
import { Box, 
        Typography,
        Button,
        Modal 
        } 
from '@mui/material'

function ErrorModal(props) {
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  return (
    <div>
        <div onClick={props.onConfirm}>
        <Modal  >
            <Typography variant="h1">
                {props.title}
            </Typography>
            <Typography variant="h2">
                {props.message }
            </Typography>
            <Box sx={style}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </Box>
        </Modal>
        </div>
    </div>
  )
}

export default ErrorModal