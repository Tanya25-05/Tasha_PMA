import React from "react";

const Heading = ({ heading }) => {
    return (
      <h1 className=" text-black flex items-center flex-col text-center sm:text-[45px] text-3xl  md:pb-[50px] p-10 font-bold ">
        {heading}
        <span className="border-b-4 md:ml-4 ml-3 border-b-pink md:w-[98px] w-[60px] md:py-2 py-1 mb-[10px]"></span>
      </h1>
    );
  };
  export default Heading;