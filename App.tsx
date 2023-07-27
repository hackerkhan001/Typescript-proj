import './App.css';
import Yupform from './form';
import Sample from './sample';
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Sample/>}></Route>
          <Route path="/form" element={<Yupform/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
