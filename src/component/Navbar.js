import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
// import Home from './Home';
import Login from './Login';
// import Contacts from './Contacts';
// import About from './About';
// import Gallery from './Gallery';
// import ViewContact from './ViewContact';

export class NavBar extends Component {
    render() {
        return (
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Brand</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>

                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/About" activeClassName="active">About</NavLink>

                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contacts" activeClassName="active">Contact</NavLink>

                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Gallery" activeClassName="active">Gallery</NavLink>

                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/ViewContact" activeClassName="active">View Contacts</NavLink>

                            </li>
                        </ul>
                        <div class="nav-item">
                            <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>

                        </div>
                    </div>
                </nav>

                <Route exact path="/" component={Login} />





            </Router>
        )
    }
}

export default NavBar