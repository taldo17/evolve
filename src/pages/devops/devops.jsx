import React from 'react'
import './devops.scss'
import DevopsBarChart from "../../components/barchart/devops-bar-chart";
import CustomizedTimeline from "../../components/track/track";
import MenuItem from "../../components/menu-item/menu-item";
import {evolveSections} from "../../data/data";

const Devops = (props) => {
    let devopsSection = evolveSections.find((section) => section.title === 'devops');
    let devopPageMenuItem =  {...devopsSection};
    devopPageMenuItem.subtitle ='';
    const devopsRankItem = {...devopPageMenuItem}
    if (props.userDetails !== undefined) {
        devopsRankItem.title = props.userDetails.statistics.userStatistics.devopsLevel;
    }
    devopsRankItem.subtitle = 'CHALLENGE ME'
    return (
        <div>
            <div>
                <MenuItem id={devopPageMenuItem.id} {...devopPageMenuItem}/>
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