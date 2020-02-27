import React from 'react';
//Bootstrap
import { FormGroup, Dropdown, InputGroup, DropdownButton } from "react-bootstrap";
//Core
import { MenuItem, Input, InputLabel, FormControl, Select, TextField, Fab } from '@material-ui/core';
import { Paper } from '@material-ui/core';
//Icons
import { Done as DoneIcon } from '@material-ui/icons';
//Archivos
import imgUser from "../imagenes/user.png";
import "./NewTask.css";
import { TaskPlanner } from '../TaskPlanner/TaskPlanner';

export class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                description: "",
                responsible: {
                    name: "",
                    email: "sancarbar@gmail.com"
                },
                status: "",
                dueDate: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    handleChange(e) {
        if (e.target.id === 'desc') {
            this.setState({ description: e.target.value });
        } else if (e.target.id === 'resp') {
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'status') {
            this.setState({ status: e.target.value });
        } else if (e.target.id === 'dueDate') {
            this.setState({ dueDate: e.target.value });
        }
    }

    handleClickAdd(e) {
        console.log("Lista de tareas : "+localStorage.getItem('tasks'));
        if (localStorage.getItem('tasks') === null) {
            console.log("New task 1: "+JSON.stringify(this.state.task));
            const t = [this.state.task];
            localStorage.setItem('tasks', t);
        } else {
            const a = JSON.stringify(localStorage.getItem('tasks'));
            console.log("New task 2: "+ JSON.stringify(a));
            const actualT = localStorage.getItem('tasks');
            const newT = actualT.push(this.state.task);            
            localStorage.setItem('tasks', newT);
            console.log("New task 3: "+localStorage.getItem('newT'));
        }
        window.location.href = "/taskPlanner";

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
                        <FormControl fullWidth>
                            <InputLabel htmlFor="statusHtml">Status</InputLabel>
                            <Select
                                native
                                value={this.state.dueDate}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'status',
                                    id: 'statusHtml',
                                }}
                            >
                                <option value={"Ready"}>Ready</option>
                                <option value={"In progress"}>In progress</option>
                                <option value={"Done"}>Done</option>
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
                            <Fab
                                color="primary"
                                aria-label="add"
                                onClick={this.handleClickAdd}
                            >
                                <DoneIcon />
                            </Fab>
                        </div>
                    </Paper>
                </form>
            </div>

        );
    }
}