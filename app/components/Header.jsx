'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Header = ({ data, setData }) => {
    let router = useRouter()
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [st, setSt] = useState(false)
    const [sd, setSd] = useState(false)
    const [rb, setRb] = useState(true)
    const handleClick = () => {
        const ans = confirm('Do you want to clear the diary?')
        if (ans) {
            const ans2 = confirm('You will lose all the entries you have written. Do you really want to delete?')
            if (ans2) {
                localStorage.clear();
                setData([])
            }
        }
    }
    const searchbydate=()=>{
        router.push(`/date/${date}`)
    }
    const searchbytitle=()=>{
        router.push(`/title/${title}`)
    }
    return (
        <div className='sticky top-0 w-full h-[100px] flex justify-around items-center bg-blue-600 flex-col'>
            <div className='w-full h-[35%] flex justify-center items-center'>
                <h1
                    className='w-[80%] text-[18px] flex justify-center items-center'>
                    Everything in your mind, Just Write Here
                </h1>
                
            </div>
            <div id="search" className='w-full h-[40%] flex justify-around items-center'>
                {(!sd && rb) && <button onClick={() => { setSt(true); setRb(false) }} className='w-[130px] h-[25px] rounded-lg bg-[rgba(0,0,0,0.6)] text-[14px]'>Search by Title</button>}
                {(!st && rb) && <button onClick={() => { setSd(true); setRb(false) }} className='w-[130px] h-[25px] rounded-lg bg-[rgba(0,0,0,0.6)] text-[14px]'>Search by Date</button>}
                {sd &&
                    <div >
                        <input type="date" value={date} onChange={e => setDate(e.target.value)}
                            className='mr-1 w-[150px] rounded-l text-blue-600 h-[25px]' />
                       <button onClick={searchbydate} className='w-[130px] h-[25px] rounded-lg bg-green-600'>Search</button>
                    </div>
                }
                {st &&
                    <div>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                            className='mr-1 w-[150px] rounded-l text-blue-600 h-[25px]' />
                        <button onClick={searchbytitle} className='w-[130px] h-[25px] rounded-lg bg-green-600'>Search</button>
                    </div>
                }
                <button
                    onClick={handleClick}
                    className='cursor-not-allowed w-[100px] text-[14px] rounded bg-red-950'>
                    Clear Diary
                </button>
            </div>
            <div className='text-center flex justify-center items-center w-full text-[8px] h-[10%]'>Your entries are stored in your browser's local storage. The diary is inaccessible to developer.
                <a className='underline text-black' href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">Learn more</a>
            </div>
        </div>
    )
}
export default Header;
