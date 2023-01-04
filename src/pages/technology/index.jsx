import React from "react";
import "./technology.css";
import vehicleMobile from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleDesktop from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleMobile from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsuleDesktop from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceportMobile from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceportDesktop from "../../assets/technology/image-spaceport-portrait.jpg";
import { useContext } from "react";
import { DataContext } from "../../context/data/DataContext";
import { useState } from "react";

export const Technology = () => {
  const { data } = useContext(DataContext);
  const [technologyData, setTechnologyData] = useState(data.technology);
  const [actualNumber, setActualNumber] = useState(0);

  return (
    <section className="technology page">
      <div className="pt-24">
        <h5 className="text-center mb-8 md:mb-12 md:mt-6 md:self-start md:ml-12 md:text-left lg:mt-20">
          <span className="number opacity-25 font-bold ">03</span> SPACE LAUNCH
          101
        </h5>
        <article className="technology-content flex flex-col lg:flex-row-reverse">
          <img
            src={
              actualNumber == 0
                ? vehicleDesktop
                : actualNumber == 1
                ? spaceportDesktop
                : capsuleDesktop
            }
            alt="Image"
            className="hidden lg:block"
          />
          <img
            src={
              actualNumber == 0
                ? vehicleMobile
                : actualNumber == 1
                ? spaceportMobile
                : capsuleMobile
            }
            alt="Image"
            className="w-screen lg:hidden"
          />
          <div className="lg:flex lg:flex-row lg:items-start ">
            <div className="buttons-container flex lg:flex-col justify-center">
              <button
                onClick={() => setActualNumber(0)}
                className={`rounded-full mx-4 border bg-transparent px-8 py-6 my-8 ${
                  actualNumber == 0 ? "active" : ""
                } `}
              >
                1
              </button>
              <button
                onClick={() => setActualNumber(1)}
                className={`rounded-full mx-4 border bg-transparent px-8 py-6 my-8 ${
                  actualNumber == 1 ? "active" : ""
                } `}
              >
                2
              </button>
              <button
                onClick={() => setActualNumber(2)}
                className={`rounded-full mx-4 border bg-transparent px-8 py-6 my-8 ${
                  actualNumber == 2 ? "active" : ""
                } `}
              >
                3
              </button>
            </div>
            <div className="technology-info text-center  lg:text-left lg:px-8 ">
              <h5 className="my-3">THE TERMILOGY...</h5>
              <h3 className="my-3">
                {technologyData[actualNumber].name.toUpperCase()}
              </h3>
              <p className="text-lilac px-6 lg:px-0">
                {technologyData[actualNumber].description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
