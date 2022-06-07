import './App.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function App() {
let [searchParams, setSearchParams] = useSearchParams();
const [data,setData] = useState([])
const [page,setPage] = useState(searchParams.get('page') || 1)
const [category,setCategory] = useState(searchParams.get('category') || '')
const [sort,setSort] = useState(searchParams.get('sort') || '')
const [color,setColor] = useState(searchParams.get('color') || '')

useEffect(()=>{
  axios.get(`http://localhost:4700/hair?color=${color}&category=${category}&sort=${sort}&page=${page}`).then((res)=>setData(res.data.hair))
  setSearchParams({page,category,sort,color})
},[page,category,sort,color])


  return (
    <>
    <div id='filter'>
      <select name="category" onChange={(e)=>setCategory(e.target.value)} >
        <option value="">Category</option>
        <option value="hair">hair</option>
        <option value="skin">skin</option>
      </select>
      <select name="sort"  onChange={(e)=>setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="sort_asc">Asc</option>
        <option value="sort_dsc">Desc</option>
      </select>
      <select name="color" onChange={(e)=>setColor(e.target.value)}>
       <option value="">color</option>
        <option value="1 more color">1 more color</option>
        <option value="2 more color">2 more color</option>
        <option value="3 more color">3 more color</option>
        <option value="4 more color">4 more color</option>
        <option value="5 more color">5 more color</option>
      </select>
    </div>
    <div className="App">
      {data.map((e)=>(
        <div id='card' key={e._id}>
         
         <img src={e.image_url} alt="" />
         
         <p>{e.brandname}</p>
          <p>{e.productName}</p>
          <p>₹ {e.price}</p>
         

        </div>
      ))}
    </div>
    <div id="btns">
      <button onClick={()=>setPage(page-1)}>PREV</button>
      <button onClick={()=>setPage(1)}>1</button>
      <button onClick={()=>setPage(2)}>2</button>
      <button onClick={()=>setPage(3)}>3</button>
      <button onClick={()=>setPage(4)}>4</button>
      <button onClick={()=>setPage(5)}>5</button>
      <button onClick={()=>setPage(page+1)}>NEXT</button>
    </div>
    </>
  )
}

export default App