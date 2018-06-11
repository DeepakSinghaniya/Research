import React, { Component } from 'react';
import './App.scss';
import Loadable from 'react-loadable';

import { Container, Row, Col } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

import Bootstrap from './assets/scss/bootstrap.scss';

import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//import Home from './Components/Home/Home';
//import AddUser from './Components/AddUsers/AddUser';
//import UserList from './Components/UserList/UserList';
//import EditUser from './Components/EditUser/EditUser';


const AddUserLoadable = Loadable({
  loader: () => import('./Containers/AddUsers/AddUser'),
  loading() {
    return <Loader show />
  }
});

const UserListLoadable = Loadable({
  loader: () => import('./Containers/UserList/UserList'),
  loading() {
    return <Loader show />
  }
});

const EditUserLoadable = Loadable({
  loader: () => import('./Containers/EditUser/EditUser'),
  loading() {
    return <Loader show />
  }
});

const HomeLoadable = Loadable({
  loader: () => import('./Components/Home/Home'),
  loading() {
    return <Loader show />
  }
});


class App extends Component {


  render() {
    return (
      <div className="App">

        <Header/>
        <div className="content">
          <Container cssModule={Bootstrap}  >
            <Row cssModule={Bootstrap}>
              <Col cssModule={Bootstrap} xs={12}>

                <Switch>
                  <Route exact path='/' component={HomeLoadable} />
                  <Route path='/user-list' component={UserListLoadable} />
                  <Route path='/add-user' component={AddUserLoadable} />
                  <Route path="/edit/:id" component={EditUserLoadable} />
                </Switch>

              </Col>
            </Row>
          </Container>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
