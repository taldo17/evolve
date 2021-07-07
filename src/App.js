import './App.css';
import Homepage from "./pages/homepage/homepage";
import Devops from "./pages/devops/devops"
import Security from "./pages/security/security"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header/header'
import React, {useEffect, useState} from "react";
import {addAuthListener, getCurrentUser, ProtectedRoute} from './firebase/auth';
import {getUserDetails} from './firebase/database';

export function App({firebaseConfig}) {
    const [authInfo, setAuthInfo] = useState(() => {
            const user = getCurrentUser();
            const isLoading = !user;
            console.log('initialState for useState user=', user);
            return {isLoading, user};
        }
    );

    useEffect(() => {
        const unsubscribe = addAuthListener(async user => {
            setAuthInfo(({isLoading: false, user}));
        })
        return unsubscribe;
    }, []);

    const [userDetails, setUserDetails] = useState()

    // to get the userDetails
    useEffect(async () => {
        if (authInfo.user) {
            console.log('authInfo authInfo=', authInfo);
            let newUserDetails = await getUserDetails(authInfo.user.uid);
            console.log('authInfo was changed newUserDetails=', newUserDetails);
            setUserDetails(newUserDetails)
        }
        else{
            setUserDetails(undefined);
        }
    }, [authInfo])

    console.log("ida1:", userDetails)
    console.log("firebaseConfig:", firebaseConfig)
    return (
        <Router>
            <Header user={authInfo.user} userDetails={userDetails}/>
            <Switch>
                <Route path='/signin'>
                    <SignInAndSignUp/>
                </Route>
                <Route path='/evolve/devops'>
                    <Devops/>
                </Route>
                <Route path='/evolve/security'>
                    <Security  userDetails={userDetails}/>
                </Route>
                <Route path='/' exact>
                    <Homepage userDetails={userDetails}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App
