import './App.css';
import Homepage from "./pages/homepage/homepage";
import Devops from "./pages/devops/devops"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header/header'
import React from "react";
import {ProtectedRoute, useAuth} from './firebase';
import SignIn from "./components/sign-in/sign-in";


export function App() {
    const {isLoading, user, userDetails} = useAuth();
    console.log("ida1:",userDetails)
    return (
        <Router>
            <Header user={user} userDetails={userDetails}/>
            <Switch>
                <Route path='/signin'>
                    <SignInAndSignUp/>
                </Route>
                <ProtectedRoute isAuthed={!!user} isLoading={isLoading} userDetails={userDetails} path='/evolve/devops'>
                    <Devops/>
                </ProtectedRoute>
                <Route isAuthed={!!user} isLoading={isLoading} userDetails={userDetails} path='/' exact>
                    <Homepage  userDetails={userDetails}/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App
