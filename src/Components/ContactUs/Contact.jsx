import React from 'react'
import Header from '../Header'
import Footer from '../AboutUS/Footer'
const Contact = () => {
  return (
    <>
    <div className='my-[130px]'>
       <Header header="Contact Us"/> 
          <div className=" max-w-[1440px] md:mx-[200px] mt-10 flex justify-center items-center">
            <div className="bg-dimPink md:w-1040px p-10 justify-between">
             <div className="flex-1">  <h1 className="font-bold text-[45px] mb-5">Contact Details</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque eligendi accusantium dignissimos ipsum voluptates totam suscipit quis officiis a pariatur distinctio, libero tempora facere deleniti quasi! Consequuntur, rem odit!</p>
              <h1 className='font-bold mt-4'>Email</h1>
              <p>info@planmyadmission.com</p>
              <h1 className='font-bold mt-2 '>Phone</h1>
              <p>+91 9876543218</p>
              <h1 className='font-bold mt-2'>Location</h1>
              <p>Mumbai, India: 504, Quantum Towers, Rambaug Lane, Behind SBI Bank, Off SV Road, Malad West, Mumbai, Maharashtra- 400064</p>
              <a href='' className="text-pink">View on Google Maps</a>
              </div>
            <Card/>
            </div>
          </div>

        </div>
       <Footer/>
    </>
  )
}

export default Contact;



const Card = () => {
  return (
    <div>
      <div className="bg-white relative -top-[55px] w-[400px] h-3/4 rounded-md border-4 border-pink-500">

      </div>
    </div>
  )
}

