import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, AppBar, Toolbar, List, Typography, Divider, Button } from '@material-ui/core';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Home, Menu, Edit } from '@material-ui/icons';
import ImgJerry from '../imagenes/jerry.png';
import TaskCard from '../Login/Card';


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

export function BarraMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [taskC, setTask] = useState({
    description: "Implements Login View",
    responsible: {
      name: "Santiago Carrillo",
      email: "sancarbar@gmail.com"
    },
    status: "Ready",
    dueDate: "12-05-2013"
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            Persistent drawer
          </Typography>
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
          <Avatar alt="Remy Sharp" src={ImgJerry} size="100"/><br />
          <div>
            <br />
            <label paragraph>Jerry Perez</label>
            <label paragraph>jerryperez@gmail.com</label>
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
        <TaskCard task={taskC} />
        <Typography paragraph>

        </Typography>
      </main>
    </div>
  );
}

