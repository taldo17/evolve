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
                         data: [12],
                         backgroundColor: 'orange',
                     },
                         {
                             label: 'PTU',
                             data: [15],
                             backgroundColor: 'red',
                         },
                         {
                             label: 'CXONE',
                             data: [8],
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