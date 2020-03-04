import React from 'react';
import {Redirect} from "react-router-dom";
//Bootstrap
//Core
import { MenuItem, Input, InputLabel, FormControl, Select, TextField, Fab } from '@material-ui/core';
import { Paper, CssBaseline} from '@material-ui/core';
//Icons
import { Done as DoneIcon } from '@material-ui/icons';
//Archivos
import "../Login/Login.css";

export class NewTask extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            description: "",
            responsible: {
                name: "",
                email: "sancarbar@gmail.com"
            },
            status: "",
            dueDate: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChange(e) {
        console.log(e.target.id)
        if (e.target.id === 'desc') {
            this.setState({description: e.target.value });
        } else if (e.target.id === 'resp') {
            this.setState({responsible: { name: e.target.value}});
        }else if (e.target.id === 'dueDate') {
            this.setState({ dueDate: e.target.value});
        }
    }

    handleChangeSelect(e) {
        this.setState({ status: e.target.value});        
    }

    handleClickAdd(e) {
        console.log("tasks: " + localStorage.getItem('tasks'));
        var actualT =  JSON.parse(localStorage.getItem('tasks'));
        actualT.push(this.state);
        localStorage.setItem('tasks', JSON.stringify(actualT));
        console.log("update tasks: " + localStorage.getItem('tasks'));
        window.location.href = "/taskPlanner";

    }

    render() {
        if (localStorage.getItem('remember') === false) return <Redirect to="/"/>;
        return (
            <React.Fragment>
        <CssBaseline />
        <main className="layout">
            <div className="Login centered">
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
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </FormControl >
                        <br /><br />
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="resp">Responsible</InputLabel>
                            <Input
                                id="resp"
                                autoComplete="resp"
                                value={this.state.responsible.name}
                                onChange={this.handleChange} />
                        </FormControl >
                        <br /><br />
                        <FormControl fullWidth>
                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Select                                
                                id="status"
                                value={this.state.status}                                
                                onChange={this.handleChangeSelect}
                            >
                                <MenuItem id="" value={"Ready"}>Ready</MenuItem >
                                <MenuItem  value={"In progress"}>In progress</MenuItem >
                                <MenuItem  value={"Done"}>Done</MenuItem >
                            </Select>
                        </FormControl>
                        <br /><br />
                        <FormControl required fullWidth>
                            <InputLabel style={{ marginTop: "5%" }} htmlFor="dueDate">Due Date</InputLabel>
                            <TextField style={{ minWidth: "100%" }}
                                id="dueDate"
                                type="date"
                                value={this.state.dueDate}
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
            </main>
      </React.Fragment>
        );
    }
}