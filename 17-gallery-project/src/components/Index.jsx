import React from 'react'

const Index = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
         <div className='h-40 w-40 rounded-2xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
      </div>
      <h3 className='font-bold '>{props.elem.author}</h3>
       </a>
    </div>
  )
}

export default Index