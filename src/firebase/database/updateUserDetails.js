import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const updateUserDetails = async (userDetails) => {
    const clone = JSON.parse(JSON.stringify(userDetails));
    delete clone.statistics.userStatistics.architectureLevel;
    delete clone.statistics.userStatistics.codeBELevel;
    delete clone.statistics.userStatistics.codeFELevel;
    delete clone.statistics.userStatistics.devopsLevel;
    delete clone.statistics.userStatistics.securityLevel;
    delete clone.statistics.firstLevelGroup;
    delete clone.statistics.secondLevelGroup;
    const snapshot = await firebase.firestore()
        .collection('users')
        .doc(clone.id)
        .update(clone);
}
