import { GET_GAMES_FAILURE, GET_GAMES_REQUEST, GET_GAMES_SUCCESS } from "./actionTypes"

const initialState={
    games:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_GAMES_REQUEST:
            return {...state,isLoading:true}
        case GET_GAMES_SUCCESS:
            return {...state, isLoading:false,games:payload}
        case GET_GAMES_FAILURE:
            return {...state,isLoading:false,isError:true}        
        default:
            return state
    }
}