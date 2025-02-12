import React, { useEffect, useRef } from 'react'
import img1 from "../assets/48FBF4AA4A48409C9D64368353E3F31E_B1060B452EDD49F892D74A7E741F7C44_TA25Q3QOX0001-taycan-gts-front.avif"
import img2 from "../assets/833C1ADBA9EE48A292BEC40DEA35C409_19FB8093404A4EAFBFE460C6AA8F3B5C_TA25Q3QOX0003-taycan-gts-driving-desktop.avif"
import img3 from "../assets/B9DA0ED31E254D219897AE87A13F196A_EA15E00E6C67456D8CF52ABA62CCBAA4_TA25Q3QOX0002-taycan-gts-rear.avif"
import Logo from './Logo'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function MultipleScroll() {
    const mainRef = useRef(null)
    const secondRef = useRef(null)

    useEffect(()=>{
        const main = mainRef.current
        

        gsap.fromTo(main,
            {
                width:"100%",
                borderRadius:"0px"
            },
            {
                width:"80%",
                borderRadius:"20px",
                scrollTrigger:{
                    trigger:main,
                    start:"top 50%",
                    end:"bottom top",
                    scrub:true
                }
            }
        )

        
    },[])

    useEffect(()=>{
        const second = secondRef.current
        gsap.fromTo(second,
            {
                y:200,
            },
            {
                y:0,
                scrollTrigger:{
                    trigger:second,
                    start:"top bottom",
                    end:"bottom top",
                    scrub:true,
                }
            }
        )
    },[])


  return (
    <>
    <Logo />
    <div className='grid grid-cols-1 h-screen w-full mx-auto relative place-items-center grid-rows-[1fr_0.5fr_1fr] sm:h-[1200px]  md:grid-cols-2 md:grid-rows-2 md:h-[1400px] lg:h-[1600px]'>
        <div className='absolute bg-black h-[75%] w-full top-36 z-[-1] md:h-[65%] md:top-80'>
        </div>
        <div className='w-[90%] h-full flex items-center justify-center md:col-span-2 lg:w-[80%]' ref={mainRef}>
            <img src={img1} alt="" className='rounded-2xl w-full object-cover h-[70%]' />
        </div>
        <div className='text-white w-[90%]  h-[70%] md:text-end text-change'>
            <h1 className='text-2xl font-bold mb-2 lg:text-4xl '>OverFeel.</h1>
            <span className='text-lg font-medium lg:text-xl'>
            The strong feeling of driving a unique electric sports car: the new Taycan GTS makes sportiness even stronger. Performance even bolder. And enthusiasm even greater.
            </span>
        </div>
        <div className='w-full relative h-[90%] '>
            <div className='absolute top-0 left-0 w-[60%] h-[60%] z-10 md:top-[400px] md:left-[-300px] md:w-[400px] md:h-[200px] md:z-0 lg:h-[300px] lg:w-[500px] lg:top-[350px]'ref={secondRef} >
                <img src={img2} alt="" className='w-full h-full object-cover rounded-2xl '/>
            </div>
            <div className='absolute w-[60%] h-[60%] bottom-0 right-0 md:top-0 md:left-0 md:w-[90%] md:h-[80%] lg:top-[-250px] lg:w-[90%] lg:h-[90%] 'ref={secondRef}>
                <img src={img3} alt="" className='w-full h-full object-cover rounded-2xl'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default MultipleScroll
