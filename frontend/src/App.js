import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route
            path="/signup"
            element={isAuthenticated ? <Profile /> : <Signup />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
