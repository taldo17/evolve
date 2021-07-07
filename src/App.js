import './App.css';
import Homepage from "./pages/homepage/homepage";
import Devops from "./pages/devops/devops"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header/header'
import React, {useEffect, useState} from "react";
import {addAuthListener, getCurrentUser, ProtectedRoute} from './firebase/auth';
import {getUserDetails} from './firebase/database';
import Quiz from "./pages/devops/quiz/QuizMain";
import Security from "./pages/security/security";

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

    console.log("firebaseConfig:", firebaseConfig)
    return (
        <Router>
            <Header user={authInfo.user} userDetails={userDetails}/>
            <Switch>
                <Route path='/signin'>
                    <SignInAndSignUp/>
                </Route>
                <Route exact path='/'>
                    <Homepage userDetails={userDetails}/>
                </Route>
                <Route exact path='/evolve/devops'>
                    <Devops userDetails={userDetails}/>
                </Route>
                <Route path='/evolve/security'>
                    <Security  userDetails={userDetails}/>
                </Route>
                <Route exact path='/evolve/devops/quiz'>
                    <Quiz userDetails={userDetails}/>
                </Route>
            </Switch>
        </Router>
    );
}

// const data = {
//     evolveUser: {
//         displayName: 'Tal Doron',
//         email: 'tal@gmail.com',
//         profileImageUrl: 'https://storage.googleapis.com/evolve-sparkaton-2021.appspot.com/profilePictures/headshot.png',
//         firstLevelGroup: 'MCR',
//         secondLevelGroup: 'PTU'
//     },
//     statistics: {
//         userStatistics: {
//             devopsLevel: 'NOVICE | SILVER | GOLD | PLATINUM | VIBRANIUM', //calculated
//             securityLevel: 'NOVICE | SILVER | GOLD | PLATINUM | VIBRANIUM', //calculated
//             architectureLevel: 'NOVICE | SILVER | GOLD | PLATINUM | VIBRANIUM', //calculated
//             codeFELevel: 'NOVICE | SILVER | GOLD | PLATINUM | VIBRANIUM',//calculated
//             codeBELevel: 'NOVICE | SILVER | GOLD | PLATINUM | VIBRANIUM',//calculated
//             devopsScore: 0,
//             securityScore: 0,
//             architectureScore: 0,
//             codeFEScore: 0,
//             codeBEScore: 0,
//         },
//         firstLevelGroup: {
//             devopsScore: 0,
//             securityScore: 0,
//             architectureScore: 0,
//             codeFEScore: 0,
//             codeBEScore: 0,
//         },
//         secondLevelGroup: {
//             devopsScore: 0,
//             securityScore: 0,
//             architectureScore: 0,
//             codeFEScore: 0,
//             codeBEScore: 0,
//         }
//     }
// }

export default App
