import React from 'react'
import Reveal from '../Reveal.jsx'

const CardNote = ({name}) => {
  return (
    <Reveal>
      <div className='course-card position-relative m-2'>
        <img src={require(`../../Images/tape${Math.floor(Math.random()*2) + 1}.png`)} alt="..." width={130} className='position-absolute tape' />
        <p className='m-0 h-100 fs-1 d-flex justify-content-center align-items-center text-uppercase'>{name}</p>
      </div>
    </Reveal>
  )
}

export default CardNote
