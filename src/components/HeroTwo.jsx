import React, { useEffect, useState } from 'react'
import video from "../assets/biggerForSmaller.mp4" 
import Navbar from '../Navbar'
import logo from "../assets/Taycan.svg"
import tycan from "../assets/56C38CD8CD2D4A6DAB3C86DDE4A06364_18095461B7FD4A1295FE5EAE97D9E9DB_taycan-gts-side.avif"
import tycanLarge from "../assets/output.mp4"


function HeroTwo() {
  const [videoSource,setVideoSource] = useState(window.innerWidth < 768 ? video : tycanLarge)

  useEffect(()=>{
    const updateVideoSource = () => {
      if (window.innerWidth < 768) {
        setVideoSource(video); // Video for small screens
      } else {
        setVideoSource(tycanLarge); // Video for larger screens
      }
    };

    // Set initial video source
    updateVideoSource();

     // Update video source on window resize
     window.addEventListener('resize', updateVideoSource);

     // Cleanup event listener
     return () => window.removeEventListener('resize', updateVideoSource);
  },[])
  return (
    <>
    <div className='w-full h-64 sm:h-80 md:h-96 overflow-hidden relative flex items-center justify-center z-0'>
      <video autoPlay muted loop playsInline={true} className='object-cover absolute h-full w-full '>
        <source src={videoSource} />
      </video>
      <Navbar />
      <img src={logo} alt="" className='absolute h-16 sm:h-24 md:h-40' />
      
    </div>
    <div className='bg-white w-full relative h-7 flex items-center justify-center  md:h-20'>
        <img src={tycan} alt="" className='absolute bottom-0 sm:h-36 w-96 h-[100px] sm:w-[80%] md:w-[70%] md:h-52 xl:w-[60%] xl:h-60 2xl:w-[60%] 2xl:h-64 '/>
      </div>
    
    </>
    
  )
}

export default HeroTwo
