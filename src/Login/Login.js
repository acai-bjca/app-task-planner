import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import imgUser from "../imagenes/user.png";
import { makeStyles } from '@material-ui/core/styles';
import imgFondo from "../imagenes/user.png";
import { Paper, Input, InputLabel, FormControl, FormLabel, CssBaseline  } from '@material-ui/core';
import "./Login.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stateEmail: '', statePassword: '', remember: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        localStorage.setItem('email', 'amalia');
        localStorage.setItem('password', 'amalia');
        localStorage.setItem('remember', false);
    }

    handleChange(e){        
        if(e.target.id === 'email'){
            this.setState({stateEmail: e.target.value});            
        }else if(e.target.id === 'pasw'){
            this.setState({statePassword: e.target.value});            
        }
    }

    handleClick(e) {
        if (!this.state.stateEmail || !this.state.statePassword) {
            return;
        } if (this.state.stateEmail === localStorage.getItem('email') && this.state.statePassword === localStorage.getItem('password')) {
            localStorage.setItem('remember', true);
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <div className="Login centered">
                        <Paper elevation={3} className='Paper'>
                            <form className="form">
                                <label id="titulo" >Task Planner.</label><br />
                                <img id="imgUser" src={imgUser} alt="" />
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input
                                        id="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={this.handleChange}/>
                                </FormControl >
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pasw">Password</InputLabel>
                                    <Input
                                        id="pasw"
                                        autoComplete="current-password"
                                        onChange={this.handleChange}/>
                                </FormControl >
                                <Button 
                                className='ButtonI' 
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick = {this.handleClick}  >                                
                                
                               
                                Sign in
                            

                                </Button><br />
                                <a href="url" className="Campo">Create Account</a>
                                {/*<Router>
                                 <div>
                                    <Route component={localStorage.getItem('remember') ? <BarraMenu /> : <Login />} />
                                </div>
                                    </Router>*/}
                            </form>
                        </Paper>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}