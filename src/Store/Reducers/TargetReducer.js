import {GET_TARGET , ADD_LOCALE} from "../Actions/actionType";
import {updateObject} from "../utility";


const initialState = {
    Target :  {Target : {
        en : {},
        ar : {}
    }},
    locale : 'en' 
}


const TargetReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_TARGET :
             return updateObject(state , {Target:action.payload}) ;
        case ADD_LOCALE :
            return updateObject(state , {locale:action.payload}) ;
        default :
            return {
                ...state
            }

    }
};

export default TargetReducer ;