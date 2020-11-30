import {API_URL, GET_TARGET} from "./actionType";
import axios from 'axios';

// handle sync code
export const get_Target = (value) => {
    return {
        type: GET_TARGET ,
        payload : {
            Target : value
        }
    }
}



// handle async code
export const fetchGetTarget = () => {
    return dispatch => {
        axios.get(API_URL).then(resp => {
            dispatch(get_Target(resp.data))
            console.log(resp.data);
        });
    }
}



