import "./App.css";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footers />
      </Router>
    </div>
  );
}

export default App;
