import React from 'react'
import Reveal from '../Reveal.jsx'

const YearNote = ({name}) => {
    return (
        <Reveal>
            <div className='year-card position-relative m-2'>
                <img src={require("../../Images/Torn Paper For Years.png")} alt="..." width={200} />
                <img src={require("../../Images/pin.png")} alt="..." width={70} className='position-absolute pin' />
                <p className='m-0 fs-4 position-absolute absolute-year-name'>{name} Year</p>
            </div>
        </Reveal>
    )
}

export default YearNote
