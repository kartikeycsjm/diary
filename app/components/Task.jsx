import React from 'react'

const Task = ({srn,title,date,description,del}) => {
    return (
        <div className='w-[90%] min-h-[220px] rounded-lg border-[2px] border-blue-600
        flex justify-center items-center my-5'>
            <div className='my-[2%] w-[96%] min-h-[178px] rounded-lg bg-[#333333]
            flex items-center flex-col'>
                <div id="head" className='text-blue-400  w-full text-[15px] flex items-start py-2'>
                    <span className='text-blue-400 px-3 text-[20px]'>{srn}.</span>
                    <h3 className='pr-5 text-[20px] '>{title}</h3>
                    <span className='text-[18px]'>{date}</span>
                </div>
                <div id="desc" 
                 className='text-blue-100 p-3 text-justify text-[13px]'>
                    <p className='min-h-[68px]'>{description}</p>
                </div>
                <button className='m-2 w-[50px] h-[35px] flex justify-center items-center cursor-not-allowed rounded-xl text-[30px] bg-red-900' onClick={del}>-</button>
            </div>
        </div>
    )
}
export default Task