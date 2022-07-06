import { useState } from 'react'
import { useEffect } from 'react' 
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'



export const Home = ()=>{

    const navigate  = useNavigate()
    const [data,setData] = useState([])
    const [text,setText] = useState(null)


useEffect(()=>{
    axios.get(`https://expertia-asg.herokuapp.com/job`)
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
     
     <div><input type="text" placeholder='try MERN' onInput={(e)=>{setText(e.target.value) }}/>
     
     <button onClick={()=>{ handler(text) } }>Search</button></div>

    {text===null ? data.map((e,i)=>{
        return (
            <div key={e._id} id="maindiv">
            <Link  to= {`/${e._id}`}>
           
            <div> <p>{e.company}</p>
                    <p>{e.role}</p>
                  <p>{e.location}</p> 
             <button>for more details</button>
     
      </div>
            </Link></div>
        )
    }) : 



      data.filter((item)=>{
        return item.role===text
    }).map((e,i)=>{
        return (
            <div key={e._id} id="maindiv">
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