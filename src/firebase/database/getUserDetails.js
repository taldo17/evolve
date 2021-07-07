import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const getUserDetails = async id => {
    const getLevel = (score)=>{
        switch (true) {
            case (score < 10):
                return 'NOVICE';
            case (score < 20):
                return 'SILVER';
            case (score < 30):
                return 'GOLD';
            case (score < 40):
                return 'PLATINUM';
            return 'VIBRANIUM';
        }
    }
    const getFunction = () => firebase.firestore()
        .collection('users')
        .doc(id)
        .get();
    // The reason we do retry only in cases we register and the user document is not finished to write the document to the databse  but the authInfo was already changed
    const retry = (fn, retries = 3) => fn().then(snapshot => snapshot.data() ? snapshot.data() : retry(fn, retries - 1))
    const userDetails = await retry(getFunction);
    console.log('userDetails=', userDetails);
    let architectureLevel = getLevel(userDetails.statistics.firstLevelGroup.architectureScore);
    userDetails.statistics.firstLevelGroup.architectureLevel = architectureLevel;
    let codeBELevel = getLevel(userDetails.statistics.firstLevelGroup.codeBEScore);
    userDetails.statistics.firstLevelGroup.codeBELevel = codeBELevel;
    let codeFELevel = getLevel(userDetails.statistics.firstLevelGroup.codeFEScore);
    userDetails.statistics.firstLevelGroup.codeFELevel = codeFELevel;
    let devopsLevel = getLevel(userDetails.statistics.firstLevelGroup.devopsScore);
    userDetails.statistics.firstLevelGroup.devopsLevel = devopsLevel;
    let securityLevel = getLevel(userDetails.statistics.firstLevelGroup.securityScore);
    userDetails.statistics.firstLevelGroup.securityLevel = securityLevel;
    return {
        ...userDetails,
        id
    };
}
