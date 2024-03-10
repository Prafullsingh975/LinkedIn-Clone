import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 sm:w-[29rem] sm:flex sm:flex-col  sm:float-right laptop:float-none laptop:w-[20rem]">
      <div className="flex flex-wrap justify-center px-6 gap-x-3 ">
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">About</span>
        </Link>
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">Accessibility</span>
        </Link>
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">Help Center</span>
        </Link>
        <Link className="flex items-center gap-1">
          <span className="text-[0.7rem] text-[#00000099]">Privacy & Terms</span>
          <BiCaretDown color="#00000099" size='0.7rem' />
        </Link>
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">Ad Choices</span>
        </Link>
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">Advertising</span>
        </Link>
        <Link className="flex items-center gap-1">
          <span className="text-[0.7rem] text-[#00000099]">Business Services</span>
          <BiCaretDown color="#00000099" size='0.7rem' />
        </Link>
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">Get the linkdin app</span>
        </Link>
        <Link>
          <span className="text-[0.7rem] text-[#00000099]">More</span>
        </Link>
      </div>
      <div className="flex gap-1 text-[0.8rem] justify-center mt-4">
        <div className="flex items-center">
          <span className="font-bold text-[#0A66C2]">Linked</span>
          <span><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
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
          </svg></span>
        </div>
        <span>
          LinkedIn Corporation © 2024
        </span>
      </div>
    </footer>
    // <footer className="max-w-5xl mx-auto px-4">
    //   <div className="grid gap-3 grid-cols-5 py-4 text-sm max-md:grid-cols-3 max-md:gap-y-10 max-sm:grid-cols-2">
    //     <ul className="flex flex-col gap-3">
    //       <li>
    //         <a href="/" className="hover:underline">
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Community Guidelines
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Privacy & Terms
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Sales Solutions
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Safety Center
    //         </a>
    //       </li>
    //     </ul>
    //     <ul className="flex flex-col gap-3">
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Accessibility
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Careers
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Ad Choices
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Mobile
    //         </a>
    //       </li>
    //     </ul>
    //     <ul className="flex flex-col gap-3">
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Talent Solutions
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Marketing Solutions
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Advertising
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/" className="hover:underline">
    //           Small Business
    //         </a>
    //       </li>
    //     </ul>
    //     <ul className="flex flex-col gap-3">
    //       <li className="flex gap-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="min-w-[20px] w-4"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             fill="currentColor"
    //             d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"
    //           ></path>
    //         </svg>
    //         <div className="grid text-base font-medium">
    //           Questions?
    //           <a
    //             href="/"
    //             className="font-normal text-sm text-slate-700 hover:underline"
    //           >
    //             Visit our Help Center
    //           </a>
    //         </div>
    //       </li>
    //       <li className="flex gap-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="min-w-[20px] w-4"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             fill="currentColor"
    //             d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.013 2.475T12.05 15.5M12 12"
    //           ></path>
    //         </svg>
    //         <div className="grid text-base font-medium">
    //           Manage your account and Privacy
    //           <a
    //             href="/"
    //             className="font-normal text-sm text-slate-700 hover:underline"
    //           >
    //             Go to your settings
    //           </a>
    //         </div>
    //       </li>
    //       <li className="flex gap-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="min-w-[20px] w-4"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             fill="currentColor"
    //             d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12z"
    //           ></path>
    //         </svg>
    //         <div className="grid text-base font-medium">
    //           Recommendation transparency
    //           <a
    //             href="/"
    //             className="font-normal text-sm text-slate-700 hover:underline"
    //           >
    //             learn more about Recommended Content
    //           </a>
    //         </div>
    //       </li>
    //     </ul>
    //     <div>
    //       <label htmlFor="lan" className="grid gap-2">
    //         Select Language
    //         <select
    //           name="lan"
    //           id="lan"
    //           className="border border-black px-2 py-1 rounded"
    //         >
    //           <option value="en">English (English)</option>
    //           <option value="en">Hindi</option>
    //           <option value="en">russian</option>
    //           <option value="en">German</option>
    //           <option value="en">French</option>
    //         </select>
    //       </label>
    //     </div>
    //   </div>
    // </footer>
  );
}
