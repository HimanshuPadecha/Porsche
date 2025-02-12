import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import img2 from "../assets/361390.jpg";
import img3 from "../assets/624775.jpg";
import img1 from "../assets/c4b31d1f1e2631d4c89a28318d3c1046.jpg";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import image1 from "../assets/image1.avif"
import image2 from "../assets/image2.avif"
import image3 from "../assets/image3.avif"

gsap.registerPlugin(ScrollTrigger)

function SmallHeroTwo({sectionValue}) {
  const sections = useRef([]);
  const [finalArray,setFinalArray] = useState([])
  const items = [
    {
      image: img1,
      text: "The 718 Cayman GTS 4.0.",
    },
    {
      image: img2,
      text: "The Cayman E-Hybrid Coupe",
    },
    {
      image: img3,
      text: "The new 911 Carrera S.",
    },
  ];
  const itemsTwo = [
    {
      image: image1,
      text: "Porche E-Performance",
    },
    {
      image: image2,
      text: "Porche Tequipmet",
    },
    {
      image: image3,
      text: "Porche Exclusive Manufakur",
    },
  ];

  useEffect(()=>{
    if(sectionValue){
      setFinalArray(items)
    }
    else{
      setFinalArray(itemsTwo)
    }
  },[])

  useEffect(() => {
    // console.log(sections.current);

    const newRef = sections.current;
    console.log(newRef);

    newRef.forEach((newref) => {
      gsap.fromTo(
        newref,
        {
          opacity: 0,
          y: 90,
        },
        {
            opacity:1,
            y:0,
            duration:2,
            ease:"power3.out",
            scrollTrigger:{
                trigger:newref,
                start:"top 90%",
                end:"bottom 80%",
                scrub:true,
            }
        }
      );
    });
  }, []);

  return (
    <>
    <div className=" xl:h-56 h-full bg-white grid grid-cols-1 xl:grid-cols-3  gap-5  smallHero relative w-full 2xl:w-[80%]  xl:mx-auto my-10 xl:my-[90px] place-items-center xl:w-[80%]">
      {finalArray.map((item, index) => (
        <div
          key={index}
          ref={(el) => (sections.current[index] = el)}
          className="h-72 w-96  relative cursor-pointer smallHerodiv mx-auto 2xl:w-[90%] 2xl:h-full 2xl:gap-10"
        >
          <img
            src={item.image}
            alt=""
            className="h-full w-full rounded-xl object-cover smallHeroImg"
          />
          <div className="absolute bottom-4  h-10 w-full flex items-center justify-around textMod">
            <span>{item.text}</span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      ))}
      
    </div>
    </>
    
  );
}

export default SmallHeroTwo;
