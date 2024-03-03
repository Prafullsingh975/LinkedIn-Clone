import { BiChevronDown } from "react-icons/bi"; 
import React, { useState } from 'react'
import Description from '../components/description'
import MoreDesc from "../components/MoreDesc";
import AddPost from "../components/AddPost";
import Post from "../components/Post";

const Feed = () => {
    const [show,setShow] = useState(false);
  return (
    <>
        <Description />
        {show && <MoreDesc />}
        <div className='h-10 flex items-center bg-[#F5F5F4] shadow'>
            <div className="h-6 w-full flex items-center justify-center bg-[#E1DFDB]">
            <span onClick={(e)=>setShow(!show)} className='flex items-center font-medium  text-[0.8rem]'>Show {show ? "less" : "more" }</span>
            <BiChevronDown size={20} />
            </div>
        </div>
        <AddPost />
        <div className="flex items-center justify-between h-10">
            <div className="h-[0.1rem] w-64 bg-[#D3D2CF] "></div>
            <div className="flex items-center">
            <span className="text-[0.7rem]">Sort By:</span>
            <select className="bg-transparent outline-none text-[0.7rem] font-medium" name="" id="" >
                <option className="" value="">Top</option>
                <option value="">Recent</option>
            </select>
            </div>
        </div>
        <Post />
    </>
  )
}

export default Feed