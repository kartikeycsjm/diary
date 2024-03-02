'use client'
import React, { useEffect, useState } from 'react'
import Task from '@/app/components/Task'
import Footer from '@/app/components/Footer'
import { useParams } from 'next/navigation'
const Page = () => {
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
    const params = useParams();
    const [data, setData] = useState([])
    const storedData = [...JSON.parse(localStorage.getItem('data'))];
    useEffect(() => {
        const fetchData = () => {
            const searchData = storedData.filter(item => item.d.startsWith(params.date));
            setData(searchData);
        };
        fetchData();
    }, [params.date]);
    const del = (index) => {
        const taskToDelete = data[index];
        let newData = data.filter((item, i) => i !== index);
        setData(newData);
        const updatedStoredData = storedData.filter((item) => item.title !== taskToDelete.title&&item.description!==taskToDelete.description&&item.d!==taskToDelete.d);
        localStorage.setItem('data', JSON.stringify(updatedStoredData));
    };
    return (
        <div className='w-full min-h-screen bg-black flex items-center flex-col'>
            <div className='w-full h-[70px] flex justify-center items-center bg-blue-500 flex-col'>
            <div className='w-full h-[60%] flex justify-center items-center bg-blue-500'>
                <h1
                    className='w-[400px] text-[18px] flex justify-center items-center'>
                    Everything in your mind, Just Write Here
                </h1>
                <button
                    onClick={handleClick}
                    className='cursor-not-allowed text-[15px] w-[100px] rounded bg-red-800'>
                    Clear Diary
                </button>
            </div>
                <h2>{params.date}</h2>
            </div>
            <div id="tasks" className='w-full m-4 flex items-center flex-col'>
                {data.map((item, index) => (
                    <Task key={index} srn={index + 1} title={item.title} date={item.d.toLocaleString()} description={item.description} del={() => del(index)} />
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Page;
