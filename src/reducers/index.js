import { RECV_VALUE, SET_LOADING_STATUS } from '../actions';

const initialState = {
    value: -1,
    isLoading: true
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECV_VALUE:
            return Object.assign({}, state, {
                value: action.value
            });
        case SET_LOADING_STATUS:
            return Object.assign({}, state, {
                isLoading: action.status
            })
        default:
            return state;
    }
};

export default counterReducer;
