'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import more from '@/public/more.png'
const Task = ({ title, date, description, del }) => {
    const [showOption, setShowOption] = useState(false)
    return (
        <div className='text-white w-[90%] md:w-[500px] min-h-[220px] rounded-lg border-[2px] border-blue-600
        flex justify-center items-center my-5'>
            <div className='my-[2%] w-[96%] min-h-[178px] rounded-lg bg-[#3333]
            flex items-center flex-col'>
                <div id="head" className='w-full min-h-[50px] text-[15px] border-b flex items-center justify-between py-2'>
                    <h3 className='pl-3 text-justify text-[18px] w-[70%]'>{title}</h3>
                    <div id="option" className='w-[100px] flex justify-around items-center'>
                        <Image src={more} width={20} onClick={() => setShowOption(!showOption)}
                            className=' cursor-pointer'></Image>
                        {
                            showOption ?
                                <div className='text-red-700 rounded-full border border-red-700 relative left-[0px]'>
                                    <button className='flex justify-center rounded-lg items-center w-[50px] h-[30px] text-[10px]' onClick={del}>delete</button>
                                </div> : ''
                        }
                    </div>
                </div>
                <div id="desc" className='text-white flex justify-center items-center flex-col w-full text-[13px]'>
                    <span className='pt-2 text-[12px]'>{date}</span>
                    <p className='p-3 w-full text-justify min-h-[68px]'>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default Task