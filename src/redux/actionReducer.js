const intialState={
    number:0,
    parkingLot:[],
    avaiable:[] 
}

function actionReducer (state=intialState,action){
    switch(action.type){
        case "PARKING_ALLOCATION" :
            let newparkinglot=[...state.parkingLot];
            newparkinglot.push(action.payload); 
            let newavaibletwo = [...state.avaiable];
            newavaibletwo[state.parkingLot.length]=true;

            return {
                ...state, parkingLot:newparkinglot,
                avaiable:newavaibletwo
             
            }
        case "DEALLOCATE" :
            let newparkinglotdelete =[...state.parkingLot];
            newparkinglotdelete.splice(action.payload,1);
            let newavaiblethree = [...state.avaiable];
            newavaiblethree[action.payload]=false;
            
            return {
                ...state,parkingLot:newparkinglotdelete,
                avaiable:newavaiblethree

            }
        case "SET_NUMBER" : 
             let newavaible = [...Array(parseInt(action.payload)).fill(false)] 
             
            return {
                ...state,number:action.payload,
                avaiable:newavaible
            }
        default :
           return state
           
    }
}
export default actionReducer;
