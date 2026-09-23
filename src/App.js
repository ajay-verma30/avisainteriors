import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigate from './Components/Navigate';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigate/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
