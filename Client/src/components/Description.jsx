import React from 'react'

const Description = () => {
  return (
    <>
    <div className='h-[10rem] relative bg-white shadow'>
        <div className='h-[3.5rem] bg-gray-400'></div>
        <div className='h-[3.8rem] left-[50%] translate-x-[-50%] absolute top-6 border-2 w-[3.8rem] rounded-full bg-black'>
            {/* <img className='w-full h-full overflow-hidden' src="" alt="" /> */}
        </div>
        <div className='flex font-medium justify-center mt-8'>Prachi Dubey</div>
        <span className='text-[0.7rem] opacity-70 flex justify-center mt-1'>Student at Oriental College of Technology</span>
    </div>
    </>
  )
}

export default Description