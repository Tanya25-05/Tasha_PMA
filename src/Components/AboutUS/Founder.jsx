import React from "react";
import quote from "../../Assets/quote.svg";
import Heading from "./Heading";
import advisors from "../../Assets/advisors.svg"
// Our Founder Speaks
function Founder() {
    return (
      <>
      
      <Heading heading="Our Founder Speaks"/>
      <div className="bg-dimPink my-[50px] h-auto p-10 sm:h-[274px] w-full sm:mx-[300px] relative flex text-white rounded-lg items-center">
        <img src={quote} className=" flex-1 absolute top-[-35px] left-[40px] flex justify-start" alt="" />
        <div className="flex-row w-1/2">
        <p className="font-bold text-black text-[22px]">Lorem ipsum</p>
        <p className="text-pink">Peter</p>
        <p className="text-black p-2 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reiciendis error debitis a exercitationem maiores nesciunt architecto,Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>  
        
        <img src = {advisors} className="clip-image  w-[370px] h-[330px] md:h-[430px] relative" alt="founder"/>
        
        
      </div>
      </>
    );
  }
  export default Founder;