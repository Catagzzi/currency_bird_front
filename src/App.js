import './App.css';
import Header from './components/header'
import ReferralForm from './components/referral-form'
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  //return (
  //   <Router>
  //     <div className="App">
  //         <Route exact path="/" component={Home} />
  //     </div>
  //   </Router>
  // );
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

/* <Router>
<Routes>
<Route exact path='/referral' element={<App/>}></Route>
</Routes>
</Router> */
export default App;
