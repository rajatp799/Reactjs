import React from 'react'
import RigthCardContent from './RigthCardContent'

const RightCard = (props) => {
  return (
    <div className='font-poppins h-full overflow-hidden shrink-0 relative w-70 bg-amber-300 rounded-3xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RigthCardContent color={props.color} tag={props.tag} id={props.id}/>
    </div> 
  )
}

export default RightCard
