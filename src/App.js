import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";

import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Dashboard />
      </StyledContainer>
    </Router>
  );
}

export default App;
