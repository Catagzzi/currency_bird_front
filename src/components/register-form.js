import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function RegisterUser(props) {
  const [email, updateEmail] = useState();
  const [name, updateName] = React.useState();
  const [address, updateAddress] = React.useState();
  const [sex, updateSex] = React.useState('FEMALE');
  const [referral, updateReferral] = useState("")

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
    // const { value } = event.target;
    // updateSex({value});
    // updateSex(value);
    // console.log("value", value.props.value)
    //const sexName = value.props.value
    console.log("ACTUAL",sex)
  };


  function Greeting(props) {
    const success = props.success;
    const link = props.link;
    if (success === 200) {
      let referralLink = <a href={link}> {link}</a>;
      return <Grid style={{ width:"100%"}}> Tu link de referido es: {referralLink} </Grid>;
    }
    if (success === 404) {
      let aqui = <a href={"/register"}> aquí</a>;
      return <Grid style={{ width:"100%"}}>Usuario no encontrado. Por favor escriba un mail correcto. <br/> Si usted no se ha registrado, por favor hágalo {aqui}. </Grid>
    }
    if (success === 500) {
      return <Grid style={{ width:"100%"}}>Surgió un error al obtener el link de referido, por favor inténtelo de nuevo</Grid>
    }
    return <p></p>;
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
            <p>
            Para registrarse, ingrese sus datos
            </p>
        </Typography>
        <br/>
        <TextField required name="name" label="Nombre Completo" variant="outlined"  onChange={handleChangeName}/>
        <br/>
        <TextField required name="email" label="Email" variant="outlined"  onChange={handleChangeEmail} />
        <br/>
        <TextField required name="address" label="Dirección" variant="outlined"  onChange={handleChangeAddress} />
        <br/>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sex}
          label="Sexo"
          onChange={handleChange}
        >
          <MenuItem value={"FEMALE"}>Femenino</MenuItem>
          <MenuItem value={"MALE"}>Maculino</MenuItem>
          <MenuItem value={"NON_BINARY"}>No informar</MenuItem>
        </Select>
      </FormControl>
        <Button id="referral-link-button" variant="contained" onClick={() => props.getLink(email)}>Registrarse</Button>
        <br/>
        <Greeting success={props.resCode} link={props.resLink}></Greeting>
    </Box>
  );
}