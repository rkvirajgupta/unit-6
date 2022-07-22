import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar'
import {Leftbar} from './components/Leftbar'
import { Details } from './components/Details';
import {Form} from './components/Form'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div  id='maindiv'>
      <Leftbar/>
      <Details/>
      <Form/>
     </div>
    </div>
  );
}

export default App;
