import './App.css';
import Homepage from "./pages/homepage/homepage";
import Devops from "./pages/devops/devops"
import {Switch, Route} from "react-router-dom";
import Header from './components/header/header'
import React from "react";
import {evolveSections} from "./data/data";


class App extends React.Component {
    constructor() {
        super();
        this.state={
            loggedInUserDetails: undefined
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' render={(props) => (<Homepage {...props} userDetails={this.state.loggedInUserDetails}/>)}/>
                    <Route exact path='/evolve/devops'
                           render={(props) => (<Devops {...props} userDetails={this.state.loggedInUserDetails}/>)}/>
                </Switch>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:8080/evolve')
            .then(response => response.json())
            .then(user => this.setState({loggedInUserDetails : user}))
    }
}

export default App;