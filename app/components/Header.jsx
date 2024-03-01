'use client'
import React from 'react'

const Header = ({setData}) => {
    const handleClick = () => {
        const ans=confirm('Do you want to Clear diary?',"")
        if(ans){
            const ans2=confirm('You will last your all the stuffs that you have written, do you really want to delete?')
            if(ans2){
                localStorage.clear();
                setData([])
            }
        }
    }
    return (
        <div className='w-full h-[50px] flex justify-around items-center bg-blue-500'>
            <h1
                className='w-[70%] text-[20px] flex justify-center items-center'>
                What to do, write here
            </h1>
            <button
                onClick={handleClick}
                className='cursor-not-allowed text-[15px] w-[20%] rounded bg-red-800'>
                Clear Diary
            </button>
        </div>
    )
}
export default Header