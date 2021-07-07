import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const updateUserDetails = async (userDetails) => {

    const snapshot = await firebase.firestore()
        .collection('users')
        .doc(userDetails.id)
        .update(userDetails);
}
