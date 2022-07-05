import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const JobDetails = () => {
	const { id } = useParams();
	const [e, setE] = useState({});
    const [status,setStatus] = useState(false)
	

	useEffect(() => {
		fetch();
	}, []);

	const fetch = async () => {
		const { data } = await axios(`http://localhost:4700/job/${id}`);
		setE(data);
	};

	return (
		<div className='user_details'>
         
            <div key={e._id}>
           
            <div> <p>Job Company:{e.company}</p>
        <p>Job Role:{e.role}</p>
        <p>Job Location:{e.location}</p> 
       <p>Job Sallary:{e.salary}</p>
       <p>Job Description:{e.description}</p>
       <button onClick={()=>{
        alert('you are successfully applied')
        setStatus(true)
       }}>{status!==true ? "Apply Now":"Applied"}</button>
     
      </div>
            </div>
        

		</div>
	);
};
