
export const PARK=(payload)=>{
  return {
    type:"PARKING_ALLOCATION",
    payload
  }  
}

export const DELETE=(payload)=>{
    return {
      type:"DEALLOCATE",
      payload
    }  
  }

  export const SETNUMBER=(payload)=>{
    return {
      type:"SET_NUMBER",
      payload
    }  
  }

