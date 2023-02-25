import {
  GET_GAMES_FAILURE,
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
} from "./actionTypes";
import axios from "axios"

const getGamesRequest = () => {
  return { type: GET_GAMES_REQUEST };
};

const getGamesSuccessAction = (payload) => {
  return { type: GET_GAMES_SUCCESS, payload };
};

const getGamesFailureAction = () => {
  return { type: GET_GAMES_FAILURE };
};


export const getGames=(param)=>(dispatch)=>{
    dispatch(getGamesRequest())
    axios
    .get(' http://localhost:8080/gaming',param)
    .then((res)=>{
        dispatch(getGamesSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(getGamesFailureAction())
    })
}