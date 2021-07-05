import React from 'react'
import './devops.scss'
import DevopsBarChart from "../../components/barchart/devops-bar-chart";
import CustomizedTimeline from "../../components/track/track";
import MenuItem from "../../components/menu-item/menu-item";
import {evolveSections} from "../../data/data";

const Devops = (props) => {
    let devopsSection = evolveSections.find((section) => section.title === 'devops');
    devopsSection.subtitle ='';
    const devopsRankItem = {...devopsSection}
    if (props.userDetails !== undefined) {
        devopsRankItem.title = props.userDetails.evolveUser.devopsLevel;
    }
    devopsRankItem.subtitle = 'CHALLENGE ME'
    return (
        <div>
            <div>
                <MenuItem id={devopsSection.id} {...devopsSection}/>
                {
                    props.userDetails ? <div>
                        <DevopsBarChart userDetails={props.userDetails}/>
                        <div className='little'>
                            <MenuItem id={devopsRankItem.id} {...devopsRankItem}/>
                        </div>
                    </div> : undefined
                }
                <CustomizedTimeline/>
            </div>
        </div>
    )
}


export default Devops