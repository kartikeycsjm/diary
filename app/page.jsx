'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Task from './components/Task'
import Footer from './components/Footer'
const page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const [write, setWrite] = useState(false)
  const save = () => {
    let d = new Date();
    let options = { year: 'numeric', month: '2-digit', day: '2-digit',hour:'numeric',minute:'numeric',second:'numeric',hour12:true,timeZone: 'Asia/Kolkata' };
    let formatter = new Intl.DateTimeFormat('en-IN', options);
    let formattedDate = formatter.format(d);
    const newData = { d: formattedDate, title, description }
    if (title && description) {
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
    else {
      alert('Please Write title and description both')
    }
    setTitle('')
    setDescription('')
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
      {!write&&<button onClick={()=>setWrite(true)} className='transition duration-500 hover:bg-blue-500 px-2 py-1 border border-blue-500 mt-6 text-[15px] rounded text-white'>Write</button>}
      {write &&
        <div id="input"
          className='m-3 w-[90%] md:w-[450px] h-[350px] flex justify-between items-center flex-col'>
          <input
            type="text" value={title} onChange={e => setTitle(e.target.value)}
            placeholder='Title'
            className='w-[80%] h-[40px] rounded my-5 p-3 text-blue-900'
          />
          <textarea
            type="text" value={description} onChange={e => setDescription(e.target.value)}
            placeholder='description'
            className='text-blue-900 w-[80%] h-[200px] rounded my-5 p-3 resize-none'
          ></textarea>
          <button onClick={save}
            className='text-white mb-3 w-[50%] h-[35px] transition duration-500 rounded border border-blue-600
       hover:bg-blue-600'>
            Save
          </button>
          <button onClick={()=>setWrite(false)} className= ' text-white w-[150px] px-2 py-1 transition duration-500 border border-blue-500 text-[10px] rounded hover:bg-blue-600'>Don't want to Write</button>
        </div>}
      <div id="tasks" className='w-full m-4 flex items-center flex-col
      md:flex-row md:flex-wrap md:justify-around md:items-center'>
        {data &&
          data.slice().reverse().map((item, index) => (
            <Task key={index} srn={index}
              title={item.title}
              date={item.d}
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
