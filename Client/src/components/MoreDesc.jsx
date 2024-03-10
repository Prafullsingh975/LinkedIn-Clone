import { IoIosAdd } from "react-icons/io"; 
import { BsFillBookmarkFill } from "react-icons/bs"; 
import React from 'react'
import { Link } from "react-router-dom";

const MoreDesc = () => {
  return (
    <div className="sm:w-[14rem] w-full sm:overflow-hidden">
    <div className='bg-white sm:rounded-b-2xl sm:shadow'>
    <div className='p-4 shadow'>
        <div className="flex justify-between">
        <span className='text-[0.8rem] font-medium opacity-70'>Profile viewers</span>
        <span className='text-[0.8rem] font-medium text-[#0A66C2]'> 104</span>
        </div>
        <div className="flex justify-between">
        <span className='text-[0.8rem] font-medium opacity-70'>Post impressions</span>
        <span className='text-[0.8rem] font-medium text-[#0A66C2]'> 14</span>
        </div>
    </div>
    <div className='p-4 shadow'>
        <span className='text-[0.8rem] opacity-70 sm:text-[0.7rem]'>Grow professionally with Premium</span>
        <div className='flex gap-1 text-[#0A66C2] font-medium leading-3 items-center text-[0.8rem]'>
            <div className='h-3 w-3 rounded-sm bg-[#F8C77E]'></div>
            <span>Try 1 month for ₹0</span>
        </div>
    </div>
    <div className='p-3 shadow sm:shadow-none flex gap-2 items-center'>
        <BsFillBookmarkFill color="#666666" />
        <span className="text-[.8rem] font-medium">My items</span>
    </div>
    </div>
    <div className="bg-white mt-2 sm:rounded-2xl sm:shadow">
        <div className="shadow p-4">
        <div className="flex flex-col gap-2">
        <span className="text-[0.8rem] font-medium text-[#0A66C2]">Groups</span>
        <div className="flex items-center gap-2">
            <span className="text-[0.8rem] font-medium text-[#0A66C2]">Events</span>
            <IoIosAdd size='1.5rem' />
        </div>
        <span className="text-[0.8rem] font-medium text-[#0A66C2]">Followed Hashtags</span>
        </div>
        </div>
        <div className="text-[0.9rem] opacity-75 font-medium flex justify-center p-3">
            <Link>
            Discover more
            </Link>
        </div>
    </div>
    </div>
  )
}

export default MoreDesc