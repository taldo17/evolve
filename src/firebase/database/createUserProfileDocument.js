import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {uploadFile} from '../storage';

export const createUserProfileDocument = async (userAuth, displayName, profilePictureFile) => {
    console.log('createUserProfileDocument userAuth=', userAuth);
    console.log('createUserProfileDocument displayName=', displayName);
    if (!userAuth) return;
    const userReference = firebase.firestore().doc(`users/${userAuth.uid}`);
    const userSnapshot = await userReference.get();
    if (!userSnapshot.exists) {
        const creationDate = new Date();
        const newUserDocument = {
            displayName: displayName,
            email: userAuth.email,
            createdDate: creationDate,
            evolveUser: {
                displayName: displayName,
                email: userAuth.email,
                firstLevelGroup: 'MCR',
                secondLevelGroup: 'PTU'
            },
            statistics: {
                userStatistics: {
                    devopsLevel: 'NOVICE',
                    securityLevel: 'NOVICE',
                    architectureLevel: 'NOVICE',
                    codeFELevel: 'NOVICE',
                    codeBELevel: 'NOVICE',
                    devopsScore: 0,
                    securityScore: 0,
                    architectureScore: 0,
                    codeFEScore: 0,
                    codeBEScore: 0,
                },
                firstLevelGroup: {
                    devopsScore: 0,
                    securityScore: 0,
                    architectureScore: 0,
                    codeFEScore: 0,
                    codeBEScore: 0,
                },
                secondLevelGroup: {
                    devopsScore: 0,
                    securityScore: 0,
                    architectureScore: 0,
                    codeFEScore: 0,
                    codeBEScore: 0,
                }
            }
        }
        if (profilePictureFile){
            const profileImageLink = await uploadFile(profilePictureFile, 'profilePictures');
            newUserDocument.evolveUser.profileImageLink = profileImageLink;
        }
        try {
            await userReference.set(newUserDocument)
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }
    return userReference;
}
