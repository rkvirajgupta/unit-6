import { useState } from 'react'
import './App.css'

function App() {
  const[data,setData] = useState({
    name : Array.from({ length: 25 })
  })
  const[loading,setLoading] = useState(false)

  const fetchdata=()=>{
    
    setTimeout(()=>{
      setData({
        name : data.name.concat(Array.from({ length: 25 }))
      })
      setLoading(false)
    },1000)
  }
  console.log(data)

  const scroll = (e) =>{
    if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50) { 
      setLoading(true)
      fetchdata()
    }
  }

  return (
    <div className="App">
      <div onScroll={(e)=>scroll(e)} id='maindiv'>

      {data.name.map((e,i)=>(<h1>{`Masai Student-${i+1}`}</h1>))}

      {loading ? <h1>Loading...</h1> : null}
      </div>
    </div>
  )
}

export default App