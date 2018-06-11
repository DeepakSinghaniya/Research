import React, {Component} from 'react';
import { Table } from 'reactstrap';
import axios from '../../axios.js';
import Loader from '../Loader/Loader';
import withErrorHandler from '../../Hoc/withErrorHandler';

import bootstrap from '../../scss/bootstrap.scss';

class UserList extends Component {
	  state = {
		users:null,
		loader: true
	  }
  
	componentDidMount(){
     axios.get('/users.json').then(responce => { 
       if(responce){
         this.setState({users: responce.data, loader: false});
       }
       
     }).catch(error => {
       this.setState({loader: false}); 
     });
     
  }
  deleteRecordHandler = (id) => {
	  this.setState({loader: true});
    axios.delete('/users/'+id+'.json').then(responce =>{
      console.log(responce);
      if(responce.status === 200) {
		  const users = {...this.state.users}
		  delete users[id];
			this.setState({users: users, loader: false});
	  } else {
      this.setState({loader: false});
    }
    }).catch(error => {
      
    });
  }
  
  editRecordHandler = (id) => {
    this.props.history.push('/Edit/'+id);
  }  



	render(){
	return(
	<div>
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
            {this.state.users? <tbody>
              {Object.keys(this.state.users).map(userKey => <tr key={userKey}>
                <td>{this.state.users[userKey].name}</td>
                <td>{this.state.users[userKey].email}</td>
                <td>{this.state.users[userKey].age}</td>
                <td><button className={[bootstrap.btn, bootstrap['btn-outline-danger']].join(' ')} onClick={() => this.deleteRecordHandler(userKey)}>Delete</button></td>
                <td><button className={[bootstrap.btn, bootstrap['btn-outline-success']].join(' ')} onClick={() => this.editRecordHandler(userKey)}>Edit</button></td>
              </tr>)}
            </tbody> : null}
          </Table>
		  <Loader show={this.state.loader} />
		  </div>
	);
	}
}

export default withErrorHandler(UserList, axios);