import firebase from  'firebase/app';
import 'firebase/auth';
export const signUp = async (email, password) => {

    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log ('user=', user);
        return user;
    } catch (e){
        throw new Error('Error signing in' + e);
    }
}
