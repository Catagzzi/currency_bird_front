import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function BasicTextFields(props) {
  const [email, updateEmail] = React.useState();
  const [name, updateName] = React.useState();
  let REACT_APP_PORT= process.env.PORT

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

  function Greeting(props) {
    const success = props.success;
    const link = props.link;
    if (success === 200) {
      let path= "/register/invite/"+link
      let referralLink = <a href={path} > localhost:{REACT_APP_PORT}/register/invite/{link}</a>;
      return <Grid style={{ width:"100%"}}> Tu link de referido es: {referralLink} </Grid>;
    }
    if (success === 404) {
      let aqui = <a href={"/register"}> aquí</a>;
      return <Grid style={{ width:"100%"}}>Usuario no encontrado. Por favor escriba un email correcto. <br/> Si usted no se ha registrado, por favor hágalo {aqui}. </Grid>
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
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography variant="h7">
          <p>
            Por favor rellene los siguientes campos para obtener su link de referidos
          </p>
        </Typography>
        <br/>
        <TextField required name="email" label="Email" variant="outlined"  onChange={handleChangeEmail} />
        <TextField required name="name" label="Nombre Completo" variant="outlined"  onChange={handleChangeName}/>
        <br/>
        <Button id="referral-link-button" variant="contained" onClick={() => props.getLink(email)}>Compartir</Button>
        <br/>
        <Greeting success={props.resCode} link={props.resLink}></Greeting>
    </Box>
  );
}