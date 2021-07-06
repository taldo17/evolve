import React from 'react'
import Directory from '../../components/directory/directory'
import './homepage.scss'
import MainBarChart from "../../components/barchart/main-bar-chart";

const Homepage = (props) => {
    return (
        <div>
            <div className='homepage-menu'>
                <Directory/>
            </div>
            {
                props.userDetails ? <div className='profile-image' style={{
                    backgroundImage: `url(${props.userDetails.evolveUser.profileImageLink})`,

                }}/> : null
            }
            {
                props.userDetails ? <MainBarChart userDetails={props.userDetails}/> : null
            }
        </div>

    )
}
export default Homepage
