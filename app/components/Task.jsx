import React from 'react'

const Task = ({title,date,description,del}) => {
    return (
        <div className='text-white w-[90%] md:w-[500px] min-h-[220px] rounded-lg border-[2px] border-blue-600
        flex justify-center items-center my-5'>
            <div className='my-[2%] w-[96%] min-h-[178px] rounded-lg bg-[#3333]
            flex items-center flex-col'>
                <div id="head" className='w-full min-h-[70px] text-[15px] border-b flex items-center justify-around py-2'>
                    <h3 className='text-[18px] w-[40%]'>{title}</h3>
                    <span className='text-[12px] w-[40%]'>{date}</span>
                    <button className='flex justify-center items-center w-[30px] h-[30px] cursor-not-allowed rounded-full text-[30px] border-[3px] border-red-900' onClick={del}>-</button>
                </div>
                <div id="desc" 
                 className='text-green-white p-3 text-justify text-[13px]'>
                    <p className='min-h-[68px]'>{description}</p>
                </div>
               
            </div>
        </div>
    )
}
export default Task