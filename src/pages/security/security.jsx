import React from 'react'
import './security.scss'
import DevopsBarChart from "../../components/barchart/devops-bar-chart";
import MenuItem from "../../components/menu-item/menu-item";
import {evolveSections} from "../../data/data";
import CustomButton from "../../components/custom-button/custom-button2";
import {updateUserDetails} from "../../firebase/database";

const Security = (props) => {
    const onUpdateScoreClicked = async () => {
        console.log('props.userDetails=', props.userDetails);
        props.userDetails.statistics.firstLevelGroup.codeBEScore=81;
        props.userDetails.statistics.firstLevelGroup.codeFEScore=33;
        props.userDetails.statistics.firstLevelGroup.securityScore=23;
        props.userDetails.statistics.firstLevelGroup.devopsScore=5;
        await updateUserDetails(props.userDetails);
        alert('user updated');
    }
    let securitySection = evolveSections.find((section) => section.title === 'devops');
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
                        <DevopsBarChart userDetails={props.userDetails}/>
                        <div className='little'>
                            <MenuItem id={securityRankItem.id} {...securityRankItem}/>
                        </div>
                    </div> : undefined
                }
                <CustomButton type='button' onClick={onUpdateScoreClicked}>UPDATE SCORE</CustomButton>
            </div>
        </div>
    )
}


export default Security
