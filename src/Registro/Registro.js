import React from 'react';
import { Redirect } from "react-router-dom";//Core
import { Button, Paper, Input, InputLabel, FormControl, CssBaseline } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
//Archivos
import "../Login/Login.css";
import imgUser from "../imagenes/user.png";


export class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stateName: '', stateEmail: '', statePassword: '', statePassword2: '', open: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.id === 'name') {
      this.setState({ stateName: e.target.value });
    } else if (e.target.id === 'email') {
      this.setState({ stateEmail: e.target.value });
    } else if (e.target.id === 'pasw') {
      this.setState({ statePassword: e.target.value });
    } else if (e.target.id === 'pasw2') {
      this.setState({ statePassword2: e.target.value });
    }
    console.log("Actualizó algun campo");
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Boton save");
    if (!this.state.stateName || !this.state.stateEmail || !this.state.statePassword || !this.state.statePassword2) {
      console.log("No se registro");
      return;
    } if (this.state.statePassword === this.state.statePassword2) {
      const newUser = { name: this.state.stateName, email: this.state.stateEmail, passw: this.state.statePassword };
      localStorage.setItem('user', JSON.stringify(newUser));
      this.setState({ open: true });
      console.log("Se registro: " + localStorage.getItem('user'));
      window.location.href = "/";
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
                <label id="titulo" >Registro</label><br />
                <img id="imgUser" src={imgUser} alt="" />
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="name">Full name</InputLabel>
                  <Input
                    id="name"
                    autoFocus
                    value={this.state.stateName}
                    onChange={this.handleChange} />
                </FormControl ><br /><br />
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    value={this.state.stateEmail}
                    autoComplete="email"
                    onChange={this.handleChange} />
                </FormControl ><br /><br />
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="pasw">Password</InputLabel>
                  <Input
                    id="pasw"
                    value={this.state.statePassword}
                    autoComplete="current-password"
                    onChange={this.handleChange} />
                </FormControl ><br /><br />
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="pasw2">Confirm Password</InputLabel>
                  <Input
                    id="pasw2"
                    value={this.state.statePassword2}
                    autoComplete="current-password"
                    onChange={this.handleChange} />
                </FormControl ><br /><br />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={this.handleClick}  >
                  Save
                </Button><br /><br />

                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Registro exitoso.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Aceptar
                    </Button>
                  </DialogActions>
                </Dialog>
              </Paper>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}