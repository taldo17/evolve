import React from 'react'
import {Bar} from 'react-chartjs-2'
import './main-bar-chart.scss'


const MainBarChart = (props) => {
    if (props.userDetails) {
        let {statistics: {userStatistics}} = props.userDetails;
        let {statistics: {secondLevelGroup}} = props.userDetails;
        return (
            <div className='main-bar-chart'>
                <Bar height={400}
                     width={400}
                     data={{
                         labels: ['Architecture', 'Security', 'Devops', 'Code-FE', 'Code-BE'],
                         datasets: [{
                             label: 'ME',
                             data: [userStatistics.architectureScore, userStatistics.securityScore, userStatistics.devopsScore,
                                 userStatistics.codeFeScore],
                             backgroundColor: 'orange',
                         },
                             {
                                 label: 'PTU',
                                 data: [secondLevelGroup.architectureScore, secondLevelGroup.securityScore, secondLevelGroup.devopsScore,
                                     secondLevelGroup.codeFeScore],
                                 backgroundColor: 'blue',
                             }

                         ]

                     }}
                     options={{
                         maintainAspectRatio: false
                     }}/>
            </div>
        )
    } else {
        return <div/>
    }
}

export default MainBarChart