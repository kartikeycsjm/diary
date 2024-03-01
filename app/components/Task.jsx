import React from 'react'

const Task = ({srn,title,date,description,del}) => {
    return (
        <div className='w-[350px] min-h-[220px] rounded-lg border-[2px] border-blue-600
        flex justify-center items-center my-5'>
            <div className='w-[332px] min-h-[178px] rounded-lg bg-[#333333]
            flex items-center flex-col'>
                <div id="head" className='w-full text-[15px] flex items-start py-2'>
                    <span className='text-blue-400 px-4'>{srn}.</span>
                    <h3 className='text-blue-100 pr-5'>{title}</h3>
                    <span className='text-[14px]'>{date}</span>
                </div>
                <div id="desc" 
                 className='text-blue-100 p-3 text-justify text-[13px]'>
                    <p className='min-h-[68px]'>{description}</p>
                </div>
                <button className='w-[40px] h-[40px] flex justify-center items-center cursor-not-allowed rounded-[100%] bg-red-900' onClick={del}>-</button>
            </div>
        </div>
    )
}
export default Task