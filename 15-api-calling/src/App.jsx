
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([]);
  const getdata = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
}
  return (
    <div>
      <button onClick={getdata}>click me!</button>
      {data.map(function(elem, idk){
        return <h1 key={idk}>hello, {elem.author}, {idk}</h1>
      })}
    </div>
  )
}

export default App

