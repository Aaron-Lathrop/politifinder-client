import * as actions from '../actions/index';

const initialState = {
    location: null
}

const reducer = ( state=initialState, action ) => {

    switch( action.type ) {
        case(actions.ADD_LOCATION): {
            return Object.assign({}, state, {
                location: action.location
            })
        }

        default:
            return state;
    }
}

export default reducer;