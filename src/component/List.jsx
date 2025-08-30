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

 let rendertask= <div className='flex justify-center mt-6 px-20 items-center'>
  <h1 className='text-2xl md:text-4xl text-center uppercase '>no data is available</h1>
</div> 
 
function handleclk(i) {
  let copytask= [...maint]
  copytask.splice(i,1)
  setmain(copytask)
  
}

 if(maint.length>0){
  rendertask=maint.map((t,i)=>{
    return(
      <>
        <div key={i} className='flex md:justify-between flex-col gap-3  bg-white mt-4 w-[90vw]  shadow-md shadow-gray-700 rounded '>
          <h1 className='md:text-3xl uppercase '>{`1- ${t.data}`}</h1>
          <h1 className='md:text-3xl'>{`2- ${t.disc}`}</h1>
          <button onClick={(i)=>{handleclk(i)}} className='p-2 bg-red-500 hover:bg-red-600 hover:text-white md:text-2xl uppercase rounded'>delete</button>
        </div>
      </>
    )
   })

 }

  return (
    <>
      <div className='flex flex-col bg-white px-3  w-screen   md:px-5 overflow-x-hidden gap-4 min-h-screen ' >
        <form onSubmit={handlebtn} className='bg-gray-400 rounded-xl mt-5 w-full px-6 py-5  flex flex-col gap-5 md:justify-between items-center  '>
        <input value={data} required onChange={(e)=>{setdata(e.target.value)}}  className='md:text-3xl placeholder:text-sm border-2 w-80 px-2 py-3  rounded border-black' type="text" placeholder='Enter the task...' />
        <input value={disc} required onChange={(e)=>{setdisc(e.target.value)}} className='md:text-3xl placeholder:text-sm border-2 w-80 px-2 py-3 rounded border-black' type="text" placeholder='Enter the disc...' />
        <button className='text-2xl bg-green-500 p-2 border-2    rounded'>add items</button>
        </form>
    
         <div >
          <ul>{rendertask}</ul>
        </div>
         
        
    
      </div>
      {/* <div >
          <ul>{rendertask}</ul>
        </div>
         */}
     
     
    </>
  )
}

export default List
