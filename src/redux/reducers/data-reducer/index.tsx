import { SET_DATA, SORT_DATA } from "../../actions/data-actions/data-actions-types";



const INITIAL_STATE = {
    data: null
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action?.payload
            };
        default:
            return state;
    }
};