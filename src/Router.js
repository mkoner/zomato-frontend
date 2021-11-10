import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Filter from './components/Filter';
import Details from './components/Details';
import Header from './components/Header';

const GoogleVerif= './google06d15073cc6466c0.html'


export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/filter" component={Filter} />
                <Route path="/details" component={Details} />
                <Route path="/google06d15073cc6466c0.html" render={() => <div>{GoogleVerif}</div>} />
            </BrowserRouter>
        )
    }
}
