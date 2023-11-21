import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PARK , DELETE} from "./redux/actionType";

function ParkingLot() {
  const {number,parkingLot,avaiable} = useSelector((state) => state);
  const dispatch = useDispatch();

  const [vehicledetails, setVehicledetails] = useState({
    parkId:-1,
    vehiclenumber: "",
    vehicledate: "",
    vehicletime: "",
  });

  function handlevehiclenumber(e) {
    setVehicledetails({ ...vehicledetails, vehiclenumber: e.target.value });
  }
  function handledate(e) {
    setVehicledetails({ ...vehicledetails, vehicledate: e.target.value });
  }
  function handletime(e) {
    setVehicledetails({ ...vehicledetails, vehicletime: e.target.value });
  }

  function handledetails() {
    console.log(parkingLot.length + " "+ number)

    if(parkingLot.length==number){
        alert("parking lot is full")
        return;
    }
   
    setVehicledetails({...vehicledetails,parkId:parkingLot.length})
    dispatch(PARK(vehicledetails));
  }

  function deallocation(ind){
    
    alert(
        parkingLot[ind].vehiclenumber+" "+
        parkingLot[ind].vehicledate+" "+
        parkingLot[ind].vehicletime
    )
     dispatch(DELETE(ind))

  }
 
 console.log(avaiable)
  return (
    <div
      style={{
        borderRadius: "5px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      {
        [...Array(parseInt(number))].map((element, index) => (
          <div onClick={()=>deallocation(index)}
            style={{
              width: "9%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid black",
              margin: "0.1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:avaiable[index]?"grey":"white"
            }}
            key={index + index}
          >
            
            <h3>P{index + 1}</h3>
          </div>
        ))

      }
      <div>
        <input type="text" onChange={handlevehiclenumber} />
        <input type="date" onChange={handledate} />
        <input type="time" onChange={handletime} />
        <button onClick={handledetails}>Submit details</button>
      </div>
    </div>
  );
}

export default ParkingLot;
