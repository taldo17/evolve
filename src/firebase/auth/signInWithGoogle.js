import firebase from 'firebase/app';
import 'firebase/auth';
import {createUserProfileDocument} from "../database/createUserProfileDocument";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)
    .then((result) => {
        console.log('result=', result);
        createUserProfileDocument(result.user, result.user.displayName)
    }).catch((e) => {
        console.log('catch signInWithGoogle', e);
        throw new Error('Error signInWithGoogle' + e.message);
    });
