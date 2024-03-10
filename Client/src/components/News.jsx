import { BiChevronDown } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import React, { useState } from 'react'

const News = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-white p-4 laptop:rounded-lg h-fit sm:w-[31.5rem] laptop:w-full">
            <div className="flex items-center justify-between">
                <span className="font-medium">Linkdin News</span>
                <BsFillInfoSquareFill />
            </div>
            <div className="p-4">
                <ul className="list-disc flex flex-col gap-3">
                    <li>
                        <div className="flex flex-col">
                            <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                            <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news ● 1549 readers</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col">
                            <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                            <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col">
                            <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                            <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col">
                            <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                            <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news</span>
                        </div>
                    </li>
                    {show &&
                        <>
                            <li>
                                <div className="flex flex-col">
                                    <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                                    <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col">
                                    <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                                    <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col">
                                    <span className="text-[0.9rem] font-medium">India Inc needs more women leaders</span>
                                    <span className="text-[0.7rem] text-[#00000099]">3d ago ● Top news</span>
                                </div>
                            </li>
                        </>
                    }
                </ul>
            </div>
            <div onClick={(e) => setShow(!show)} className="flex items-center text-[#00000099]">
                <span className="text-[0.8rem] font-medium">Show {show ? 'less' : 'more'}</span>
                <BiChevronDown size='1.3rem' />
            </div>
        </div>
    )
}

export default News