import React from 'react'
import { ArrowUpRight } from 'lucide-react';


const hero = () => {
  return (
    <div className=" h-screen bg-white  flex justify-center items-center gap-x-20 pt-20" >
        <div className="intro flex flex-col gap-y-3 w-1/2" >
            <h1 className='heading text-7xl ' style={{ fontFamily: '"Gravitas One", serif' }}>Nabeel Pervaiz </h1>
            <p className='text-3xl'>A passionate React Developer continuously learning, building, and turning ideas into real-world web applications.</p>
            <div className="socials flex gap-x-4 pt-5">
                <img className="rounded-md h-11 "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IrEyceSUby5qA88SJShQAWPC1p1GTNksIIDXBkX2dpHfmOU6Kz_Z662H&s=10" alt="" />
                <img className="rounded-md h-11 " src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />   
                 <button className="px-12 py-3 border-transparent bg-red-500 text-white rounded-4xl  self-start flex ml-4 " >Contact us <ArrowUpRight/></button>
            </div>
               
        </div>
        <div className="person h-full " >
          <img className="h-full " src="/images/nabeel.png" alt="" />
        </div>
    </div>
  )
}

export default hero