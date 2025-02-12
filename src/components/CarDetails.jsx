import React from "react";
import Navbar from "../Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import img1 from "../assets/960.avif";
import img2 from "../assets/phototwo.avif";
import img3 from "../assets/photothree.avif";
import img4 from "../assets/photofour.avif";
import img5 from "../assets/photofive.avif";
import { CiBookmark } from "react-icons/ci";
import { GiSteeringWheel } from "react-icons/gi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../url";

function CarDetails() {
  // const ExteriorInteriorInfo = [
  //  {
  //   heading:"Exterior color",
  //   value:"White"
  //  },
  //  {
  //   heading:"Interior color",
  //   value:"Black and Boreaux red"
  //  }
  // ];
  const data = useLoaderData()
  console.log(data);
  

  return (
    <>
      <div className="relative h-14">
        <Navbar mode={"dark"} />
      </div>

      <Link to={"/availables"}>
        <div className="px-7 h-auto my-10 text-change">
          <h1 className="flex items-center gap-3 text-sm text-gray-700 ">
            <IoMdArrowRoundBack />
            To Search Results
          </h1>
        </div>
      </Link>

      {/* images section */}
      <div className=" h-96 flex flex-col md:flex-row md:h-80 lg:h-96 xl:h-[450px] overflow-hidden transition-all duration-300 card">
        <div className="w-full h-[80%] md:w-[50%] md:h-full ">
          <img src={data.photoes[0]} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-full h-[20%] flex items-center justify-center md:w-[50%] md:h-full md:flex-col">
          {/* second div rapper one */}
          <div className="w-[50%] h-full flex md:h-[50%] md:w-full">
            <div className="h-full w-[50%] flex items-center justify-center ">
              <img src={data.photoes[1]} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-full w-[50%] flex items-center justify-center">
              <img src={data.photoes[2]} alt="" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* second div rapper two */}
          <div className="w-[50%] h-full flex md:h-[50%] md:w-full">
            <div className="h-full w-[50%] flex items-center justify-center">
              <img src={data.photoes[3]} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-full w-[50%] flex items-center justify-center">
              <img src={data.photoes[4]} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* title section */}

      <div className="w-full h-auto flex gap-2 justify-center flex-col px-5 my-5 text-change text-gray-800 select-none">
        <h1 className="text-xl font-medium lg:text-4xl lg:font-bold">
          {data.title}
        </h1>
        <span>{data.carStatus}</span>
      </div>

      {/* carinfo card */}
      <div className="w-[80%] h-auto mx-auto border border-black flex  justify-center flex-col rounded-xl gap-4 p-5 lg:w-96 relative lg:absolute lg:right-14 my-10 text-change select-none">
        <span className="text-2xl font-medium">{data.price}</span>
        <button className="bg-black text-white w-full h-13 rounded-sm font-medium">
          Book
        </button>
        <button className="w-full h-13  rounded-sm border Black flex items-center justify-center gap-2 font-medium border-black">
          {" "}
          <CiBookmark /> save
        </button>
        <span className="font-medium">{data.origin}</span>

        <p className="font-light">
          {" "}
          Plot No. D-20/7, Behind Essdee Paints, TTC Industrial Area, Turbhe
          MIDC <br /> Navi Mumbai
        </p>
      </div>

      {/* exterior interior info card */}

      <div className=" text-change  flex flex-col md:flex-row select-none">
        <div className="w-full h-96 flex items-center justify-center flex-col gap-1.5 lg:w-[450px] lg:gap-4">
          
          <InteriorExteriorDiv heading={"Interior color"} value={data.interiorColor.name} hex={data.interiorColor.hex}></InteriorExteriorDiv>
          <InteriorExteriorDiv heading={"Exterior color"} value={data.exteriorColor.name} hex={data.exteriorColor.hex}></InteriorExteriorDiv>

          <TrasmissionDiv
            heading={"Trasmission"}
            value={"PDK (automatic)"}
            innerElement={TbAutomaticGearbox}
          />

          <TrasmissionDiv
            heading={"Drive position"}
            value={"Right hand"}
            innerElement={GiSteeringWheel}
          />
        </div>

        <div className="h-60 w-full  flex items-center justify-center my-10 flex-col">
          <Stats parameter={"Damage History"} value={"No accidents Met"} />
          <Stats parameter={"Engine"} value={"Petrol"} />
          <Stats parameter={"Acclelaration 0-100"} value={data.acceleration} />
          <Stats parameter={"Top speed"} value={data.topSpeed} />
        </div>
      </div>
    </>
  );
}

export default CarDetails;

function Stats({ parameter, value }) {
  return (
    <>
      <div className="h-[20%] w-full px-9 flex my-3 justify-center flex-col relative">
        <span className="font-extralight">{parameter}</span>
        <span className="font-medium">{value}</span>
        {/* <div className="absolute bottom-0 bg-sep h-[1px] w-[95%] right-0"></div> */}
      </div>
    </>
  );
}

function TrasmissionDiv({ heading, value, innerElement: InnerElement }) {
  return (
    <>
      <div className="h-[20%] w-full px-5 flex justify-start gap-4 items-center relative">
        <div className="h-[90%] background w-16 rounded-lg flex items-center justify-center White lg:h-[70%] lg:w-20">
          {" "}
          <InnerElement className="w-full h-6 " />
        </div>
        <div className="flex justify-center flex-col">
          <span className="font-extralight">{heading} </span>
          <span className="font-medium">{value}</span>
        </div>
        <div className="absolute bottom-0 bg-sep h-[1px] w-[95%] right-0"></div>
      </div>
    </>
  );
}

function InteriorExteriorDiv({ heading, value, hex }) {
  return (<>
  <div className="h-[20%] w-full px-5 flex justify-start gap-4 items-center relative">
            <div className={`h-[90%]  w-16 rounded-lg flex items-center justify-center White lg:h-[70%] lg:w-20`} style={{backgroundColor:`${hex}`}}>
              {" "}
            </div>
            <div className="flex justify-center flex-col">
              <span className="font-extralight">{heading} </span>
              <span className="font-medium">{value}</span>
            </div>
            <div className="absolute bottom-0 bg-sep h-[1px] w-[95%] right-0"></div>
          </div>
  </>);
}



export const getCarInfo = async ({params}) =>{
  const id = params.id
 try {
   const response = await axios.get(url+"/api/v1/car/get-car/"+id,{withCredentials:true})
   if(response){
     return response.data.data
   }  
 } catch (error) {
  if (error.response && error.response.data) {
    // Display server error message
    console.log(error.response.data);
  } else if (error.code == "ECONNABORTED") {
    console.log("Request timed out ! please try again ");
  } else {
    // Fallback to generic error message if no response data
    console.log(error.message || "An unexpected error occurred.");
  }
 }
}