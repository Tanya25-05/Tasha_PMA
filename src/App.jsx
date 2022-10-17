import React from 'react'
// import Navbar from './Components/Secondary/Navbar'
// import CardDeal from './Components/Secondary/CardDeal'
// import Stats from './Components/Stats'
// import Hero from './Components/Hero'
// import Footer from './Components/Footer'
// import styles from './style'
// import Pricing from './Components/Pricing'
// import How_to_buy from './Components/How_to_buy'
import About from './Components/AboutUS/About'
// import {Link} from "react-router-dom"
// import logo from ""
import Contact from './Components/ContactUs/Contact'

function App() {
  return (
    
         
  //        {/* <div className="bg-white w-full overflow-hidden">
  // <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //  <div className={`${styles.boxWidth}`}>
  //   <Navbar/>
  //  </div>
  // </div> */ 

  //   /* <div className={`bg-primary ${styles.flexStart}`}>
  //   <div className={`${styles.boxWidth}`}>
  //      <Hero/>
  //   </div>
  //   </div>

  //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  //   <div className={`${styles.boxWidth}`}>
  //   <CardDeal/>
  //   < Stats />
  //   < Footer/>
  //   <Pricing/>
  //   <How_to_buy/>
    
  //   </div>
  //   </div>*/


    <>
    <div className={`bg-white`}>
    <About/>
    <Contact/>
    </div>
    </>
  )
}

export default App