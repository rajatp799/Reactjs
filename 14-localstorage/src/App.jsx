import React from 'react'

const App = () => {
  const user = {
    user:"Rajat",
    age:"22",
    city:"bhubaneswar"
  }

  localStorage.setItem('user',JSON.stringify(user))

  const user2 = JSON.parse(localStorage.getItem('user'))

  console.log(user2);
  

  return (

    <div>
      
    </div>
  )
}

export default App
