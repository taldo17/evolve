import {getUser} from "./getUser";
import {getGroupScores} from "./getGroupScores";

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
        }
        return 'VIBRANIUM';
    }
    const userDetails = await getUser(id);
    // const firstLevelGroupStatistics = await getGroupScores(userDetails.evolveUser.firstLevelGroup);
    // const secondLevelGroupStatistics = await getGroupScores(userDetails.evolveUser.secondLevelGroup);
    const firstLevelGroupStatisticsPromise =  getGroupScores(userDetails.evolveUser.firstLevelGroup);
    const secondLevelGroupStatisticsPromise =  getGroupScores(userDetails.evolveUser.secondLevelGroup);
    const data = await Promise.all([firstLevelGroupStatisticsPromise, secondLevelGroupStatisticsPromise])
    const firstLevelGroupStatistics = data[0];
    const secondLevelGroupStatistics = data[1];
    console.log('userDetails=', userDetails);
    let architectureLevel = getLevel(userDetails.statistics.userStatistics.architectureScore);
    userDetails.statistics.userStatistics.architectureLevel = architectureLevel;
    let codeBELevel = getLevel(userDetails.statistics.userStatistics.codeBEScore);
    userDetails.statistics.userStatistics.codeBELevel = codeBELevel;
    let codeFELevel = getLevel(userDetails.statistics.userStatistics.codeFEScore);
    userDetails.statistics.userStatistics.codeFELevel = codeFELevel;
    let devopsLevel = getLevel(userDetails.statistics.userStatistics.devopsScore);
    userDetails.statistics.userStatistics.devopsLevel = devopsLevel;
    let securityLevel = getLevel(userDetails.statistics.userStatistics.securityScore);
    userDetails.statistics.userStatistics.securityLevel = securityLevel;
    userDetails.statistics.firstLevelGroup = firstLevelGroupStatistics;
    userDetails.statistics.secondLevelGroup = secondLevelGroupStatistics;
    return {
        ...userDetails,
        id
    };
}
