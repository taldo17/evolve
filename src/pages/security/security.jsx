import React from 'react'
import './security.scss'
import MenuItem from "../../components/menu-item/menu-item";
import {evolveSections} from "../../data/data";
import CustomButton from "../../components/custom-button/custom-button2";
import {updateUserDetails} from "../../firebase/database";
import {useHistory} from "react-router-dom";

const Security = (props) => {
    const onUpdateScoreClicked = async () => {
        props.userDetails.statistics.userStatistics.codeBEScore = 38;
        // props.userDetails.statistics.userStatistics.codeFEScore = 33;
        // props.userDetails.statistics.userStatistics.securityScore = 23;
        // props.userDetails.statistics.userStatistics.devopsScore = 15;
        await updateUserDetails(props.userDetails);
        history.push('/');
    }
    const history = useHistory();

    return (
        <div>
            <div>
                {
                    props.userDetails ? <div>
                        <CustomButton type='button' onClick={onUpdateScoreClicked}>UPDATE SCORE</CustomButton>
                    </div> : undefined
                }
            </div>
        </div>
    )
}


export default Security
