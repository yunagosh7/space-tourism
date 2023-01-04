import React from "react";
import "./technology.css";
import vehicleMobile from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleDesktop from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleMobile from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsuleDesktop from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceportMobile from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceportDesktop from "../../assets/technology/image-spaceport-portrait.jpg";

export const Technology = () => {
  return (
    <section className="technology page">
      <div className="pt-24 ">
        <h5 className="text-center mb-8 md:mb-20 md:self-start md:ml-12">
          <span className="number opacity-25 font-bold ">03</span> SPACE LAUNCH
          101
        </h5>
        <article className="technology-content">
          <img src={vehicleDesktop} alt="Image" className="hidden lg:block" />
          <img src={vehicleMobile} alt="Image" className="w-screen lg:hidden" />
          <div className="buttons-container flex justify-center">
            <button  className="rounded-full mx-4 border bg-transparent px-8 py-6 my-8 active ">1</button>
            <button  className="rounded-full mx-4 border bg-transparent px-8 py-6 my-8 ">2</button>
            <button  className="rounded-full mx-4 border bg-transparent px-8 py-6 my-8 ">3</button>
          </div>
        </article>
      </div>
    </section>
  );
};
