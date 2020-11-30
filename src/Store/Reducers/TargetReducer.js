import {GET_TARGET} from "../Actions/actionType";
import {updateObject} from "../utility";


const initialState = {
    Target : []
}


const TargetReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_TARGET :
             return updateObject(state , {Target:action.payload}) ;
        default :
            return {
                ...state
            }

    }
};

export default TargetReducer ;