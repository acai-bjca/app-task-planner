import React, { Component } from 'react';
import './App.css';
import { Login } from "./Login/Login";
import { TaskPlanner } from "./TaskPlanner/TaskPlanner";
import { NewTask } from "./Task/NewTask";
import { Registro } from "./Registro/Registro";
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: JSON.parse(localStorage.getItem('remember')) };
        const isLogged = JSON.parse(localStorage.getItem('remember'));
        console.log(isLogged);
        this.state = { isLoggedIn: isLogged }        
    }

    changeView() {
        const newIsLoggedIn = this.state.isLoggedIn === false ? true : false;
        this.setState({ isLoggedIn: newIsLoggedIn });
    }

    render() {
        const LoginView = () => (
            <Login />
        );

        const RegistroView = () => (
            <Registro />
        );

        const TaskPlannerView = () => (
            <TaskPlanner />
        );

        const Task = () => (
            <NewTask />
        );

        return (
            <Router>
                <div className="App">
                    <div>
                        <Route exact  path="/" component={!this.state.isLoggedIn ? LoginView : TaskPlannerView} />
                        <Route exact  path="/taskPlanner" component={TaskPlannerView} />
                        <Route exact  path="/newTask" component={Task} />
                        <Route exact  path="/registro" component={RegistroView} />
                    </div>
                </div>
            </Router>

        );
    }
}
//App.defaultProps = {isLoggedIn: false}; 
export default App;
