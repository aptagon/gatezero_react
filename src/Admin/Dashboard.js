import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import ListComponent from './ListComponent'


export default function Dashboard() {
  const [fullname, setFullName] = useState("");
  useEffect(() => {
     let userData = localStorage.getItem("User");
     let user = JSON.parse(userData);
     setFullName(user.user.name);
  }, []);
  return (
    <div>
      <div className='dashbord-page'>
          <div className='container'>
             
                <div className='dashboard-title'>
                  <div className='dashboard-patel'>
                      <h1>Dashboard</h1>
                      <h3>{ fullname }</h3>
                  </div>
                  <div className='dashboard-button2'>
                   <Link to="/user/initiative" className='dashboard-button button' variant="primary"><i className="fa-solid fa-square-plus"></i>New Scorecard</Link>
                  </div>  
                </div>
                <ListComponent />  
         
          </div>
      </div>
    </div>
  )
}
