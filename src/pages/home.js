import Header from '../components/header'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

const Home = () =>   {
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
            style={{ minHeight: "20vh", width:"50%"}}>
        </Grid >
        <h2>Invita a tus Amigos y Gana Dinero!</h2>
        </Grid>
    </div>
  );
}

export default Home;