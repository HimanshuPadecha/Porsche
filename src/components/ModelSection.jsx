import React from "react";
import model1 from "../assets/card1.avif";
import model2 from "../assets/model2.avif";
import model3 from "../assets/model3.avif";
import model4 from "../assets/model4.avif";
import model5 from "../assets/model5.avif";
import model6 from "../assets/model6.avif";
import logo1 from "../assets/porsche-718.svg";
import logo2 from "../assets/911.svg";
import logo3 from "../assets/Taycan.svg";
import logo4 from "../assets/panamera.svg";
import logo5 from "../assets/macan.svg";
import logo6 from "../assets/cay.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function ModelSection() {
  const modelRef = useRef([]);
  

  

  useEffect(() => {
    const newModel = modelRef.current;

    newModel.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          delay:5,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 50%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });
  }, []);
  const models = [
    {
      mainImg: model1,
      logo: logo1,
      heading:
        "The mid-engine sport car for two made for pure driving pleasure.",
      button: "Checkout Porche 718",
    },
    {
      mainImg: model2,
      logo: logo2,
      heading:
        "The iconic, rear-engine sports car with exceptional performance. ",
      button: "Checkout Porche 911",
    },
    {
      mainImg: model3,
      logo: logo3,
      heading:
        "The true expression of an electric sports car with motosport performance.",
      button: "Checkout Porche Taycan",
    },
    {
      mainImg: model4,
      logo: logo4,
      heading:
        "The sport car limousine for an active lifestyle with highest comfort.",
      button: "Checkout Porche Panamera ",
    },
    {
      mainImg: model5,
      logo: logo5,
      heading: "All-electronic SUV with impressive E-Performance.",
      button: "Checkout Porche Macan",
    },
    {
      mainImg: model6,
      logo: logo6,
      heading:
        "The versatile SUV with sports car performance and up to five seats.",
      button: "Checkout Porche cayenne",
    },
  ];
  return (
    <>
      <Heading children={"Models"}/>
      <div className="w-[90%] sm:w-[70%]  mx-auto grid grid-cols-1 lg:grid-cols-2  modelSelectionMaindiv gap-10 place-items-center  2xl:gap-16">
        {models.map((model, index) => (
         <Link to={"/availables"}>
          <div
            className="flex items-center justify-end flex-col w-full h-[500px] lg:h-[800px] rounded-3xl relative overflow-hidden modelSelectionCardZoom cursor-pointer 2xl:h-[700px]"
            key={index}
            ref={(el) => (modelRef.current[index] = el)}
          >
            <img
              src={model.mainImg}
              alt=""
              className="object-cover absolute top-0 left-0 modelSelectionMainImg w-full h-full"
            />
            <div className="absolute z-10 lg:top-10 lg:left-10 top-5 left-5 w-36 ">
              <img
                src={model.logo}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <span className="z-20 text-white lg:text-4xl text-3xl mx-7 White font-semibold 2xl:text-3xl 2xl:my-5">
              {model.heading}
            </span>
            <button className="z-20 bg-White rounded-2xl my-5 w-[90%] h-16 text-xl lg:text-2xl font-light 2xl:text-2xl">
              {model.button}
            </button>
          </div>
         </Link>
        ))}
      </div>
    </>
  );
}

export default ModelSection;
