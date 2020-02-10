import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import imgUser from "../imagenes/user.png";
import imgFondo from "../imagenes/user.png";
import { Paper } from '@material-ui/core';
import "./Login.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">            
            <Form >
            <Paper elevation={3} className='Paper'>               
                <label id="titulo" >Task Planner.</label>
                    <img id="imgUser" src={imgUser} alt="" />
                    <Form.Group controlId="formBasicEmail" className="Campo">
                        <Form.Label className="Campo">Email address</Form.Label><br/>
                        <Form.Control className="InputText" type="email" placeholder="Enter email" />
                        <Form.Text className="InputText" className="text-muted">
                            
                        </Form.Text>
                    </Form.Group><br/>

                    <Form.Group controlId="formBasicPassword" className="Campo">
                        <Form.Label className="Campo">Password</Form.Label><br/>
                        <Form.Control className="InputText" type="password" placeholder="Password" />
                    </Form.Group><br/>
                    
                    <Button className='ButtonI' type="submit">
                        Submit
                    </Button><br/>
                    <a href="url" className="Campo">Create Account</a>
                    </Paper>
            </Form>
            
        </div>
    );
}