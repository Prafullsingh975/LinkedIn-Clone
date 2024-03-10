import { RxCross2 } from "react-icons/rx"; 
import { MdMoreHoriz } from "react-icons/md"; 
import React from 'react'

const Post = () => {
  return (
    <div className='p-2 bg-white shadow '>
        <div className='flex border-b-2 p-1 items-center justify-between'>
            <div className='flex items-center gap-2'>
            <img className='h-6 w-6 rounded-full' src="https://static.vecteezy.com/system/resources/previews/009/952/670/original/female-profile-picture-vector.jpg" alt="" />
            <span className='text-[0.7rem] font-medium opacity-80'>Prachi Dubey <span className='opacity-70'>commented on this</span></span>
            </div>
            <div className="flex gap-4 items-center">
                <div className="rounded-full p-1">
                <MdMoreHoriz size='1.3rem' color="#666666" />
                </div>
                <div>
                <RxCross2 size='1.3rem' color="#666666" />
                </div>
            </div>
        </div>
        <div>mfjkshj</div>
    </div>
  )
}

export default Post