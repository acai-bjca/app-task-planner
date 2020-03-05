import React, { useState } from 'react';
import clsx from 'clsx';
import {Redirect} from "react-router-dom";
//Core
import { Avatar, AppBar, Toolbar, List, Typography, Divider, Button } from '@material-ui/core';
import { IconButton, ListItem, ListItemIcon, ListItemText, Fab } from '@material-ui/core';
import { CssBaseline, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//Icons
import { ChevronRight, Add as AddIcon, Home, Menu, Edit } from '@material-ui/icons';
//Archivos
import ImgJerry from '../imagenes/jerry.png';
import TaskCard from "../Task/Card";
import { render } from '@testing-library/react';

const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 0,
  },
  drawerPaper: {
    fontSize: 15,
    width: drawerWidth,
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
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export function TaskPlanner(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); 
  const cardTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')).map((task1, i) => <div key={i}><TaskCard task={task1} /><br/></div>) : localStorage.setItem('tasks', JSON.stringify([]));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClickCerrar = (e) => {
    e.preventDefault();
    localStorage.setItem('remember', false);
    window.location.href = "/";    
    console.log("Cerrando sesion " + localStorage.getItem('remember'));
    render();
    }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickAdd = () => {
    console.log("Cerrando sesion " + localStorage.getItem('remember'));
    window.location.href = "/newTask";
  };
  
  if (localStorage.getItem('remember') === false) return <Redirect to="/"/>;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" noWrap>
            Task Planner
          </Typography>
          <div style={{ textAlign: "right", width: "100%" }}>
            <Button
              type="submit"
              style={{ color: "white", backgroundColor: "#8a95cf" }}
              onClick={handleClickCerrar}
            >Cerrar sesión</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/*<Avatar alt="Remy Sharp" src="../imagenes/jerry.png" />*/}
          <Avatar alt="Remy Sharp" src={ImgJerry} size="100" /><br />
          <div>
            <br />
            <label>Jerry Perez</label>
            <label>jerryperez@gmail.com</label>
            <Button>
              <ListItemIcon><Edit /></ListItemIcon>
            </Button>
          </div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRight />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Inicio">
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ textAlign: "right", width: "100%" }}>
          {cardTasks}
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleClickAdd}
          >
            <AddIcon />
          </Fab>
        </div>
      </main>
    </div>
  );
}


