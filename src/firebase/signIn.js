import firebase from  'firebase/app';
import 'firebase/auth';
export const signIn = async (email, password) => {

    try {
        console.log ('before');
        const result = await firebase.auth().signInWithEmailAndPassword(email, password); 
        console.log ('after');
        return {};
    } catch (e){
        throw new Error('Error signing in' + e);
    }
}