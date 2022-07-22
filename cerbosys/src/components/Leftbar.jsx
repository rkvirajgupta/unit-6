import "./Leftbar.css";
import { MdOutlineDashboard } from "react-icons/md";
import {BsCartDash} from 'react-icons/bs';
import {BsBagDash} from 'react-icons/bs';
import {SiBlogger} from 'react-icons/si';
import {BiMessageDetail} from 'react-icons/bi';

export const Leftbar = () => {
  return <div className="main">
    <div className="ProfilePic">  
        <img src="data:image/jpeg;base64,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" alt="" />
        <h5 className="name">Viraj Gupta</h5>
    </div>

    <div className="navbar">
        <ul>
            <li> <MdOutlineDashboard/>{"    "}Career</li>
            <li><BsCartDash/>{"    "}Enquiry</li>
            <li> <BsBagDash/>{"    "}Blog</li>
            <li> <SiBlogger/>{"    "}Chat</li>
            <li><BiMessageDetail/>{"    "}Quote Enquiry</li>
        </ul>
    </div>
        
  </div>
}