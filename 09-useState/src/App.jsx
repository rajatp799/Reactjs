import React, { useState } from 'react'

const App = () => {

  const [number, setnumber]  =useState(0)

  function increaseNumber(){
    setnumber(number+1)
  }
  function decreaseNumber(){
    setnumber(number-1)
  }

  return (
    <div >
      <h1>{number}</h1>
      <div className='box'>
        <button onClick={decreaseNumber}>decrease</button>
         <button onClick={increaseNumber}>increase</button>
      </div>
    </div>
  )
}

export default App

