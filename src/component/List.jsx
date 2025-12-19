import React, { useState } from 'react'

const List = () => {
    const [data, setdata] = useState("")
    const [disc, setdisc] = useState("")
    const [maint, setmain] = useState([])

    function handlebtn(e) {
        e.preventDefault()
        setmain([...maint, { data, disc }])
        console.log(maint)
        setdata("")
        setdisc("")
    }

    let rendertask = <div className='flex justify-center mt-12 px-20 items-center'>
        <h1 className='text-2xl md:text-4xl text-center uppercase text-gray-400 font-semibold'>No tasks yet! Add one to get started 🚀</h1>
    </div>

    function handleclk(i) {
        let copytask = [...maint]
        copytask.splice(i, 1)
        setmain(copytask)
    }

    if (maint.length > 0) {
        rendertask = maint.map((t, i) => {
            return (
                <div key={i} className='flex md:flex-row flex-col gap-4 bg-white p-5 rounded-xl w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                    <div className='flex-1 flex flex-col gap-2'>
                        <div className='flex items-center gap-3'>
                            <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm'>{i + 1}</span>
                            <h1 className='md:text-2xl text-lg font-bold text-gray-800'>{t.data}</h1>
                        </div>
                        <p className='md:text-lg text-gray-600 ml-11 italic'>{t.disc}</p>
                    </div>
                    <button 
                        onClick={() => { handleclk(i) }} 
                        className='md:w-32 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold md:text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95'>
                        🗑️ Delete
                    </button>
                </div>
            )
        })
    }

    return (
        <>
            <div className='flex flex-col px-4 md:px-8 overflow-x-hidden gap-8 pb-12 min-h-[calc(100vh-200px)]'>
                {/* Input Form */}
                <form onSubmit={handlebtn} className='bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto w-full'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>📝 Add a New Task</h2>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Task Title</label>
                            <input 
                                value={data} 
                                required 
                                onChange={(e) => { setdata(e.target.value) }} 
                                className='w-full md:text-lg text-base placeholder:text-gray-400 border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300' 
                                type="text" 
                                placeholder='Enter the task...' 
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Task Description</label>
                            <input 
                                value={disc} 
                                required 
                                onChange={(e) => { setdisc(e.target.value) }} 
                                className='w-full md:text-lg text-base placeholder:text-gray-400 border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300' 
                                type="text" 
                                placeholder='Enter the description...' 
                            />
                        </div>
                        <button className='w-full text-lg md:text-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95'>
                            ➕ Add Task
                        </button>
                    </div>
                </form>

                {/* Task List */}
                <div className='max-w-4xl mx-auto w-full'>
                    {maint.length > 0 && (
                        <div className='mb-6'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-4'>📋 Your Tasks ({maint.length})</h2>
                        </div>
                    )}
                    <div className='flex flex-col gap-5'>
                        {rendertask}
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
