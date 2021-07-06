import firebase from  'firebase/app';
import 'firebase/auth';
export const signIn = async (email, password) => {

    try {
        console.log ('before signIn');
        const result = await firebase.auth().signInWithEmailAndPassword(email, password); 
        console.log ('after signIn');
        return {};
    } catch (e){
        console.log ('catch signIn');
        throw new Error('Error signing in' + e);
    }
}
