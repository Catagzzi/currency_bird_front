
import Header from '../components/header'
import ReferralForm from '../components/referral-form'
import Grid from '@mui/material/Grid'

const Referral = () =>   {
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
              style={{ minHeight: "90vh", width:"50%"}}>
              <ReferralForm />
            </Grid >
          </Grid>
      </div>
    );
  }
  export default Referral;