import React from 'react'
import List from './component/List'

const App = () => {
  return (
    <div>
      <div className='bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 w-screen min-h-screen'>
        <div className='flex justify-center items-center pt-8 pb-6'>
          <h1 className='uppercase md:text-7xl text-4xl text-white font-bold drop-shadow-lg'>✨ My Tasks</h1>
        </div>

        <List />
      </div>
    </div>
  )
}

export default App
