import axios from 'axios'
import { GET_STOCKS, DELETE_STOCKS, ADD_STOCKS } from './types'


//GET stocks method
export const getStocks = () => dispatch => {
    axios
    .get("/api/stocks")
    .then(res => {
        dispatch({
            type: GET_STOCKS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

//DELETE stocks method
export const deleteStocks = id => dispatch => {
    axios
    .delete(`/api/stocks/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_STOCKS,
            payload: id
        });
    }).catch(err => console.log(err));
}

//ADD stocks method
export const addStocks = stock => dispatch => {
    axios
    .post("/api/stocks/", stock)
    .then(res => {
        dispatch({
            type: ADD_STOCKS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}