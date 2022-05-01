import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const initialFormData = Object.freeze({
    email: "",
    name: "",
  });



export default function BasicTextFields() {
    const [email, updateEmail] = React.useState();
    const [name, updateName] = React.useState();
    const handleChangeEmail = (e) => {
        console.log("BBBBBB", e.target.value)
        updateEmail(e.target.value);
        console.log(email)
      };
    const handleChangeName = (e) => {
    console.log("BBBBBB", e.target.value)
    updateName(e.target.value);
    console.log(name)
    };
    const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviando datos...' + name + ' ' + email)
    // ... submit to API or something
    };
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
        <TextField name="email" label="Email" variant="outlined"  onChange={handleChangeEmail}/>
        <TextField name="name" label="Nombre Completo" variant="outlined"  onChange={handleChangeName}/>
        <br/>
        <Button id="referral-link-button" variant="contained" onClick={handleSubmit}>Compartir</Button>
        <li>
            {name}
        </li>
        <li>
            {   email}
        </li>
    </Box>
  );
}