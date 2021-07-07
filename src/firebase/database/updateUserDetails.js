import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const updateUserDetails = async (userDetails) => {
    const clone = JSON.parse(JSON.stringify(userDetails));
    delete clone.statistics.firstLevelGroup.architectureLevel;
    delete clone.statistics.firstLevelGroup.codeBELevel;
    delete clone.statistics.firstLevelGroup.codeFELevel;
    delete clone.statistics.firstLevelGroup.devopsLevel;
    delete clone.statistics.firstLevelGroup.securityLevel;
    delete clone.statistics.firstLevelGroup;
    delete clone.statistics.secondLevelGroup;
    const snapshot = await firebase.firestore()
        .collection('users')
        .doc(clone.id)
        .update(clone);
}
