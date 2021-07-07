import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const createUserProfileDocument = async (userAuth, displayName) =>{
    console.log('createUserProfileDocument userAuth=', userAuth);
    console.log('createUserProfileDocument displayName=', displayName);
    if(!userAuth) return;
    const userReference = firebase.firestore().doc(`users/${userAuth.uid}`);
    const userSnapshot =  await userReference.get();
    if(!userSnapshot.exists){
        const creationDate = new Date();
        try {
            await userReference.set(
                {
                    displayName:displayName,
                    email:userAuth.email,
                    createdDate: creationDate
                }
            )
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }
    return userReference;
}
