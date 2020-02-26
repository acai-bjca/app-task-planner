import React, { Component } from 'react';
import './App.css';
import { Login } from "./Login/Login";
import { BarraMenu } from "./Drawer/Drawer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Drawer } from '@material-ui/core';

class App extends Component {
    constructor(props) {
        super(props);
        //this.state = {isLoggedIn: false}
        //console.log('LocalStorage remember '+ JSON.parse(localStorage.getItem('remember')));
        this.state = { isLoggedIn: JSON.parse(localStorage.getItem('remember')) };

        const isLogged = JSON.parse(localStorage.getItem('remember'));
        this.state = { isLoggedIn: isLogged }
    }

    changeView() {
        const newIsLoggedIn = this.state.isLoggedIn === false ? true : false;
        this.setState({ isLoggedIn: newIsLoggedIn });
    }

    render() {
        const LoginView = () => (
            <Login />
        );

        const Drawer = () => (
            <BarraMenu />
        );

        return (
            <Router>
                <div className="App">
                    <div>
                        <Route component={!this.state.isLoggedIn ? LoginView : Drawer} />
                    </div>
                </div>
            </Router>

        );
    }
}
//App.defaultProps = {isLoggedIn: false}; 
export default App;
