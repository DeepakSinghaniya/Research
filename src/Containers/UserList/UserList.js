
import React, { Component } from 'react';
import axios from '../../axios';
import {connect} from 'react-redux';
import * as actions from '../../Store/Actions';
import Loader from '../../Components/Loader/Loader';
import { Table } from 'reactstrap';
import withErrorHandler from '../../Hoc/withErrorHandler';
import bootstrap from '../../assets/scss/bootstrap.scss';
import {Helmet} from 'react-helmet';


class UserList extends Component {
	componentDidMount(){
    this.props.getUsers();
 
     
  }
  deleteRecordHandler = (id) => {
    this.props.deleteUser(id);
	  // this.setState({loader: true});
    // axios.delete('/users/'+id+'.json').then(responce =>{
    //   console.log(responce);
    //   if(responce.status === 200) {
		//   const users = {...this.props.users}
		//   delete users[id];
		// 	this.setState({users: users, loader: false});
	  // } else {
    //   this.setState({loader: false});
    // }
    // }).catch(error => {
      
    // });
  }
  
  editRecordHandler = (id) => {
    this.props.history.push('/Edit/'+id);
  }  



	render(){
	return(
	<React.Fragment>
    <Helmet>
      <title>User List</title>
    </Helmet>
		<Table cssModule={bootstrap}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {this.props.users? <tbody>
              {Object.keys(this.props.users).map(userKey => <tr key={userKey}>
                <td>{this.props.users[userKey].name}</td>
                <td>{this.props.users[userKey].email}</td>
                <td>{this.props.users[userKey].age}</td>
                <td><button className={[bootstrap.btn, bootstrap['btn-outline-danger']].join(' ')} onClick={() => this.deleteRecordHandler(userKey)}>Delete</button></td>
                <td><button className={[bootstrap.btn, bootstrap['btn-outline-success']].join(' ')} onClick={() => this.editRecordHandler(userKey)}>Edit</button></td>
              </tr>)}
            </tbody> : null}
          </Table>
		  <Loader show={this.props.loader} />
		  </React.Fragment>
	);
	}
}

const mapDispatchToProps = (dispatch) => {
  return({
    getUsers: () => dispatch(actions.fatchUser()),
    deleteUser: (id) => dispatch(actions.deleteUser(id))
  });
}
const mapStoreToProps = store => {
  return ({
    users:store.userList.users,
		loader: store.userList.loader
  });
}
export default connect(mapStoreToProps,mapDispatchToProps)(withErrorHandler(UserList, axios));