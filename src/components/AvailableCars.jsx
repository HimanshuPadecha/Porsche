import React from "react";
import Navbar from "../Navbar";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { url } from "../url";
import { Link, useLoaderData } from "react-router-dom";

function AvailableCars() {
  const cars = useLoaderData()
  console.log(cars);
  
  // const cars = [
  //   {
  //     title:"2025 Porche 911 Carrera (992 ||)",
  //     carStatus:"New",
  //     tags:["Petrol","White","red"],
  //     origin:"Porche showroom Mumbai",
  //     price:"₹2,40,49,800",
  //     images:[img1,img2,img3,img4]
  //   }
  // ]
  return (
    <>
      <div className="relative h-14">
        <Navbar mode={"dark"}/>
      </div>

      <div className="flex gap-1 justify-center flex-col p-8 text-change 2xl:w-[70%] 2xl:mx-auto">
        <h1 className="text-2xl font-medium Black">Porche Avaliable cars</h1>
        <span className="text-lg Black">New and used cars for sale.</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-5 2xl:w-[80%] 2xl:mx-auto pl-6">

        {
          cars.map((car,index)=>(<Link to={`/availables/${car._id}`}>
          <div className="h-[570px] md:h-[600px] flex flex-col lg:flex-row lg:h-[400px] w-[90%] 2xl:h-[350px] rounded-xl overflow-hidden hover:shadow-2xl transitio-all duration-150 cursor-pointer select-none mb-10">
            {/* photoes div */}
            <div className="h-[40%]  flex items-center justify-center lg:h-full rounded-lg 2xl:w-[90%] card " key={index}>
              <div className="w-[65%]  h-full">
                <img src={car.photoes[0]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-[35%] h-full flex items-center justify-center flex-col">
                <div className="h-[33%] w-full">
                  <img src={car.photoes[1]} alt="" className="h-full w-full object-cover"/>
                </div>
                <div className="h-[33%] w-full">
                  <img src={car.photoes[2]} alt="" className="h-full w-full object-cover"/>
                </div>
                <div className="h-[33%] w-full">
                  <img src={car.photoes[3]} alt="" className="h-full w-full object-cover"/>
                </div>
              </div>
            </div>
            {/* info div */}
            <div className="h-[60%] w-full text-change p-2 flex justify-around gap-3 lg:gap-0 flex-col px-5 lg:h-full">
              <h1 className="text-xl font-bold lg:text-2xl ">{car.title}</h1>
              <span>{car.carStatus} </span>
              <div className="flex justify-center flex-col">
              <span className="font-medium">{car.tags.map(tag=> (<span>{tag} .</span>))}</span>
              <span className="font-medium lg:text-xl">{car.origin}</span>
              </div>

              {/* this */}
              <span className="font-bold text-xl my-3 lg:my-0 lg:text-2xl">{car.price}</span>
              <div className="flex items-center justify-center flex-col w-full h-auto gap-4 md:flex-row lg:w-[70%]">
                <button className="bg-black text-white w-full h-13 rounded-sm">Show Details</button>
                <button className="w-full h-13  rounded-sm border Black flex items-center justify-center gap-2 font-medium border-black"> <CiBookmark /> Book</button>
              </div>
            </div>



            {/* this si  */}
          </div></Link>))
        }
        {/* car card */}
      



      </div>
    </>
  );
}

export default AvailableCars;

export const getCars = async()=>{
  try {
    const response = await axios.get(url+"/api/v1/car/get-all-cars",{withCredentials:true,timeout:5000})
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