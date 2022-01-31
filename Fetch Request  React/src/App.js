import logo from './logo.svg';
import './App.css';
import Converter from './components/converter';
import FetchData from './components/fetchData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <h1>assignment - 2</h1>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/converter">curreny converter</Link></li>
            <li><Link to="/fetch">fetch call</Link></li>
          </ul>
      </div>
      
      <Routes>
        <Route exact path="/converter" element={<Converter />} />
        <Route exact path="/fetch" element={<FetchData />} />
      </Routes>
    </Router>
  );
}

export default App;
