import { useState } from 'react'
import { useEffect } from 'react' 
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';



export const Home = ()=>{

    const navigate  = useNavigate()
    const [data,setData] = useState([])
    const [text,setText] = useState("")


useEffect(()=>{
    axios.get(`http://localhost:4700/job`)
    .then((res)=>{
    setData(res.data)

    
})
},[])
 
const handler = (value)=>{
  
    axios.get(`http://localhost:4700/job/search/${text}`)
    .then((res)=>{
        setData(res.data)
    })
}


return ( <div>
     
     <div><input type="text"  onInput={(e)=>{setText(e.target.value) }}/>
     
     <button onClick={()=>{ handler(text) } }>Search</button></div>


      {data.map((e,i)=>{
        return (
            <div key={e._id}>
            <Link  to= {`/${e._id}`}>
           
            <div> <p>{e.company}</p>
                    <p>{e.role}</p>
                  <p>{e.location}</p> 
             <button>for more details</button>
     
      </div>
            </Link></div>
        )
    })}


</div>
)
}