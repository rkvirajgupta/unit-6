import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { JobDetails } from './components/JobDetails';
import { Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/:id" element={<JobDetails></JobDetails>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
