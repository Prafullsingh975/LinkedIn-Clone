import { CgMoreAlt } from "react-icons/cg"; 
import { GiJetFighter } from "react-icons/gi"; 
import { MdPhotoSizeSelectActual } from "react-icons/md"; 
import { BsEmojiSmile } from "react-icons/bs"; 
import { RiSendPlaneFill } from "react-icons/ri"; 
import { BiRepost } from "react-icons/bi"; 
import { FaRegCommentDots } from "react-icons/fa"; 
import { AiTwotoneLike } from "react-icons/ai"; 
import React, { useState } from 'react'
import { GrFormAdd } from "react-icons/gr";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdMoreHoriz } from "react-icons/md";

const Post = () => {
  const [show,setShow] = useState(false);
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
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="w-[3.3rem] h-[3.3rem] rounded-full bg-black">
            {/* <img className="w-full h-full overflow-hidden" src="" alt="" /> */}
          </div>
          <div className="flex flex-col">
            <span className="text-[0.8rem] font-medium">Prachi Dubey <span className="text-[#00000099]">• 3rd+</span></span>
            <span className="text-[0.7rem] text-[#00000099] truncate w-[4rem]">Student at Oriental College of Technology</span>
            <span className="flex items-center gap-1 text-[0.7rem] text-[#00000099]">7h • <div><GiEarthAfricaEurope /></div></span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <GrFormAdd size='1.5rem' color="#0A66C2" />
          <span className="font-medium text-[#0A66C2]">Follow</span>
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <span className="text-[0.8rem] truncate w-[18rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione tempore porro odit assumenda omnis adipisci reiciendis exercitationem corporis officia.</span>
        <div className="w-full h-[13rem] bg-blue-200"></div>
        <div className='mt-1 flex justify-between items-center border-b-2'>
          <div className='flex gap-2'>
            <div className='flex'>
            <div className='-mr-[0.3rem]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="like-consumption-small" data-supported-dps="16x16">
              <g>
                <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none" />
                <circle cx="8" cy="8" r="7" fill="#378fe9" />
                <path d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z" fill="#d0e8ff" fill-rule="evenodd" />
                <path d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08" fill="none" stroke="#004182" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
            </div>
            <div className='-mr-[0.3rem]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="empathy-consumption-small" data-supported-dps="16x16">
              <g>
                <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none" />
                <circle cx="8" cy="8" r="7" fill="#df704d" />
                <path d="M7.71 5A2.64 2.64 0 004 8.75l4 4 4-4A2.64 2.64 0 0012 5a2.61 2.61 0 00-1.85-.77h0A2.57 2.57 0 008.3 5l-.3.3z" fill="#fff3f0" stroke="#77280c" fill-rule="evenodd" />
                <path d="M11.43 5.18a2 2 0 01.53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8M5.79 4.81a2.1 2.1 0 00-.79.11 1.8 1.8 0 00-1 .82A2.6 2.6 0 003.77 7v.09" fill="none" />
                <path d="M7.71 5A2.6 2.6 0 004 5a2.66 2.66 0 000 3.7l4 4 4-4A2.66 2.66 0 0012 5a2.58 2.58 0 00-1.85-.78h0A2.58 2.58 0 008.3 5l-.3.25z" fill="none" stroke="#77280c" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg></div>
            <div className='-mr-[0.3rem]'><svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="16" viewBox="0 0 17.5 16" id="support-consumption-small" data-supported-dps="16x16">
              <defs>
                <mask id="reactions-support-consumption-small-a" x="0" y="0" width="17.5" height="16" maskUnits="userSpaceOnUse">
                  <path d="M8 15a7 7 0 10-7-7 7 7 0 007 7z" fill="#fff" />
                </mask>
              </defs>
              <g mask="url(#reactions-support-consumption-small-a)">
                <circle cx="8" cy="8" r="8" fill="none" />
                <path d="M8 15a7 7 0 10-7-7 7 7 0 007 7z" fill="#d8d8d8" />
                <path d="M8 15a7 7 0 10-7-7 7 7 0 007 7z" fill="#bba9d1" />
                <path d="M6.55 10.62h-.21c-.23-.09-1.38-.53-2.15-.74A.25.25 0 014 9.67a.67.67 0 01.11-.5.39.39 0 01.34-.17.69.69 0 01.2 0 1.79 1.79 0 01.42.25l.36.25.33.24.84.33c.11 0 .58.26.55.38s-.53.11-.64.11z" fill="#fef2ff" />
                <path d="M15.47 14.07a23.68 23.68 0 01-3.56-.33h-.06a21.22 21.22 0 01-2.64-.51c-.77-.22-1.53-.5-2.26-.77l-.33-.12c-.7-.25-1.26-.47-1.77-.67l-.2-.07a9.1 9.1 0 01-.9-.4c-.4-.22-.53-.5-.35-.84A.6.6 0 014 10h.2a21.93 21.93 0 012.86.86h1.19L11 11a5.08 5.08 0 00-2-.8c-.25-.06-.48-.13-.53-.29a.66.66 0 01.24-.72 1.09 1.09 0 01.56-.12 3.27 3.27 0 01.7.08l.36.1a4.25 4.25 0 00.86.18 8.87 8.87 0 011.43.3 2.43 2.43 0 012 1.51c-.06-.18 0-.05 0-.11v-.06h.99c.13 0 .7-.14.7 0a5.45 5.45 0 01-.67 3 .17.17 0 01-.14.1z" fill="#eae2f3" />
                <path d="M13.2 10a.09.09 0 00.1 0z" fill="#d67676" />
                <path d="M6.14 3.57a1.43 1.43 0 00-2 0 1.5 1.5 0 000 2.1L6.3 7.92l2.22-2.25a1.5 1.5 0 000-2.1 1.44 1.44 0 00-2 0l-.17.17z" fill="#ecaa96" fill-rule="evenodd" />
                <path d="M16.92 11.25a2.58 2.58 0 01-.13 1.62 5.29 5.29 0 01-1.21 1.69c-.13.12-4.85-.52-6-.69a58.16 58.16 0 01-6.49-2.7c-.21-.11-.22-.9.37-1.06s2.85.8 3.8.88 2.54.18 3.67.18-1.3-.68-1.7-.82-1-.31-1.08-.64S8.63 9 9 9a6.57 6.57 0 012 .35 13.35 13.35 0 012.45.5A3.1 3.1 0 0115 11c.11.2 1.81.17 1.92.25z" fill="none" stroke="#493d57" />
                <path d="M4.07 10.09A.75.75 0 014.59 9c.4-.08 1.18.42 1.72.91a5.73 5.73 0 001.89 1.14" fill="none" stroke="#493d57" />
                <path d="M6.22 3.37A1.58 1.58 0 004 5.6L6.4 8l2.42-2.4a1.59 1.59 0 00.43-1.38 1.54 1.54 0 00-.86-1.15 1.52 1.52 0 00-.69-.16 1.58 1.58 0 00-1.12.47l-.18.17z" fill="none" stroke="#77280c" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
            </div>
            </div>
            <span className='text-[0.7rem] text-[#00000099]'>861</span>
          </div>
          <div className='text-[0.7rem] text-[#00000099] mb-2'>
            <span>11 comments • 11 repos</span>
          </div>
        </div>
        <div className="flex mt-2 justify-between px-8">
            <div>
            <AiTwotoneLike size='1.5rem' />
            </div>
            <div>
            <FaRegCommentDots size='1.5rem' />
            </div>
            <div>
            <BiRepost size='1.5rem' />
            </div>
            <div>
              <RiSendPlaneFill size='1.5rem' />
            </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-black">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="flex justify-between items-center border p-2 rounded-3xl">
            <input type="text" placeholder="Add a Comment..." className="placeholder:text-[0.9rem]" />
            <div className="flex gap-3">
              <BsEmojiSmile size='1.4rem' color="#00000099" />
              <MdPhotoSizeSelectActual size='1.4rem' color="#00000099" />
            </div>
          </div>
        </div>
          <div className="mt-4">
            <select name="" id="" className="outline-none text-[0.9rem] font-medium text-[#00000099]">
              <option value="">Most Relevant</option>
              <option value="">Most Recent</option>
            </select>
            <div className="mt-2">
              <div className="flex gap-2">
                <div className="h-7 w-7 bg-black rounded-full">
                  {/* <img src="" alt="" /> */}
                </div>
                <div>
                <div className="flex flex-col">
                <div className="bg-[#F2F2F2] px-4 py-2 flex flex-col ">
                  <div className="flex items-center justify-between">
                  <span className="text-[0.9rem] font-medium">Ranjitha R</span>
                  <div className="flex gap-1 items-center">
                    <span className="text-[0.7rem] text-[#00000099]">3d</span>
                    <CgMoreAlt size='1rem' color="#00000099" />
                  </div>
                  </div>
                  <span className="text-[0.9rem] text-[#00000099]">(She/He) • 3rd+</span>
                  <span  className="text-[0.8rem] text-[#00000099]">Software Engineer at Melorra</span>
                  <span className="text-[0.9rem] mt-1">comment</span>
                </div>
                <span className="text-[0.8rem] font-medium text-[#00000099]">Like | Reply</span>
                </div>
                <div  className="mt-2">
                <span className="text-[0.8rem] font-medium text-[#00000099]" onClick={(e)=>setShow(!show)}>Load {show ? 'less' : 'more'} comments</span>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Post