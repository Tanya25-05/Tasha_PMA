import React from "react";
import quote from "../../Assets/quote.svg";
import Heading from "./Heading";
import advisors from "../../Assets/advisors.svg"
// Our Founder Speaks
function Founder() {
    return (

      <div className="my-[120px]">
      <Heading heading="Our Founder Speaks"/>
      <div className="flex justify-evenly relative md:h-[274px] my-20 md:ml-[350px] bg-dimPink p-10">
        <img src={quote} className=" flex-1 absolute  top-[-35px] left-[40px] flex justify-start" alt="" />
        <div className="flex xxs:flex-col-reverse items-center">
        <div className="flex-row mt-10 w-1/2">
        <p className="font-bold text-black text-[22px]">Lorem ipsum</p>
        <p className="text-pink">Peter</p>
        <p className="text-black p-2 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reiciendis error debitis a exercitationem maiores nesciunt architecto,Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>  
        
        <img src = {advisors} className="xs:-top-[130px]md:maskFounder  w-[370px] h-[440px]  xxs:clip-image relative" alt="founder"/>
        </div>
        </div>
      </div>
    );
  }
  export default Founder;