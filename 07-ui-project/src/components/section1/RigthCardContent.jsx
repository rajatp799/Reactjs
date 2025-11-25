import React from 'react'

const RigthCardContent = (props) => {
    return (
        <div>
            <div className='absolute h-full w-full  top-0 left-0 p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-lg text-white mb-9 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tenetur ab, totam asperiores molestias corporis?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' px-8 py-2 rounded-full text-white font-semibold'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' px-4 py-2 rounded-full text-white font-semibold'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
      </div>
        </div>
    )
}

export default RigthCardContent
