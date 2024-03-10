import { BiChevronDown } from "react-icons/bi"; 
import React, { useState } from 'react'
import Description from '../components/description'
import MoreDesc from "../components/MoreDesc";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import Hiring from "../components/Hiring";
import News from "../components/News";

const Feed = () => {
    const [show,setShow] = useState(false);
  return (
    <>
        <div className="sm:flex sm:pt-6 sm:gap-6 sm:px-5 mdLaptop:justify-center">
        <div>
        <div className="sm:rounded-2xl">
        <Description />
        <div className="sm:flex hidden">
            <MoreDesc />
        </div>
        <div className="sm:hidden flex">
        {show && <MoreDesc />}
        </div>
        </div>
        <div className='h-10 flex items-center bg-[#F5F5F4] shadow sm:hidden'>
            <div className="h-6 w-full flex items-center justify-center bg-[#E1DFDB]">
            <span onClick={(e)=>setShow(!show)} className='flex items-center font-medium  text-[0.8rem]'>Show {show ? "less" : "more" }</span>
            <BiChevronDown size={20} />
            </div>
        </div>
        </div>
        {/* <Hiring /> */}
        <div>
        <AddPost />
        <div className="flex items-center justify-between h-10">
            <div className="h-[0.1rem] w-64 screen375:w-[18rem] screen425:w-[21rem] sm:w-[25.5rem] laptop:w-[18.5rem] mdLaptop:w-[29.5rem] bg-[#D3D2CF] "></div>
            <div className="flex items-center">
            <span className="text-[0.7rem] whitespace-nowrap">Sort By:</span>
            <select className="bg-transparent outline-none text-[0.7rem] font-medium" name="" id="" >
                <option className="" value="">Top</option>
                <option value="">Recent</option>
            </select>
            </div>
        </div>
        <Post />
        <div className="hidden sm:flex sm:mt-2">
        <News />
        </div>
        </div>
        <div className="laptop:flex mt-2 sm:hidden">
            <News />
        </div>
        </div>
    </>
  )
}

export default Feed