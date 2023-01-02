import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data/DataContext";
import { fetchData } from "../../functions";
import "./destination.css";
import MoonImage from "../../assets/destination/image-moon.webp";

export const Destinations = () => {
  const [destinationsData, setDestinationsData] = useState(null);
  const [actualInfo, setActualInfo] = useState("Moon");

  useEffect(() => {
    fetchData(setDestinationsData, "destinations");
  }, []);

  return (
    <section className="page destination pt-24  lg:pt-52">
      {destinationsData && (
        <div className="flex flex-col  justify-center items-center lg:items-end  lg:flex-row  ">
          <div className="planet-container w-full flex flex-col items-center ">
            <h5 className="text-center mb-8 md:mb-20 md:self-start md:ml-12">
              <span className="number opacity-25 font-bold ">01</span> PICK YOUR
              STATION
            </h5>

            <img src={MoonImage} className="h-44 w-44 md:h-80 md:w-80" alt="" />
          </div>

          <div className="planet-info flex flex-col items-center mt-8">
            <div className="planet-links mx-auto text-sm md:text-base mb-4">
              <button className="font-secondary mx-6 ">MOON</button>
              <button className="font-secondary mx-6 ">MARS</button>
              <button className="font-secondary mx-6 ">EUROPA</button>
              <button className="font-secondary mx-6 ">TITAN</button>
            </div>
            <h2>{destinationsData[0].name.toUpperCase()}</h2>
            <p className="text-lilac text-[15px] md:text-base lg:text-lg max-w-sm p-4 md:px-12 md:max-w-3xl">
              {destinationsData[0].description}
            </p>
            <div className="travel-info flex justify-between w-full px-10 lg:px-12">
              <div className="distance ">
                <p className="subheading2 text-lilac">AVG. DISTANCE</p>
                <p className="subheading1">
                  {destinationsData[0].distance.toUpperCase()}
                </p>
              </div>
              <div className="travel-time">
                <p className="subheading2 text-lilac">EST. TRAVEL TIME</p>
                <p className="subheading1">
                  {destinationsData[0].travel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {destinationsData && console.log(destinationsData[0])}
    </section>
  );
};
