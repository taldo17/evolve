import './App.css';
import Homepage from "./pages/homepage/homepage";
import Devops from "./pages/devops/devops"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header/header'
import React, {useEffect, useState} from "react";
import {addAuthListener, getCurrentUser, getUserDetails, ProtectedRoute} from './firebase';

export function App() {
    const [authInfo, setAuthInfo] = useState(() => {
            const user = getCurrentUser();
            const isLoading = !user;
            console.log('initialState for useState user=', user);
            return {isLoading, user};
        }
    );

    useEffect(() => {
        const unsubscribe = addAuthListener(async user => {
            console.log('useEffect called  user=', user, 'userDetails=', userDetails);
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
            newUserDetails = {
                evolveUser: {profileImageLink: 'https://pixabay.com/photos/fish-coral-sea-underwater-reef-2580208/'},
                graphDetails: {
                    dataLabels: "dddggggg",
                    label1: "dddd",
                    label1Scores: []
                },
            };
            setUserDetails(newUserDetails)
        }
    }, [authInfo])

    console.log("ida1:", userDetails)
    return (
        <Router>
            <Header user={authInfo.user} userDetails={userDetails}/>
            <Switch>
                <Route path='/signin'>
                    <SignInAndSignUp/>
                </Route>
                <ProtectedRoute isAuthed={!!authInfo.user} isLoading={authInfo.isLoading} userDetails={userDetails}
                                path='/evolve/devops'>
                    <Devops/>
                </ProtectedRoute>
                <Route isAuthed={!!authInfo.user} isLoading={authInfo.isLoading} userDetails={userDetails} path='/'
                       exact>
                    <Homepage userDetails={userDetails}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App
