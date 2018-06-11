import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    users: null,
    loader: true
}

const usersListReduser = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETUSERS:
            const stateCopy = { ...state };
            stateCopy.users = action.payLoad;
            stateCopy.loader = action.loader;
            return stateCopy;

        case (actionTypes.DELETEUSER):
            const stateToDeleteUser = { ...state };
            const stateUsers = { ...stateToDeleteUser.users };
            delete stateUsers[action.id];
            stateToDeleteUser.users = stateUsers;
            stateToDeleteUser.loader = false;
            return stateToDeleteUser;

        case actionTypes.HIDELOADER:
            return { ...state, loader: false };

        case actionTypes.SHOWLOADER:
            console.log('show Loader');
            return { ...state, loader: true };

        default:
            return state;
    }

}

export default usersListReduser;