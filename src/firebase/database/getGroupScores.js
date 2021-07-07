import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const getGroupScores = async id => {

    const groupScoreSnapshot = await firebase.firestore()
        .collection('groupScores')
        .doc(id)
        .get();
    const groupScore = groupScoreSnapshot.data();

    return {
        ...groupScore,
        id
    };
}
