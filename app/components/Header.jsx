'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Header = ({ data, setData }) => {
    let router=useRouter()
    const [date,setDate]=useState('');
    const handleClick = () => {
        const ans = confirm('Do you want to Clear diary?')
        if (ans) {
            const ans2 = confirm('You will last your all the stuffs that you have written, do you really want to delete?')
            if (ans2) {
                localStorage.clear();
                setData([])
            }
        }
    }
    return (
        <div className='w-full h-[80px] flex justify-around items-center bg-blue-500 flex-col'>
            <div className='w-full h-[60%] flex justify-center items-center bg-blue-500'>
                <h1
                    className='w-[400px] text-[20px] flex justify-center items-center'>
                    Everything in your mind, Just Write Here
                </h1>
                <button
                    onClick={handleClick}
                    className='cursor-not-allowed text-[15px] w-[100px] rounded bg-red-800'>
                    Clear Diary
                </button>
            </div>
            <div id="search" className='w-[300px] h-[40%] flex justify-center items-center'>
                <input type="date" value={date} onChange={e=>setDate(e.target.value)}
                className='mr-1 w-[130px] rounded-l text-blue-600 h-[25px]'/>
                <button onClick={()=>router.push(`/${date}`)} className='w-[130px] h-[25px] rounded-l bg-green-600'>Search by date</button>
            </div>
        </div>
    )
}
export default Header