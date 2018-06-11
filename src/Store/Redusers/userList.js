import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    users: null,
    loader: true
}

const usersListReduser = (state = initialState, action) => {
    switch (action) {
        case actionTypes.GETUSERS:
            state.users = action.payLoad;
            state.loader = action.loader;
            return state;

        default:
            return state;
    }

}

export default usersListReduser;