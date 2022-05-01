import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography
            variant="h7"
            >
            <p>
            Por favor rellene los siguientes campos para obtener su link de referidos
            </p>
        </Typography>
        <br/>
        <TextField id="outlined-email" label="Email" variant="outlined" />
        <TextField id="outlined-Name" label="Nombre Completo" variant="outlined" />
        <br/>
        <Button id="referral-link-button" variant="contained">Compartir</Button>
    </Box>
  );
}