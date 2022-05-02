import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function RegisterUser(props) {
  const [email, updateEmail] = useState('');
  const [name, updateName] = React.useState('');
  const [address, updateAddress] = React.useState('');
  const [sex, updateSex] = React.useState('');
  const [referral, updateReferral] = React.useState("")
  const sexOptions = [
    {value: "MALE", label: "Masculino"},
    {value: "FEMALE", label: "Femenino"},
    {value: "NON_BINARY", label: "No Informar"},
  ]

  useEffect( () => {
    let url = window.location.href
    if (url.includes("invite")) {
      //anexar a la request (post)
      let link = url.split("/")
      updateReferral(link.at(5))
    }
  }, [])

  const handleChangeEmail = (e) => {
    console.log("BBBBBB", e.target.value)
    updateEmail(e.target.value);
    console.log("handleChangeEmail", email)
  };

  const handleChangeName = (e) => {
    console.log("BBBBBB", e.target.value)
    updateName(e.target.value);
    console.log(name)
  };

  const handleChangeAddress = (e) => {
    console.log("BBBBBB", e.target.value)
    updateAddress(e.target.value);
    console.log(address)
  };

  const handleChange = (event) => {
    updateSex(event.target.value);
  };


  function Greeting(props) {
    const success = props.success;
    //const link = props.link;
    if (success === 200) {
      return <Grid style={{ width:"100%"}}> Usuario registrado correctamente. </Grid>;
    } else if (success === 409) {
      return <Grid style={{ width:"100%"}}>El usuario ya se encuentra registrado.</Grid>
    } else if (success === 500) {
      return <Grid style={{ width:"100%"}}>Surgió un error al registrar el usuario: <br/> Nombre: {name}, Email: {email} <br/> Por favor inténtelo de nuevo</Grid>
    } else if (success === 404) {
      return <Grid style={{ width:"100%"}}>El link de referido no es válido. <br/> Por favor verifique el link.</Grid>
    }else {
      return <p></p>;
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
          variant="h7"
          >
          <h4>
          Para registrarse, ingrese sus datos
          </h4>
      </Typography>
      <br/>
      <TextField required name="name" label="Nombre Completo" variant="outlined"  onChange={handleChangeName}/>
      <br/>
      <TextField required name="email" label="Email" variant="outlined"  onChange={handleChangeEmail} />
      <br/>
      <TextField required name="address" label="Dirección" variant="outlined"  onChange={handleChangeAddress} />
      <br/>
      <TextField
          id="outlined-select-sex"
          select
          label="Sexo"
          value={sex}
          onChange={handleChange}
        >
          {sexOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <Button 
        id="referral-link-button" 
        variant="contained" 
        onClick={() => props.register(name, email, address, sex, referral)}
      >
        Registrarse
      </Button>
      <Greeting success={props.resCode} link={props.resLink}></Greeting>
    </Box>
  );
}