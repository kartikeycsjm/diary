'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Task from './components/Task'
import Footer from './components/Footer'
const page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const save = () => {
    let d = new Date();
    const newData = { d, title, description }
    if (title, description) {
      if (localStorage.getItem('data')) {
        let updatedData = [...data, newData]
        localStorage.setItem('data', JSON.stringify(updatedData))
        setData(updatedData)
      }
      else {
        setData([newData])
        localStorage.setItem('data', JSON.stringify([newData]))
      }
    }
    else{
      alert('Please Write title and description both')
    }
  }
  const show = () => {
    setData(JSON.parse(localStorage.getItem('data')))
  }
  useEffect(() => {
    show()
  }, [])
  const del = (i) => {
    const con = confirm('do you want to delete?');
    if (con) {
      const deleted = data.slice().reverse().filter((item, index) => (
        i !== index
      ))
      setData(deleted.slice().reverse())
      localStorage.setItem('data', JSON.stringify(deleted.slice().reverse()))
    }
  }
  return (
    <div className='w-full min-h-screen bg-black flex items-center flex-col'>
      <Header setData={setData} />
      <div id="input"
        className='m-5 w-[90%] md:w-[450px] h-[250px] flex justify-between items-center flex-col'>
        <input
          type="text" value={title} onChange={e => setTitle(e.target.value)}
          placeholder='Title'
          className='w-[80%] h-[40px] rounded my-5 p-3 text-blue-900'
        />
        <textarea
          type="text" value={description} onChange={e => setDescription(e.target.value)}
          placeholder='description'
          className='text-blue-900 w-[80%] h-[100px] rounded my-5 p-3 resize-none'
        ></textarea>
        <button onClick={save}
          className='mb-3 w-[50%] h-[35px] rounded border border-blue-600
         hover:bg-blue-600'>
          Save
        </button>
      </div>
      <div id="tasks" className='w-full m-4 flex items-center flex-col'>
        {data &&
          data.slice().reverse().map((item, index) => (
            <Task key={index} srn={index}
              title={item.title}
              date={item.d.toLocaleString()}
              description={item.description}
              del={() => del(index)}
            />
          ))}
      </div>
      <Footer></Footer>
    </div>
  )
}
export default page;
