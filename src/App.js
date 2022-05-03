import './App.css';
import Referral from './pages/referral'
import RegisterUser from './pages/register'
import SummaryTable from './pages/summaryTable'
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/referral" element={<Referral/>} />
          <Route path="/register/" element={<RegisterUser/>} />
          <Route path="/register/invite/:id" element={<RegisterUser/>} />
          <Route path="/admin" element={<SummaryTable/>} />
          <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}
export default App;
