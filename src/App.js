import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigate from './Components/Navigate';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigate/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
