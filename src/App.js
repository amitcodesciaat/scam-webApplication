import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ScamAdviserFooter from './Components/Footer';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Help from './Components/Help';
import Report from './Components/Report';
import './App.css';
import './Components/Navbar.css'
import Dashboard from './Components/Dashboard2';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/About' element={<About />} />
        <Route path='/Report' element={<Report/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
      </Routes>
      {/* <footer>
        <p>© 2023 Scam Detection Tool. All rights reserved.</p>
      </footer> */}
      <Footer>
        < ScamAdviserFooter />
      </Footer>
    </Router>
  );
}

export default App;
