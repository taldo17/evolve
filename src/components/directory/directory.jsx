import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'
import {evolveSections} from "../../data/data";

export default function Directory() {
    return (
        <div className='directory-menu'>
            {
                evolveSections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))
            }
        </div>
    )
}