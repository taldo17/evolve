import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const getUser = async id => {
    const getFunction = () => firebase.firestore()
        .collection('users')
        .doc(id)
        .get();
    // The reason we do retry only in cases we register and the user document is not finished to write the document to the databse  but the authInfo was already changed
    const retry = (fn, retries = 3) => fn().then(snapshot => snapshot.data() ? snapshot.data() : retry(fn, retries - 1))
    const user = await retry(getFunction);
    console.log('user document =', user);
    return {
        ...user,
        id
    };
}
