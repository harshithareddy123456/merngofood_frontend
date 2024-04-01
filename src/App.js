import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ContextReducer } from "./components/ContextReducer";
import Myorder from "./screens/Myorder";
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.css';

function App() {
  return (
    <ContextReducer>
      <Router>
        <div className="full-page-div">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<Myorder />} />
          </Routes>
        </div>
      </Router>
    </ContextReducer>
  );
}

export default App;
