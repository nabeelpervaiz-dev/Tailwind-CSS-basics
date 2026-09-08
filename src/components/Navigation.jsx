import React from 'react'

const Navigation = () => {
  return (
    <div className="flex justify-between items-center border-red-50 bg-white-900 opacity-0.7 text-black fixed w-[95%] px-10 py-3  shadow-2xl rounded-3xl translate-x-10 translate-y-5
    ">
    <div className="name text-xl font-light"  >Frontent Developer</div>
    <div className="btn">
        <button className="px-8 py-2 border-transparent bg-red-500 text-white rounded-4xl">Contact us</button>
    </div>
    </div>
  )
}
 
export default Navigation