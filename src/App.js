import './App.css';
import Referral from './pages/referral'
import RegisterUser from './pages/register'
import SummaryTable from './pages/summaryTable'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/referral" element={<Referral/>} />
          <Route path="/register" element={<RegisterUser/>} />
          <Route path="/admin" element={<SummaryTable/>} />
      </Routes>
    </Router>
  );
}
export default App;
