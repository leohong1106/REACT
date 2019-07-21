import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import './Main.scss';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import CarList from './CarList';

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div className="main">
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/carlist">CarList</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/stuff" component={Stuff} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/carlist" component={CarList} />
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;