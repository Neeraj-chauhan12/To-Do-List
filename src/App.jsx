import React from 'react'
import List from './component/List'

const App = () => {
  return (
    <div>
      <div className='bg-black w-screen min-h-screen '>
        <div className='flex  justify-center items-center'>
        <h1 className='uppercase md:text-7xl text-3xl text-white '>check to-do-list</h1>

        </div>
       
       
        <List />
      </div>
      {/* <List /> */}
    </div>
  )
}

export default App
