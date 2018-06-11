import * as actionTypes from './actionTypes';
import axios from '../../axios';



export const getUsers = (data) => {
    return { type: actionTypes.GETUSERS, payLoad: data, loader: false }
}

export const hideLoader = () => {
    return { type: actionTypes.HIDELOADER }
}

export const showLoader = () => {
    return { type: actionTypes.SHOWLOADER }
}

export const fatchUser = () => {
    return (dispatch, getState) => {
        axios.get('/users.json').then(responce => {
            if (responce) {
                dispatch(getUsers(responce.data));
            }
        }).catch(error => {
            dispatch(hideLoader());
        });
    }

}

const deleteUserDispatch = (id) => {
    return { type: actionTypes.DELETEUSER, id: id };
}

export const deleteUser = (id) => {
    return (dispatch, getState) => {
        dispatch(showLoader());
        axios.delete('/users/' + id + '.json').then(responce => {
            if (responce.status === 200) {
                dispatch(deleteUserDispatch(id));
            } else {
                dispatch(hideLoader());
            }
        }).catch(error => {
            dispatch(hideLoader());
        });
    }
}


export const addUser = (id, data) => {
    return {type: actionTypes.ADDUSER, id, data}
}