import React, { useEffect, useRef, useState } from "react";
import stearingWheel from "../assets/5AA51B9075434747992E33361FABB93D_4280DBDF17BC4E989910C2B49FD2AE07_steering-wheel.avif";
import speedometer from "../assets/4799B6BAA2BB4E9380892696DFDCAB60_CCFF75B348604BC58F9315D29F6297C0_dashboard.avif";
import { MdPlayArrow } from "react-icons/md";
import carSound from "../assets/porsche-taycan-turbo-s-enginesound.mp3";
import carSoundVideo from "../assets/carsound.mp4";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function AudioComponent() {
  const audioRef = useRef(new Audio(carSound));
  const [isHolding, setIsHolding] = useState(false);
  const videoRef = useRef(null);
  let [speed, setSpeed] = useState(0);
  const speedInterval = useRef(null);
  const speedTime = 15000;
  const stearRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(()=>{
    const stear = stearRef.current
    const button = buttonRef.current

    gsap.fromTo(stear,
      {
        y:200,
      },
      {
        y:0,
        scrollTrigger:{
          trigger:stear,
          start:"top bottom",
          end:"bottom bottom",
          scrub:true
        }
      }
    )

    // gsap.fromTo(button,
    //   {
    //     opacity:0
    //   },
    //   {
    //     opacity:1,
    //     scrollTrigger:{
    //       trigger:stear,
    //       start:"top bottom ",
    //       end:"bottom bottom",
    //       scrub:true
    //     }
    //   }
    // )
  },[])

  useEffect(() => {
    if (isHolding && videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.error("Playback error:", err));
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHolding]);

  const handleMouseDown = () => {
    audioRef.current.currentTime = 0;
    console.log(audioRef.current);
    setIsHolding(true);
    audioRef.current.play();

    let startTime = Date.now();
    
    speedInterval.current = setInterval(() => {
      let elapsed = Date.now() - startTime;
      if (elapsed < speedTime) {
        setSpeed(Math.round((elapsed / speedTime) * 200));
      } else if (elapsed < speedTime * 2) {
        setSpeed(Math.round(200 - ((elapsed - speedTime) / speedTime) * 200)); 
      } else {
        startTime = Date.now(); 
      }
    }, 100);
  };

  const handleMouseUp = () => {
    audioRef.current.pause();
    setIsHolding(false);
    audioRef.current.currentTime = 0;
    clearInterval(speedInterval.current);
    setSpeed(0);
  };
  return (
    <>
      <div className=" rounded-2xl relative bg-gradient-to-t from-black via-black/97 to-black/95 w-[80%] h-[600px] mb-10 mx-auto flex items-center justify-center text-change select-none overflow-hidden">
        <div className="absolute top-[10%] flex items-center justify-center z-10 White flex-col gap-4 font-medium px-4">
          <h1 className="md:text-4xl font-bold">
            Setting the tone. In terms of sound,too.
          </h1>
          <span className="text-sm md:text-2xl">
            The thrill of the GTS always resonates: particularly distintive
            Porche Electric Sport Sound.
          </span>
        </div>

        <div className="w-full h-[90%] bottom-0 absolute">
          <img
            src={stearingWheel}
            alt=""
            className=" object-cover w-full h-full "
            ref={stearRef}
          />
        </div>

        <img src={speedometer} alt="" className="w-[70%]  md:object-cover  " />
        <div className="absolute top-[50%] z-10 White flex items-center justify-center flex-col gap-1 opacity-50">
          <h3 className="text-2xl">{speed}</h3>
          <span>km/h</span>
        </div>
        <div className="absolute w-full flex items-center justify-center z-10 bottom-[10%] ">
          <button
            className={`w-44 rounded-lg ${
              isHolding ? "bg-Black w-52" : ""
            } h-12 bg-White Black gap-2 flex items-center justify-center transition-all duration-500 relative ease-in-out`}
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() => handleMouseUp()}
            onMouseLeave={handleMouseUp}
            ref={buttonRef}
          >
            <video
              ref={videoRef}
              className={`w-full h-full object-cover rounded-lg ${
                isHolding ? "block" : "hidden"
              }`}
            >
              <source src={carSoundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isHolding && (
              <>
                <span className={`flex gap-2 items-center`}>
                  <MdPlayArrow /> Hold for Sound
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default AudioComponent;
