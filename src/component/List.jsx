import React, { useState } from 'react'

const List = () => {
    const [data, setdata]=useState("")
    const [disc, setdisc]=useState("")
    const [maint, setmain]=useState([])

    
 

  function handlebtn(e){
    e.preventDefault()
    setmain([...maint,{data,disc}])
    console.log(maint)
    setdata("")
    setdisc("")
 }

 let rendertask= <div className='flex justify-center mt-5 items-center'>
  <h1 className='text-4xl uppercase '>no data is available</h1>
</div> 
 
function handleclk(i) {
  let copytask= [...maint]
  copytask.splice(i,1)
  setmain(copytask)
  
}

 if(maint.length>0){
  rendertask=maint.map((t,i)=>{
    return(
      <li>
        <div key={i} className='flex md:justify-between flex-col gap-3 bg-white m-10 shadow-md shadow-gray-700 rounded p-4'>
          <h1 className='text-3xl uppercase '>{`1- ${t.data}`}</h1>
          <h1 className='text-3xl'>{`2- ${t.disc}`}</h1>
          <button onClick={(i)=>{handleclk(i)}} className='p-2 bg-pink-300 hover:bg-pink-600 hover:text-white text-2xl uppercase rounded'>delete</button>
        </div>
      </li>
    )
   })

 }

  return (
    <>
      <div className='flex flex-col w-screen gap-4 md:max-w-screen-2xl min-h-screen bg-black' >
        <form onSubmit={handlebtn} className='bg-gray-400 w-full flex flex-col gap-5 md:justify-between items-center p-5 '>
        <input value={data} required onChange={(e)=>{setdata(e.target.value)}}  className='text-3xl placeholder:text-3xl border-2 rounded border-black' type="text" placeholder='enter the task...' />
        <input value={disc} required onChange={(e)=>{setdisc(e.target.value)}} className='text-3xl placeholder:text-3xl border-2 rounded border-black' type="text" placeholder='enter the disc...' />
        <button className='text-2xl bg-green-400 p-2 border-2 border-gray-950 hover:text-white hover:bg-green-800 rounded'>add items</button>
        </form>
    
        <div >
          <ul>{rendertask}</ul>
        </div>
        
        
    
      </div>
     
     
    </>
  )
}

export default List
