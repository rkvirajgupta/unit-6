

import { useEffect,useState } from 'react'
import './Details.css'
import {BsFillBagFill} from 'react-icons/bs'

import {AiFillContacts} from 'react-icons/ai'
import {BiMessageAltDots} from 'react-icons/bi'




export const Details = ()=>{
 
   const [data,setData] = useState([])
   
   
   useEffect(()=>{
    getData();
   },[])


   const getData=async()=>{

    const value =await fetch("https://cerbosys.in:3700/cerbosys/getAllEnquiry") 
    const newData =await value.json()
    
    setData(newData.data)
   }

return <div className='bodyofenquire'>
          <div id='yio'>
            <div className='three'>
              <div className='qwe'><BsFillBagFill id="reacticon"/>{":"}</div>
              <div><p>Curent openings</p>
              <p>6</p></div>
            </div>
            <div className='three'>
              <div className='qwe'><AiFillContacts id="reacticon"/>{":"}</div>
              <div><p>Curent Application</p>
              <p>25</p></div>
            </div>
            <div className='three'>
              <div className='qwe'><BiMessageAltDots id="reacticon"/>{":"}</div>
              <div><p>Total Enquiry</p>
              <p>12</p></div>
            </div>
          </div>
          <div>
            <h2>Enquiry</h2>
            <div>
                <div id="dataset" className='sivian'
                ><p>S.No.</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Phone No.</p> 
                <p>Email</p>
                <p>Detials</p>
                </div>
                {data.map((e,i)=>{
          return <div>
                   <div id="dataset">
                    <p>{i+1}</p><p>{e.first_name}</p>
                   <p>{e.last_name}</p>
                   <p>{e.contact_number}</p>
                   <p>{e.email}</p>
                   <p id="bluetacker">Click to Know More</p>
                   
                   </div>

          </div>


                })}
            </div>
          </div>
        </div>




}