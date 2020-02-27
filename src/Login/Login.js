import React from 'react';
import {Redirect} from "react-router-dom";
import imgUser from "../imagenes/user.png";
import { Button, Paper, Input, InputLabel, FormControl, CssBaseline } from '@material-ui/core';
import "./Login.css";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stateEmail: '', statePassword: '', remember: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        localStorage.setItem('email', 'amalia@gmail.com');
        localStorage.setItem('password', 'amalia');
        localStorage.setItem('remember', false);
    }

    handleChange(e) {
        if (e.target.id === 'email') {
            this.setState({ stateEmail: e.target.value });
        } else if (e.target.id === 'pasw') {
            this.setState({ statePassword: e.target.value });
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
        if (this.state.remember) return <Redirect to="/taskPlanner"/>;
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <div className="Login centered">
                        <form className="form">
                            <Paper elevation={3} className='Paper'>
                                <label id="titulo" >Task Planner.</label><br />
                                <img id="imgUser" src={imgUser} alt="" />
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input
                                        id="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={this.handleChange} />
                                </FormControl >
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pasw">Password</InputLabel>
                                    <Input
                                        id="pasw"
                                        autoComplete="current-password"
                                        onChange={this.handleChange} />
                                </FormControl ><br/><br/>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    onClick={this.handleClick}  >
                                    Sign Input
                                </Button><br/><br/>
                                <a href="url" className="Campo">Create Account</a>                                
                            </Paper>
                        </form>

                    </div>
                </main>
            </React.Fragment>
        );
    }
}