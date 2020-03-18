import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
//Core
import { Button, Paper, Input, InputLabel, FormControl, CssBaseline, DialogTitle } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
//Archivos
import "./Login.css";
import imgUser from "../imagenes/user.png";





export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stateEmail: '', statePassword: '', remember: false, dialog: '', open: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    login() {
        const self1 = this;       
        axios.post('http://localhost:8080/api/user/login', {
            email: this.state.stateEmail, //username: 'xyz',
            password: this.state.statePassword //password: 'password'
        })
        .then(function (response) {
            console.log(response.data);
            localStorage.setItem("token", JSON.stringify(response.data));
            //self1.validate();
        })
        .catch(function (error) {
            self1.handleOpen();
        });
    }


    handleChange(e) {
        if (e.target.id === 'email') {
            this.setState({ stateEmail: e.target.value });
        } else if (e.target.id === 'pasw') {
            this.setState({ statePassword: e.target.value });
        }
    }

    validate() {
        axios.post('http://localhost:8080/api/user/validate', {
            token: localStorage.getItem("token"),
        })
        .then(function (response) {
            console.log(response.data);
            //self.validate();
        })
        .catch(function (error) {
            //self.handleOpen();
        });

    }

    handleOpen() {
        this.setState({ dialog: 'Usuario o contraseña incorrecta.' });
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleClick(e) {
        e.preventDefault();
        if (!this.state.stateEmail || !this.state.statePassword) {
            return;
        }
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if (!(user === null)) {
            if (this.state.stateEmail === user.email && this.state.statePassword === user.passw) {
                this.login();
                this.setState({ remember: true });
                localStorage.setItem('remember', true);
            }
        }
    }

    render() {
        if (localStorage.getItem('remember') === false) return <Redirect to="/" />;
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
                                </FormControl ><br /><br />
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    onClick={this.handleClick}  >
                                    Sign Input
                                </Button><br /><br />
                                <a href="/Registro" className="Campo">Create Account</a>
                            </Paper>
                        </form>
            |           <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {this.state.dialog}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary" autoFocus>
                                    Ok
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}