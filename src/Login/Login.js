import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import imgUser from "../imagenes/user.png";
import { makeStyles } from '@material-ui/core/styles';
import imgFondo from "../imagenes/user.png";
import { Paper, Grid } from '@material-ui/core';
import "./Login.css";
import BarraMenu from "./Drawer";
import {BrowserRouter as Router, Route} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleClic(e) {
        /*if (!this.state.userName || !this.state.passw){
            return;
        }if(this.state.userName === localStorage.getItem('username') && this.state.passw === localStorage.getItem('password')){
            localStorage.setItem('remember', true);
        }*/
        localStorage.setItem('username', email);
        localStorage.setItem('password', password);
        localStorage.setItem('remember', true);
    }

    function handleChange(e) {
        if (e.target.id === 'emailT') {
            setEmail({ userName: e.target.value });
        } else if (e.target.id === 'paswT') {
            setPassword({ passw: e.target.value });
        }
    }

    return (
        <div className="Login">
            <Form >
                <div className='centered'>
                    <Paper elevation={3} className='Paper'>
                        <label id="titulo" >Task Planner.</label><br />
                        <img id="imgUser" src={imgUser} alt="" />
                        <Form.Group controlId="formBasicEmail" className="Campo">
                            <Form.Label className="Campo">Email address</Form.Label><br />
                            <Form.Control id="emailT" className="InputText" type="email" placeholder="Enter email" onChange={handleChange()} />
                            <Form.Text className="InputText" className="text-muted">

                            </Form.Text>
                        </Form.Group><br />

                        <Form.Group controlId="formBasicPassword" className="Campo">
                            <Form.Label className="Campo">Password</Form.Label><br />
                            <Form.Control id="paswT" className="InputText" type="password" placeholder="Password" onChange={handleChange()} />
                        </Form.Group><br />

                        <Button className='ButtonI' type="submit" onClick={this.handleClic()}>
                            <Router>
                                <div>
                                    <Route component={localStorage.getItem('remember') ? <BarraMenu /> : <Login />} />
                                </div>
                            </Router>

                        </Button><br />
                        <a href="url" className="Campo">Create Account</a>
                    </Paper>
                </div>
            </Form>
        </div>
    );
}