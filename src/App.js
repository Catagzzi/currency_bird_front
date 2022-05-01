import './App.css';
import Referral from './pages/referral'
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
      </Routes>
    </Router>
  );
}
export default App;
