import React from 'react'

const Navigation = () => {
  return (
   <div className="
  fixed top-5 left-1/2 -translate-x-1/2
  flex items-center justify-between
  w-[92%] md:w-[90%] lg:w-[85%]
  px-4 py-3
  sm:px-6 md:px-8 lg:px-10
  bg-white/50 backdrop-blur-md
  text-black
  shadow-2xl
  rounded-full
  border border-red-50
  z-50
">
  
  <div className="text-base sm:text-lg md:text-xl font-light">
    Frontend Developer
  </div>

  <div>
    <a
     href="mailto:nabeelpervaiz.dev@gmail.com"
      className="
        inline-block
        px-4 py-2
        sm:px-6
        md:px-8
        text-sm sm:text-base
        bg-red-500
        text-white
        rounded-full
        cursor-pointer
        hover:bg-red-600
        transition
      "
    >
      Contact Us
    </a>
  </div>

</div>
  )
}
 
export default Navigation