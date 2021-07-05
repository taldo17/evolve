import React from 'react'
import {Bar} from 'react-chartjs-2'
import './main-bar-chart.scss'


const MainBarChart = (props)=>{
    return (
        <div className='main-bar-chart'>
            <Bar height={400}
                 width={400}
                 data={{
                     labels: props.userDetails.graphDetails.dataLabels,
                     datasets: [{
                         label: props.userDetails.graphDetails.label1,
                         data: props.userDetails.graphDetails.label1Scores,
                         backgroundColor: 'orange',
                     },
                         {
                             label: props.userDetails.graphDetails.label2,
                             data: props.userDetails.graphDetails.label2Scores,
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

export default MainBarChart