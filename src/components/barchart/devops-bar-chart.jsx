import React from 'react'
import {Bar} from 'react-chartjs-2'
import './main-bar-chart.scss'

const DevopsBarChart = (props) => {
    return (
        <div className='main-bar-chart'>
            <Bar height={400}
                 width={400}
                 data={{
                     labels: ['Devops'],
                     datasets: [{
                         label: 'ME',
                         data: [props.userDetails.statistics.userStatistics.devopsScore],
                         backgroundColor: 'orange',
                     },
                         {
                             label: 'PTU',
                             data: [props.userDetails.statistics.secondLevelGroup.devopsScore],
                             backgroundColor: 'red',
                         },
                         {
                             label: 'MCR',
                             data: [props.userDetails.statistics.firstLevelGroup.devopsScore],
                             backgroundColor: 'blue',
                         }
                     ]
                 }}
                 options={{
                     maintainAspectRatio: false
                 }}/>
        </div>
    )
}

export default DevopsBarChart