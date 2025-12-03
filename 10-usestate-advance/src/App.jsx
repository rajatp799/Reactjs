import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({ user: "Rajat", age: 29 })
  const [num2, setnum2] = useState([10, 20, 30, 40])

  const [num3, setnum3] = useState(20)

  // const number = () => {
  //   const newNum = {...num};
  //   newNum.user = "Ipsita"
  //   newNum.age = 21
  //   setnum(newNum)
  // }

  const number = () => {
    setnum(prev => ({ ...prev, age: 60 }))
  }
  const number3 = () => {
    setnum3(prev=>(prev+1))
  }
  const number2 = () => {
    setnum2(prev => {
      const copy = [...prev];
      copy[2] = 21;
      return copy
    })
  }

  return (
    <>
      <div>
        <h1>{num.user},{num.age}</h1>
        <button onClick={number}>Click</button>
      </div>
      <div>
        <h1>{num2}</h1>
        <button onClick={number2}>Click</button>
      </div>
      <div>
        <h1>{num3}</h1>
        <button onClick={number3}>Click</button>
      </div>
    </>
  )
}

export default App
