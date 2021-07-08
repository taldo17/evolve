import React from 'react'
import './devops.scss'
import DevopsBarChart from "../../components/barchart/devops-bar-chart";
import CustomizedTimeline from "../../components/track/track";
import MenuItem from "../../components/menu-item/menu-item";
import {evolveSections} from "../../data/data";
import Quote from "../../components/quotes/quotes";

const Devops = (props) => {
    let devopsSection = evolveSections.find((section) => section.title === 'devops');
    let devopPageMenuItem =  {...devopsSection};
    devopPageMenuItem.subtitle ='';
    const devopsRankItem = {...devopPageMenuItem}
    if (props.userDetails !== undefined) {
        devopsRankItem.title = props.userDetails.statistics.userStatistics.devopsLevel;
    }
    devopsRankItem.subtitle = 'CHALLENGE ME'
    devopsRankItem.linkUrl = '/quiz'
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
                <Quote/>
            </div>
        </div>
    )
}


export default Devops