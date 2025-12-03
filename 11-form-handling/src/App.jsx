import React from 'react'

const App = (e) => {
  
  const sumbithandler = (e)=>{
    e.preventDefault()
    console.log("form sumbit");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sumbithandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name'/>
        <button>sumbit</button>
      </form>
    </div>
  )
}

export default App
