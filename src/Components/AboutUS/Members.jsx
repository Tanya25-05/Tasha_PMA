import React from "react";
import advisors from "../../Assets/advisors.svg";
// import Name from "./About";
import Heading from "./Heading";

function Members() {
  return (
    <>
      <Heading heading={"Our Team Members"} />
      <div className="flex justify-center flex-col md:flex-row items-center">
        <Name name="Tanya Verma" desig="founder" />
        <Name name="Tanya Verma" desig="founder" />
        <Name name="Tanya Verma" desig="founder" />
        <Name name="Tanya Verma" desig="founder" />
      </div>
    </>
  );
}

const Name = ({ name, desig }) => {
  return (
    <div className="m-2 text-white ">
      <img src={advisors} alt="" className="" />
      <div className="px-3 bg-pink w-[230px]  relative -top-5 left-[15px] h-10 flex justify-between items-center ">
        <p className="font-bold ">{name}</p>
        <p>{desig}</p>
      </div>
    </div>
  );
};

export default Members;
