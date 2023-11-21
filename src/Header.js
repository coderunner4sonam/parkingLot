import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import {SETNUMBER } from "./redux/actionType";

function Header() {
  const {number,avaiable} = useSelector((state) => state);
  const dispatch = useDispatch();

    let navigate= useNavigate();
    
    function handleparkinglot(){
        
        navigate("/parkinglot");
     }
     
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <input type="number" onChange={(e)=>dispatch(SETNUMBER(e.target.value))} placeholder='please enter number' style={{width:"500px",height:"50px",textAlign:"center",borderRadius:"5px"}}/>
                <button onClick={handleparkinglot} style={{width:"55px",height:"50px",textAlign:"center",borderRadius:"100px",backgroundColor:"green"}} >Submit</button>
            </div>
    </div>
  )
}

export default Header
