import React from "react";
import img from "../assets/9C61A45A206D4771A5D102B9EBF6901A_B6BBE6A8849D4CBB8E769000E6147B10_TA25Q3QIX0011-taycan-gts-front.avif";
function Stats() {
  return (
    <>
      <div className="h-screen w-[90%] mx-auto bg-white flex items-center justify-center flex-col gap-10 fontCon md:flex-row ">
        <div className="relative flex items-center justify-center w-full">
        <img src={img} alt="" className="w-[80%] md:w-full object-cover  md:h-[50%] h-full " />
        </div>
        <div className="w-full">
         <div className="my-5">
         <h1 className="text-center lg:text-start ">
            <span className="text-3xl lg:text-6xl">3.3</span>s
          </h1>
          <h3 className="text-center lg:text-start stats">
            Acceleration 0 - 100 km/h with Launch Control
          </h3>
         </div>
          <div className="my-5 lg:my-10">
          <h1 className="text-center lg:text-start">
            <span className="text-3xl lg:text-6xl">515</span>kW / <span className="text-3xl lg:text-6xl">700 </span> ps
          </h1>
          <h2 className="stats text-center lg:text-start">
          Overboost Power with Launch Control up to (kW)/Overboost Power with Launch Control up to (PS)
          </h2>
          <h2 className="stats text-center lg:text-start">
          Details of the measuring method can be found at www.porsche.com/gtr21
          </h2>
          </div>
          <div className="my-5 flex items-center justify-around gap-0.5 flex-col lg:items-baseline ">
          <h1 className="text-center">
            <span className="text-3xl lg:text-6xl">250 </span>km/h
          </h1>
          <h3 className="stats text-center lg:text-start">Top Speed</h3>
          <button className="my-10 w-[90%] border h-14">View all technical details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
