import { MdKeyboardArrowDown } from "react-icons/md"; 
import { MdKeyboardArrowUp } from "react-icons/md"; 
import { BiNews } from "react-icons/bi"; 
import { RiPagesLine } from "react-icons/ri"; 
import { SlCalender } from "react-icons/sl"; 
import { HiUserGroup } from "react-icons/hi"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { TiContacts } from "react-icons/ti"; 
import { RiGroupFill } from "react-icons/ri"; 
import React, { useState } from 'react'
import Footer from "./Footer";

const SideBarNetwork = () => {
    const [show,setShow] = useState(false);
  return (
    <div className='screen320:mt-1 w-full sm:w-[18rem]'>
        {/* sidebar top part */}
        <div className="p-4 bg-white sm:rounded-t-xl">
            <span className="text-[1rem]">Manage my network</span>
            {/* all links */}
            <div className="mt-3">
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <RiGroupFill size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Connections</span>
                        </div>
                        <span className="text-[1rem] font-light">358</span>
                    </li>
                    {show && 
                    <>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <TiContacts size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Contacts</span>
                        </div>
                        <span className="text-[1rem] font-light">358</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <BsFillPersonFill size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Following & followers</span>
                        </div>
                        {/* <span className="text-[1rem] font-light">358</span> */}
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <HiUserGroup size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Groups</span>
                        </div>
                        {/* <span className="text-[1rem] font-light">358</span> */}
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <SlCalender size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Events</span>
                        </div>
                        {/* <span className="text-[1rem] font-light">358</span> */}
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <RiPagesLine size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Pages</span>
                        </div>
                        <span className="text-[1rem] font-light">25</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <BiNews size='1.3rem' color="#666666" />
                            <span className="text-[1.1rem] font-light text-[#666666]">Newsletters</span>
                        </div>
                        <span className="text-[1rem] font-light">3</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex gap-5 items-center">
                            <span className="text-[1.4rem] font-medium text-[#666666] ml-1">#</span>
                            <span className="text-[1.1rem] font-light text-[#666666]">Hashtags</span>
                        </div>
                        {/* <span className="text-[1rem] font-light">358</span> */}
                    </li>
                    </>
                    }
                </ul>
            </div>
            {/* show more or less */}
            <div className="flex items-center gap-1 mt-2" onClick={(e)=>setShow(!show)}>
                <span className="text-[1rem] text-[#666666] font-medium">Show {show ? "less":"more"}</span>
                {show ? <MdKeyboardArrowUp size='1.5rem' color="#666666" /> : <MdKeyboardArrowDown size='1.5rem' color="#666666" /> }
            </div>
        </div>
        {/* sidebar footer */}
        <div className="mt-1 bg-white flex float-left sm:w-[18rem] sm:rounded-b-xl">
            <Footer />
        </div>
    </div>
  )
}

export default SideBarNetwork