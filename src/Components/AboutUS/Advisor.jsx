import React from "react"
import advisors from "../../Assets/advisors.svg"
import Heading from "./Heading";

function Advisors() {
    return(
      <>
      <Heading heading="Our Top Advisors"/>
      <div className="flex justify-center md:flex-row flex-col items-center ">
        <Leaders name="Full Name" desig="Founder"/>
        <Leaders name="Full Name" desig="Founder"/>
        <Leaders name="Full Name" desig="Founder"/>
       
      </div>
      </>
    )
  }

  const Leaders = ({name,desig}) => {
    return (
      <div className="m-2">
      <img src={advisors} alt="" className="" />
      <div className="text-white relative -top-12 px-3 bg-gradient-to-t  from-blurpink to-transparent py-3 flex justify-between">
        <p>{name}</p>
      <p>{desig}</p>
  </div>
      </div>
    )
  } ;
  export default Advisors;