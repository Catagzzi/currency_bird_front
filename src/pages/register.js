import React, {useState} from 'react'
import Header from '../components/header'
import RegisterForm from '../components/register-form'
import Grid from '@mui/material/Grid'

const Referral = () =>   {
  const [response, setResponse] = useState("")

  function getLink(email) {
    fetch('http://localhost:3050/users/referral/create', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
        })
    })
        .then(response => response.json())
        .then(data => {
          setResponse(data)
        });
  }

  return (
    <div className="App">
      <div >
        <Header />
      </div >
        <Grid
          container justify="center" direction="column"
          alignItems="center"
        >
          <Grid
            container justify="center"
            alignItems="center"
            style={{ minHeight: "90vh", width:"30%"}}>
            <RegisterForm getLink={getLink} resCode={response.code} resMsg={response.message} resLink={response.result}/>
          </Grid >
        </Grid>
    </div>
  );
}

export default Referral;