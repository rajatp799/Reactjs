import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    
    <div className="parent">
        <Card user = "Rajat" age ={22} img = "https://images.unsplash.com/photo-1762543787011-186cfe6f1019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user = "Ipsita" age={21} img= "https://images.unsplash.com/photo-1760694533407-6a10714f3b65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user = "Chandan" age={22} img="https://images.unsplash.com/photo-1763321402439-41eb2a0c7e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D"/>
      </div>
  )
}

export default App
