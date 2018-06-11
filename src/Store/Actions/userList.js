import * as actionTypes from './actionTypes';
import axios from '../../axios';



export const getUsers = (data) => {
    return {type: actionTypes.GETUSERS, payLoad: data, loader: false}
}

export const hideLoader = () => {
    return {type: actionTypes.HIDELOADER}
}

export const fatchUser = dispatch => {
    axios.get('/users.json').then(responce => { 
        if(responce){
            dispatch(getUsers(responce.data));
        }
      }).catch(error => {
        this.setState({loader: false}); 
      });
}
