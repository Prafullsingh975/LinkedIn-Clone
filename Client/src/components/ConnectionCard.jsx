import { RxCross2 } from "react-icons/rx"; 
import { BsFillPersonPlusFill } from "react-icons/bs";
import React from 'react'

const ConnectionCard = () => {
    return (
        <div className='bg-white screen320:w-[8rem] screen375:w-[10rem] screen425:w-[12rem] flex flex-col shadow rounded-lg relative'>
            <div className="absolute right-1 top-1 bg-[#525859] p-1 rounded-full">
                <RxCross2 color="white" size='1.2rem' />
            </div>
            <div className='h-[3.5rem] bg-slate-400 rounded-t-lg'></div>
            <div className='bg-black h-[6rem] w-[6rem] rounded-full -mt-[3rem] screen320:ml-[1rem] screen375:ml-[2rem] screen425:ml-[3rem]'>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="flex flex-col items-center mt-1">
                <span className="truncate w-[6rem] text-[1.1rem] font-medium">Ritesh Kothari</span>
                <span className="text-[0.9rem] text-[#666666]">Working As</span>
                <span className="truncate w-[4.5rem] text-[0.8rem] text-[#666666]">Associate developer</span>
                <span className="text-wrap text-center text-[0.7rem] text-[#666666] mt-3 w-[7rem]">25 mutual connections</span>
                <div className="flex items-center mt-2 mb-2 gap-1 text-[#3966C2] border-2 border-[#3966C2] px-4 py-[0.125rem] rounded-2xl">
                    <BsFillPersonPlusFill size='1rem' color="#3966C2" />
                    <span className="text-[1rem]">Connect</span>
                </div>
            </div>
        </div>
    )
}

export default ConnectionCard