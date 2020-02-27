import React from 'react';
import clsx from 'clsx';
//Styles
import { makeStyles } from '@material-ui/core/styles';
//Core
import { CssBaseline, Fab } from '@material-ui/core';
//Icons
import { Add as AddIcon } from '@material-ui/icons';
//Archivos
import { BarraMenu } from "../Drawer/Drawer";
import TaskCard from '../Task/Card';



export class TaskPlanner extends React.Component {
    drawerWidth = 320;
    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        drawer: {
            width: this.drawerWidth,
            flexShrink: 0,
            marginTop: 0,
        },
        drawerPaper: {
            fontSize: 15,
            width: this.drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -this.drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }));

    task1 = {
        task: {
            description: "Implements Login View",
            responsible: {
                name: "Santiago Carrillo",
                email: "sancarbar@gmail.com"
            },
            status: "Ready",
            dueDate: "12-05-2013"
        }
    }
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
    }

    handleClickAdd(e) {
        const tasks = localStorage.getItem('tasks');
        console.log("Task Planner: 1 "+JSON.stringify(localStorage.getItem('tasks')));
        if(tasks === null){
            console.log("new Task Planner: 1 "+JSON.stringify(localStorage.getItem('tasks')));
            localStorage.setItem('tasks', [this.state.task]);
        }else{
            console.log("2222222222222");
            //localStorage.setItem('tasks', tasks.push(this.state.task));
        }        
        console.log("Task Planner: 2"+JSON.stringify(localStorage.getItem('tasks')));

    }

    render() {
        return (
            <div className={this.useStyles.root}>
                <BarraMenu />
                <div style={{ textAlign: "right", width: "100%" }}>
                    <TaskCard task={this.task1.task} />
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={this.handleClickAdd}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}