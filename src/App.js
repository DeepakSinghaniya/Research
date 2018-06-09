import React, { Component } from 'react';
import './App.scss';
import Loadable from 'react-loadable';

import { Container, Row, Col } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

import Bootstrap from './scss/bootstrap.scss';

import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//import Home from './Components/Home/Home';
//import AddUser from './Components/AddUsers/AddUser';
//import UserList from './Components/UserList/UserList';
//import EditUser from './Components/EditUser/EditUser';


const AddUserLoadable = Loadable({
  loader: () => import('./Components/AddUsers/AddUser'),
  loading() {
    return <Loader show />
  }
});

const UserListLoadable = Loadable({
  loader: () => import('./Components/UserList/UserList'),
  loading() {
    return <Loader show />
  }
});

const EditUserLoadable = Loadable({
  loader: () => import('./Components/EditUser/EditUser'),
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

        <Header bootstrapModule={Bootstrap} />
        <div className="content">
          <Container cssModule={Bootstrap}  >
            <Row cssModule={Bootstrap}>
              <Col cssModule={Bootstrap} xs={12}>

                <Switch>
                  <Route exact path='/' render={() => <HomeLoadable bootstrapModule={Bootstrap} />} />
                  <Route path='/user-list' render={() => <UserListLoadable bootstrapModule={Bootstrap} />} />
                  <Route path='/add-user' render={() => <AddUserLoadable bootstrapModule={Bootstrap} />} />
                  <Route path="/edit/:id" render={() => <EditUserLoadable bootstrapModule={Bootstrap} />} />
                </Switch>

              </Col>
            </Row>
          </Container>
        </div>

        <Footer bootstrapModule={Bootstrap} />

      </div>
    );
  }
}

export default App;
