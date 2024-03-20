import { BsLink } from "react-icons/bs";
import React from 'react'

const Invitation = () => {
    return (
        <div className="border-b">
            <div className='p-4 flex gap-2'>
                <div className='w-[4.2rem] h-[4.2rem] rounded-full bg-black'>
                    {/* <img src="" alt="" srcset="" /> */}
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <span className="text-[1rem] font-medium">Siddharth Jain</span>
                        <span className="text-[0.8rem] text-[#666666]">Former Assistant IT Manager</span>
                        <div className="flex items-center gap-1">
                            <BsLink size='1rem' color="#666666" />
                            <span className="text-[0.7rem] text-[#666666]">Shikha Sharma and 4 others</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-[1.1rem] font-medium text-[#666666]">Ignore</button>
                        <button className="text-[1.1rem] font-medium text-[#3966C2] border-2 border-[#3966C2] rounded-3xl p-[0.1rem] px-3">Accept</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Invitation