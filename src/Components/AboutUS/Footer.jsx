import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-8 px-8 grid lg:grid-cols-3 gap-8 text-pink border-t-4 border-pink"> 
      <div>
        <h1 className="w-full text-4xl font-bold">Plan My Admission</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          alias atque. Deserunt porro reiciendis ipsa.
        </p>
        <div className="flex cursor-pointer justify-start md:w-[75%] mt-3">
          <InstagramIcon fontSize="large" className="mr-3 cursor-pointer" />
          <LinkedInIcon fontSize="large" className="mr-3 cursor-pointer" />
          <YouTubeIcon fontSize="large" className="mr-3 cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-evenly mt-6 text-right">
        <div>
          <h6 className="font-bold uppercase">Universities</h6>
          <ul className="cursor-pointer font-medium">
            <li className="py-2 text-sm">Unviersity of Calirfornia</li>
            <li className="py-2 text-sm">Unviersity of Iran</li>
            <li className="py-2 text-sm">Unviersity of UK</li>
            <li className="py-2 text-sm">Unviersity of Toranto</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase">Important links</h6>
          <ul className="cursor-pointer font-medium">
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase">Contact Details</h6>
          <ul className="cursor-pointer font-medium">
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;