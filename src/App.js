import "./App.css";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Routes>
        <Footers />
      </Router>
    </div>
  );
}

export default App;
