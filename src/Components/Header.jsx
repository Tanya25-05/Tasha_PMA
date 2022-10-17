import React from 'react'

const Header = ({header}) => {
  return (
    <div className=" font-bold flex justify-between items-center">
        <h1
          className="justify-center text-black 
       md:text-7xl sm:text-4xl text-2xl md:pl-[150px] pl-[30px] w-2/3"
        >
        {header}
        </h1>
        <span className="xxs:ml-[10px] ml-[0px] w-full bg-pink h-[70px]"></span>
      </div>
  )
}

export default Header