import { FiMoreHorizontal } from "react-icons/fi"; 
import { CgMenuGridR } from "react-icons/cg";
import React from 'react'
import { Link } from 'react-router-dom'
 
const Nav = () => {
    return (
        <nav className="sticky top-0 left-0 z-50 h-14 bg-white shadow mdLaptop:flex mdLaptop:justify-center">
            <div className="flex h-full items-center justify-between laptop:justify-normal laptop:gap-8 p-4 mdLaptop:gap-36">
                <div className="flex gap-[1.5rem] items-center text-[#00000096]">
                    <Link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2.4rem"
                            height="2.4rem"
                            viewBox="0 0 128 128"
                        >
                            <path
                                fill="#0076b2"
                                d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                            ></path>
                        </svg>
                    </Link>
                    <div className="flex h-full items-center flex mdLaptop:bg-[#EDF3F8] rounded-lg h-[2.2rem]">
                        <div className="laptop:flex laptop:items-center laptop:flex-col laptop:leading-4 mdLaptop:p-2 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.6em"
                            height="1.6em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                            ></path>
                        </svg>
                        <span className="hidden laptop:flex text-[0.8rem] mdLaptop:hidden">Search</span>
                        </div>
                        <input
                            id="search"
                            type="text"
                            placeholder="Search"
                            className="hidden mdLaptop:flex bg-transparent w-[15rem] outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="flex gap-[1.5rem] sm:gap-[3.6rem] mdLaptop:gap-[1.5rem] laptop:gap-[2.3rem] sm:mr-6 items-center text-[#00000099]">
                        <li>
                            <Link to='/feed'>
                                <div className="laptop:flex laptop:flex-col laptop:items-center laptop:leading-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.7em"
                                        height="1.7em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
                                        ></path>
                                    </svg>
                                    <span className="hidden laptop:flex text-[0.8rem]">Home</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/mynetwork'>
                                <div className="laptop:flex laptop:flex-col laptop:items-center laptop:leading-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.7em"
                                        height="1.7em"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8.75 5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0M4 8a1 1 0 0 0-1 1v4.5a3.5 3.5 0 1 0 7 0V9a1 1 0 0 0-1-1zm5.75-2.75c0 .65-.19 1.255-.52 1.763c.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.355.52.563 1.15.563 1.827M9.5 16.855A4.489 4.489 0 0 0 11 13.5V9c0-.364-.098-.706-.268-1H13a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355M13.75 5.25c0 .65-.19 1.255-.52 1.763c.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.355.52.563 1.15.563 1.827m-.25 11.605A4.489 4.489 0 0 0 15 13.5V9c0-.364-.098-.706-.268-1H17a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355"
                                        ></path>
                                    </svg>
                                    <span className="hidden laptop:flex text-[0.8rem]">My Network</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/jobs'>
                                <div className="laptop:flex laptop:flex-col laptop:items-center laptop:leading-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.7em"
                                        height="1.7em"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path d="M0 0h24v24H0z"></path>
                                            <path
                                                fill="currentColor"
                                                d="M22 13.478V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.522l.553.277a20.999 20.999 0 0 0 18.897-.002zM14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447.724a19.002 19.002 0 0 1-16.726.186l-.647-.32l-1.18-.59V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm-2 8a1 1 0 0 0-1 1a1 1 0 1 0 2 .01c0-.562-.448-1.01-1-1.01m2-6h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span className="hidden laptop:flex text-[0.8rem]">Jobs</span>
                                </div>
                            </Link>
                        </li>
                        <li className="max-[320px]:hidden visible">
                            <Link to='/messages'>
                                <div className="laptop:flex laptop:flex-col laptop:items-center laptop:leading-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.7em"
                                        height="1.7em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994zM14 11v2h2v-2zm-6 0v2h2v-2z"
                                        ></path>
                                    </svg>
                                    <span className="hidden laptop:flex text-[0.8rem]">Messaging</span>
                                </div>
                            </Link>
                        </li>
                        <li className="max-[320px]:hidden visible">
                            <Link to='/notifications'>
                                <div className="laptop:flex laptop:flex-col laptop:items-center laptop:leading-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.7em"
                                        height="1.7em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
                                        ></path>
                                    </svg>
                                    <span className="hidden laptop:flex text-[0.8rem]">Notifications</span>
                                </div>
                            </Link>
                        </li>
                        <li className="hidden sm:flex" >
                            <Link to="/profile">
                                <div className="laptop:flex laptop:flex-col laptop:items-center" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.7em"
                                        height="1.7em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                                        ></path>
                                    </svg>
                                    <span className="items-center hidden laptop:flex text-[0.8rem]">
                                        Me{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="2em"
                                            height="2em"
                                            viewBox="4 4 18 18"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 14.308L8.192 10.5h7.616z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className="hidden screen375:hidden screen320:flex screen425:flex sm:hidden">
                            <FiMoreHorizontal size='1.7rem'  />
                        </li>
                    </ul>
                    <ul className="sm:border-l px-2 sm:flex gap-4 items-center hidden">
                        <li>
                            <div className="laptop:flex laptop:flex-col laptop:items-center">
                                <CgMenuGridR size='1.5rem' color="#00000099" />
                                <span className="hidden text-[0.8rem] laptop:flex items-center text-[#00000099]">
                                    For Business{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2em"
                                        height="2em"
                                        viewBox="4 4 18 18"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 14.308L8.192 10.5h7.616z"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                        </li>
                        <li className="w-[6rem] leading-4">
                            <span className="text-[0.8rem] text-center flex text-[#BF7D07] underline ">Confidently job search with Premium</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav