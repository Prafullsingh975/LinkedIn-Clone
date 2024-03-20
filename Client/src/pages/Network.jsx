import React from 'react'
import SideBarNetwork from '../components/SideBarNetwork'
import Invitation from '../components/Invitation'
import ConnectionCard from '../components/ConnectionCard'

const Network = () => {
  return (
    <>
    <div className='sm:flex sm:gap-6 sm:justify-around sm:py-6 sm:px-4 laptop:justify-center'>
    <SideBarNetwork />
    <div>
         {/* invitations */}
         <div className="bg-white mt-1">
            <div className="flex items-center justify-between border-b p-3">
            <span className="text-[1.1rem]">Invitations</span>
            <span className="text-[1rem] font-medium text-[#666666]">See all 105</span>
            </div>
            <Invitation />
        </div>
        {/* people you may know */}
        <div className='bg-white mt-1'>
        <div className='flex justify-between items-center p-3'>
            <span className='text-[1rem]'>People you may know in Greater <br /> Bhopal Area</span>
            <span className='text-[0.9rem] font-medium text-[#666666] text-nowrap '>See all</span>
        </div>
        <div className='px-3 flex-wrap flex gap-y-4 sm:gap-x-2 justify-around sm:justify-start'>
            <ConnectionCard />
            <ConnectionCard />
            <ConnectionCard />
            <ConnectionCard />
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Network