import React from 'react'
import { useState } from 'react'

const App = (e) => {
  
  const [title, setTitle] = useState("")

  const sumbithandler = (e)=>{
    e.preventDefault()
    console.log("form sumbited by",title);
    setTitle("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sumbithandler(e)
      }}>
        <input type="text"
         placeholder='Enter Your Name'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
          
         }}
         />
        <button>sumbit</button>
      </form>
    </div>
  )
}

export default App