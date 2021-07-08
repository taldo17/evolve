import {updateUserDetails} from "../../firebase/database";
import {useHistory} from "react-router-dom";
import CustomButton from "./custom-button2";
import React from "react";
import './custom-button2.scss'

const UpdateUserButton = (props) => {
    const onUpdateScoreClicked = async () => {
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
        // props.userDetails.statistics.userStatistics.codeBEScore = 38;
        // props.userDetails.statistics.userStatistics.codeFEScore = 33;
        // props.userDetails.statistics.userStatistics.securityScore = 23;
        props.userDetails.statistics.userStatistics.devopsScore += props.score * 3;
        await updateUserDetails(props.userDetails);
        let devopsLevel = getLevel(props.userDetails.statistics.userStatistics.devopsScore);
        props.userDetails.statistics.userStatistics.devopsLevel = devopsLevel;
        history.push('/evolve/devops');
    }
    const history = useHistory();

    return (
        <div>
            <div className='centered'>
                {
                    props.userDetails ? <div>
                        <CustomButton type='button' onClick={onUpdateScoreClicked}>UPDATE MY SCORE</CustomButton>
                    </div> : undefined
                }
            </div>
        </div>
    )
}


export default UpdateUserButton