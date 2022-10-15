import React from "react";
import icon from "../../Assets/icon.svg";
import Founder from "./Founder";
import Advisors from "./Advisor";
import Members from "./Members";
import FastTrack from "./FastTrack";
import Footer from "./Footer";
function About() {
  return (
    <div className="font-SegoueUI   ">
      <div className=" font-bold flex justify-between items-center">
        <h1
          className="justify-center text-black 
       md:text-7xl sm:text-4xl text-2xl md:pl-[150px] pl-[30px] w-2/3"
        >
          ABOUT US
        </h1>
        <span className="xxs:ml-[10px] ml-[0px] w-full bg-pink h-[70px]"></span>
      </div>

      {/* About US section */}

      <div className="md:px-[150px] sm:px-[30px] flex xxs:flex-col sm:flex-row justify-between ">
        <div className="float-left
         xxs:w-full sm:w-1/4">
          <div className=" w-[73px] bg-pink h-[4px] text-black mt-[130px] ml-5  "></div>
          <br />
          <div className=" font-bold text-black ml-5 mr-[40px] mx-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad
            porro temporibus distinctio a, et maxime quasi quia fuga cum! In.
          </div>
        </div>

        <div className="text-black mt-10 mt-[120px] md:w-2/3 float-right  mx-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          provident itaque possimus quod officia aliquam, quasi praesentium
          ipsum harum, officiis esse qui corrupti eius mollitia, quaerat fugiat
          ea molestias unde!
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ab,
          optio ipsam molestias a odio modi recusandae atque officia fugiat
          animi nisi sequi labore deserunt dolor! Modi libero facere veniam.
        </div>
      </div>


      {/* //our core values */}

      <div className="my-[100px] md:mx-[200px] bg-dimPink rounded-md p-[30px] flex flex-col text-black">
        {/* our core values */}
        <div className=" flex-1 mr-[5px] sm:flex-row xxs:flex-col flex items-center justify-center ">
          <div className="flex justify-center items-center md:w-1/3 my-[30px] py-[40px]">
            <p className="w-1 h-[100px] bg-pink">
            </p>
            <span className="pl-3 w-[250px] border-pink text-[45px] font-bold flex justify-center items-center">
              Our Core Values
            </span>
          </div>
          <Card />
          <Card />
        </div>
        <div className="flex xxs:flex-col sm:flex-row items-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
     
      {/* <Heading heading="Our Founder Speaks"/> */}
      <Founder   />
      <Advisors />
      <Members/>
      <FastTrack/>
      <Footer/>
      {/* </div> */}
    </div>
  );
}

export default About;

function Card() {
  return (
    <div className={`p-[30px] flex flex-col flex-1 text-black w-full`}>
      <img src={icon} className="w-[44px] h-[44px]" alt="icon" />
      
      <h1 className="font-bold text-xl mt-[25px] ">Growth</h1>
      <span className=" mt-[10px] pb-[20px] border-b-4 border-pink">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        temporibus, molestiae enim hic eum doloremque, suscipit perspiciatis in
        voluptas praesentium aperiam iste officia harum error dolorem quidem
        excepturi esse nam!
      </span>
    </div>
  );
}













const Name= (name, desig)=> {
  <div className="w-3/4 bg-pink flex justify-center h-3 text-black ">
    <h1 className=""> {name}</h1>
    <p className="">{desig}</p>

  </div>

}




