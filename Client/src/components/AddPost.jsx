import { RiArticleLine } from "react-icons/ri"; 
import { MdEventNote } from "react-icons/md"; 
import { MdPermMedia } from "react-icons/md"; 
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 sm:rounded-2xl bg-white shadow flex flex-col gap-3 '>
    <div className='flex gap-2'>
        <img className='h-[3rem] w-[3rem] rounded-full' src="https://static.vecteezy.com/system/resources/previews/009/952/670/original/female-profile-picture-vector.jpg" alt="" />
        <input className='border p-2 pl-4 sm:w-[29rem] laptop:w-[19rem] mdLaptop:w-[30rem] outline-none rounded-3xl w-full placeholder:text-[#00000099] placeholder:text-[0.9rem] placeholder:font-medium' type="text" placeholder='Start a Post' />
    </div>
    <div className='flex justify-between '>
        <div className='flex items-center gap-2'>
            <MdPermMedia color="#378FE9" size='1.3rem' />
            <span className="text-[0.9rem] font-medium opacity-70">Media</span>
        </div>
        <div className='flex items-center gap-2'>
            <MdEventNote color="#C37D16" size='1.3rem' />
            <span className="text-[0.9rem] font-medium opacity-70">Event</span>
        </div>
        <div className='flex items-center gap-2'>
            <RiArticleLine color="#E06847" size='1.3rem' />
            <span className="text-[0.9rem] font-medium opacity-70">Write article</span>
        </div>
    </div>
    </div>
  )
}

export default AddPost