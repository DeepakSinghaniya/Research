import React from 'react';
import logo from '../../logo.svg';
import { Navbar, Nav, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const header = props => (
    <header>
         
                <Navbar cssModule={props.bootstrapModule} color="light" light expand="md">
                  <Link className={props.bootstrapModule['navbar-brand']} to="/"><img src={logo} alt='site logo' title="Logo" width="50" />Assignment</Link>
                  <Nav cssModule={props.bootstrapModule} className="ml-auto" navbar>
                    <NavItem>
                      <Link className={props.bootstrapModule["nav-link"]} to="/user-list">User List</Link>
                    </NavItem>
                    <NavItem>
                      <Link className={props.bootstrapModule["nav-link"]} to="/add-user">Add User</Link>
                    </NavItem>

                  </Nav>
                </Navbar>
             
        </header>
)

export default header;