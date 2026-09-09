import React from 'react'
import { ArrowUpRight } from 'lucide-react';


const hero = () => {
  return (
   <div className="
  min-h-screen
  bg-white
  flex flex-col lg:flex-row
  justify-center items-center
  gap-10 lg:gap-x-20
  px-6 sm:px-10 lg:px-16
  pt-28 lg:pt-20
 
">

  {/* Intro */}
  <div className="
    intro
    flex flex-col
    gap-y-3
    w-full lg:w-1/2
    text-center lg:text-left
  ">

    <h1
      className="
        heading
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
      "
      style={{ fontFamily: '"Gravitas One", serif' }}
    >
      Nabeel Pervaiz
    </h1>

    <p className="
      text-lg
      sm:text-xl
      md:text-2xl
      lg:text-3xl
    ">
      A passionate React Developer continuously learning,
      building, and turning ideas into real-world web applications.
    </p>

    {/* Socials + Button */}
    <div className="
      socials
      flex
      flex-wrap
      justify-center lg:justify-start
      items-center
      gap-3
      pt-5
    ">

      <a href="https://www.instagram.com/nabeelpervaiz.dev/">
        <img
          className="rounded-md h-9 sm:h-10 md:h-11 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IrEyceSUby5qA88SJShQAWPC1p1GTNksIIDXBkX2dpHfmOU6Kz_Z662H&s=10"
          alt="GitHub"
        />
      </a>

      <a href="https://x.com/Nabeelpervaiz76">
        <img
          className="rounded-md h-9 sm:h-10 md:h-11 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5hhqZbO5JX928cZAkaBtxDvfpLxHmWKYwervMaTdlQ&s=10"
          alt="X.com"
        />
      </a>

      <a href="https://github.com/nabeelpervaiz-dev">
        <img
          className="rounded-md h-9 sm:h-10 md:h-11 cursor-pointer"
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
          alt="Facebook"
        />
      </a>
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


  {/* Person Image */}
  <div className="
    person
    w-full lg:w-1/2
    flex
    justify-center
    items-end
  ">

    <img
      className="
        w-auto
        h-[45vh]
        sm:h-[50vh]
        md:h-[55vh]
        lg:h-[70vh]
        object-contain
      "
      src="/images/portfolio.webp"
      alt="Person"
    />

  </div>

</div>
  )
}

export default hero