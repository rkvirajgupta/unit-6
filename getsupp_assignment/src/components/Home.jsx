import { useEffect, useState } from "react"
import { BasicModal } from "./Box"
import InfiniteScroll from "react-infinite-scroll-component";

export const Home=()=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [name,setName]=useState("")
    const [count,setcount]=useState(1)
    useEffect(()=>{
    Getdata()
    },[name])

    const Getdata=async() =>{
       
        try{
            
            let Data= await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
            let FetchData=await Data.json()
            setData(FetchData.results)
            setcount(FetchData.info.count)
            console.log(FetchData)
        }
        catch(error){
            console.log(error)
        }

     }
     
     const GetdataAgain=async()=>{
        
            try{
                setPage(page+1)
                let Data1= await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
                let FetchData1=await Data1.json()
                setData([
                  ...data.concat(FetchData1.results)]
                )
              
               
            }
        
        catch(error){
            console.log(error)
        }
     }
console.log(data)
return (
    <div>
    <input
    style={{width:"40%",height:"40px",margin:"10px"}}
    placeholder="Search name hear" type="text" onInput={(e)=>{setName(e.target.value)}}></input>
    <InfiniteScroll
            dataLength={data.length}
            next={GetdataAgain}
            hasMore={data.length<=count}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
        {data.map((e)=>{
            return (
              
                <div key={e.id} >
                <div><BasicModal  prop={e}/>
                   
                    </div>
                </div>
            )
        })}
      </InfiniteScroll>
      
    </div>
)

}