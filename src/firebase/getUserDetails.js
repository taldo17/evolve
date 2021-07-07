import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const getUserDetails = async id => {
    const snapshot = await firebase.firestore()
        .collection('users')
        .doc(id)
        .get();
    const userDetails = snapshot.data();

    return {
        ...userDetails,
        id
    };
}
