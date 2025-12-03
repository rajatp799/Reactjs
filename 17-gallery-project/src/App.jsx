import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Index from './components/Index'

const App = () => {
  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(1)
  async function get() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)

  }

  useEffect(function () {
    get()
  }, [index])


  let printuserdata = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>

  if (UserData.length > 0) {
    printuserdata = UserData.map((elem, idk) => {
      return <div key={idk} className='relative'>
        <Index elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto bg-black text-white'>
      <div className='flex flex-wrap h-[80%] gap-4 p-10'>
        {printuserdata}
      </div>

      <div className='flex justify-center text-center py-5 gap-2'>
        <button style={{ opacity: index == 1 ? 0.5 : 1}}
        className='h-10 w-30 bg-yellow-500 rounded text-center cursor-pointer font-bold active:scale-95 ' onClick={() => {
          if (index > 1) {
            setindex(index - 1)
            setUserData([])
          }
        }} >prev</button>
      <h4 className='font-bold text-center'>Page {index}</h4>
      <button className='h-10 w-30 bg-yellow-500 rounded font-bold text-center cursor-pointer active:scale-95' onClick={() => {
        setUserData([])
        setindex(index + 1)
      }}>Next</button>
    </div>
    </div >
  )
}

export default App