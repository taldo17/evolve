import React from 'react'
import './security.scss'
import MenuItem from "../../components/menu-item/menu-item";
import {evolveSections} from "../../data/data";
import CustomButton from "../../components/custom-button/custom-button2";
import {updateUserDetails} from "../../firebase/database";

const Security = (props) => {
    const onUpdateScoreClicked = async () => {
        props.userDetails.statistics.firstLevelGroup.codeBEScore = 81;
        props.userDetails.statistics.firstLevelGroup.codeFEScore = 33;
        props.userDetails.statistics.firstLevelGroup.securityScore = 23;
        props.userDetails.statistics.firstLevelGroup.devopsScore = 105;
        await updateUserDetails(props.userDetails);
        alert('user updated');
    }
    let securitySection = evolveSections.find((section) => section.title === 'security');
    securitySection.subtitle = '';
    const securityRankItem = {...securitySection}
    if (props.userDetails !== undefined) {
        securityRankItem.title = props.userDetails.evolveUser.securityLevel;
    }
    securityRankItem.subtitle = 'CHALLENGE ME'
    return (
        <div>
            <div>
                <MenuItem id={securitySection.id} {...securitySection}/>
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
