import React from 'react'
import Reveal from '../Reveal.jsx'

const QuantumsCard = ({ name, image }) => {
    return (
        <Reveal>
            <div className='year-card position-relative m-2'>
                <img src={require("../../Images/Polaroid For Branches.png")} alt="..." width={300} />
                <img src={require(`../../Images/tape${Math.floor(Math.random()*2) + 1}.png`)} alt="..." width={130} className='position-absolute tape' />
                <img src={image} alt="..." width={100} className='position-absolute absolute-quantum-image' />
                <p className='m-0 fs-4 position-absolute absolute-quantum-name text-white'>{name}</p>
            </div>
        </Reveal>
    )
}

export default QuantumsCard
