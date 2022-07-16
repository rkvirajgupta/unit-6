
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState([]);
  
  useEffect(()=>{
   
    getData() 
  },[])
    
  async function getData() {
            var data = await fetch("http://localhost:3000/restaurants");
            var data1 = await data.json();
            console.log(data1);
            setTitle(data1.res);
         
  }

 
  return (
    <div className="App">
      <button onClick={()=>{getData()}}>restaurants</button>

      <div className='main'>
        {title.map((e,index)=>{
          return(
            <div key={index} className="content">             
              <span>{e.title}</span><br/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
