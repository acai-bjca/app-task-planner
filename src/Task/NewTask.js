import React from 'react';
//Bootstrap
import { FormGroup, Dropdown, InputGroup, DropdownButton } from "react-bootstrap";
//Core
import { MenuItem, Input, InputLabel, FormControl, Select, TextField, Fab} from '@material-ui/core';
import {Paper} from '@material-ui/core';
//Icons
import { Done as DoneIcon } from '@material-ui/icons';
//Archivos
import imgUser from "../imagenes/user.png";
import "./NewTask.css";

export class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task:{
            description: "",
            responsible: {
                name: "",
                email: "sancarbar@gmail.com"
            },
            status: "",
            dueDate: ""}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        if (e.target.id === 'desc') {
            this.setState({description: e.target.value });
        } else if (e.target.id === 'resp') {
            this.setState({ name: e.target.value });
        }else if (e.target.id === 'status') {
            this.setState({ status: e.target.value });
        }else if (e.target.id === 'dueDate') {
            this.setState({ dueDate: e.target.value });
        }
    }

    handleClick(e) {
        if (!this.state.stateEmail || !this.state.statePassword) {
            return;
        } if (this.state.stateEmail === localStorage.getItem('email') && this.state.statePassword === localStorage.getItem('password')) {
            localStorage.setItem('remember', true);
        }
    }

    handleClickAdd(e) {
        const tasks = localStorage.getItem('tasks');
        localStorage.setItem('tasks', tasks.push(this.state.task));
        console.log(localStorage.getItem('tasks'));

    }

    render() {
        return (
            <div className="Fondo centered">
                <form className="form">
                    <Paper elevation={3} className='Paper'>
                    <label id="titulo">New Task</label>
                    <br /><br />
                    <FormControl required fullWidth>
                        <InputLabel htmlFor="desc">Descripcion</InputLabel>
                        <Input
                            id="desc"
                            autoComplete="desc"
                            autoFocus
                            onChange={this.handleChange}
                            />
                    </FormControl >
                    <br /><br />
                    <FormControl required fullWidth>
                        <InputLabel htmlFor="resp">Responsible</InputLabel>
                        <Input
                            id="resp"
                            autoComplete="resp"
                            autoFocus
                            onChange={this.handleChange} />
                    </FormControl >
                    <br /><br />
                    <FormControl required fullWidth>
                        <InputLabel htmlFor="status">Status</InputLabel>
                        <Select style={{ minWidth: "100%" }}
                            id="status"
                            onChange={this.handleChange}
                        >
                            <MenuItem value={"ready"}>ready</MenuItem>
                            <MenuItem value={"in progress"}>in progress</MenuItem>
                            <MenuItem value={"complete"}>complete</MenuItem>
                        </Select>
                    </FormControl>
                    <br /><br />
                    <FormControl required fullWidth>
                        <InputLabel style={{ marginTop: "5%" }} htmlFor="dueDate">Due Date</InputLabel>
                        <TextField style={{ minWidth: "100%" }}
                            id="dueDate"
                            type="date"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <br /><br /><br /><br />
                    <div style={{ textAlign: "right", width: "100%" }}>
                        <Fab color="primary" aria-label="add">
                            <DoneIcon />                        
                        </Fab>
                    </div>
                    </Paper>
                </form>
            </div>

        );
    }
}