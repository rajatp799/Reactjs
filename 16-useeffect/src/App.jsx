import React, { useEffect, useState } from 'react'

const App = () => {

  const [net, setnet] = useState(0);
  const [net2, setnet2] = useState(0);

   useEffect(function(){
    console.log("useeffect start...");
   },[net2])

   function click(){
    setnet(net+1)
   }
   function click2(){
    setnet2(net2+1)
   }
   
  return (

    <div>
      <h1>{net}</h1>
      <h1>{net2}</h1>
      <button onClick={click}>
        <h1>click me</h1>
      </button>
      
      <button onClick={click2}>
        <h1>click me</h1>
      </button>

    </div>
  )
}

export default App
