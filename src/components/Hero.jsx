import React from "react";
import Navbar from "../Navbar";
import video from "../assets/main.mp4";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const newRef = heroRef.current;

    gsap.fromTo(
      newRef,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);
  return (
    <>
      <Link to={'/tycan'}>
        <div className="w-full h-screen overflow-hidden flex justify-center relative items-center mx-auto hero cursor-pointer">
          <div className="absolute w-full h-full opacity-40 bg-black z-10"></div>
          <Navbar />
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
            playsInline={true}
          >
            {" "}
            <source src={video} />
          </video>

          <div
            ref={heroRef}
            className="text-white bottom-30 flex flex-col absolute w-4/5 z-20 gap-3"
          >
            <span className="overfeel text-5xl my-4 sm:text-[80px] sm:tracking-[8px]">
              Overfeel.
            </span>
            <button className="border h-16 border-white w-full sm:w-72 rounded-2xl text-lg cursor-pointer ">
              Discover the new 911 GT3 RS
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Hero;
