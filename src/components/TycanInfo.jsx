import React from "react";

function TycanInfo() {
  return (
    <>
      <div className="w-full fontCon">
        <div className="w-full flex items-center justify-center gap-3 font-extralight my-2 lg:my-7">
            <span>Sport Saloon</span>
            <span>Sport Turimo</span>
            <span>Gross Turimo</span>
        </div>
        <h1 className="text-center text-3xl my-5 lg:text-4xl lg:my-7">Taycan GTS</h1>
        <h1 className="text-center  mb-3 ">Electro </h1>
        <div className="flex w-full items-center justify-center flex-col gap-2 my-4 lg:flex-row">
            <button className="w-[90%] bg-Black rounded-xl h-14 White lg:w-40">Change Model</button>
            <button className="w-[90%] bg-White rounded-xl h-14 Black border lg:w-40 ">Configure</button>
        </div>
        <h2 className="text-center carInfo font-light my-5">Electrical consumption combined (WLTP)*: 20.7 – 18.1 kWh/100 km, CO2-emissions combined (WLTP)*: 0 g/km, CO2 Class: A</h2>
      </div>
    </>
  );
}

export default TycanInfo;
