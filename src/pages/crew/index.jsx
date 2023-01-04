import React, { useContext, useState } from "react";
import "./crew.css";
import DouglasImage from "../../assets/crew/image-douglas-hurley.webp";
import MarkImage from "../../assets/crew/image-mark-shuttleworth.webp";
import VictorImage from "../../assets/crew/image-victor-glover.webp";
import AnoushehImage from "../../assets/crew/image-anousheh-ansari.webp";
import { DataContext } from "../../context/data/DataContext";

export const Crew = () => {
  const { data } = useContext(DataContext);

  const [dataCrew, setDataCrew] = useState(data.crew);
  const [commander, setCommander] = useState(0);

  return (
    <section className="page lg:overflow-y-hidden md:h-auto lg:h-screen crew">
      <article className="pt-20 lg:h-full flex flex-col">
        <h5 className="text-center lg:pl-32 mb-8 md:mt-20 md:self-start md:pl-10 md:text-left">
          <span className="number opacity-25 font-bold ">02</span> MEET YOUR
          CREW
        </h5>
        <div className="text-center relative flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-full lg:justify-center items-center">
          <div className=" lg:h-full lg:pt-20 lg:w-5/12">
            <img
              src={`${
                commander == 0
                  ? DouglasImage
                  : commander == 1
                  ? MarkImage
                  : commander == 2
                  ? VictorImage
                  : AnoushehImage
              }`}
              className="h-56 mb-8 md:h-[33rem] md:mb-0 lg:h-full lg:w-full   "
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-col-reverse lg:w-5/12">
            <div className="selector-container  lg:mt-20">
              <button
                onClick={() => setCommander(0)}
                className={`w-3 h-3 rounded-full bg-white opacity-30 mx-4 lg:w-4 lg:h-4 ${
                  commander == 0 ? "active" : ""
                } `}
              ></button>
              <button
                onClick={() => setCommander(1)}
                className={`w-3 h-3 rounded-full bg-white opacity-30 mx-4 lg:w-4 lg:h-4 ${
                  commander == 1 ? "active" : ""
                } `}
              ></button>
              <button
                onClick={() => setCommander(2)}
                className={`w-3 h-3 rounded-full bg-white opacity-30 mx-4 lg:w-4 lg:h-4 ${
                  commander == 2 ? "active" : ""
                } `}
              ></button>
              <button
                onClick={() => setCommander(3)}
                className={`w-3 h-3 rounded-full bg-white opacity-30 mx-4 lg:w-4 lg:h-4 ${
                  commander == 3 ? "active" : ""
                } `}
              ></button>
            </div>
            <div className="commander-info mt-4">
              <h4 className="opacity-50">
                {dataCrew[commander].role.toUpperCase()}
              </h4>
              <h3>{dataCrew[commander].name.toUpperCase()}</h3>
              <p className="text-lilac  text-lg mx-4 md:mx-40 lg:mx-20">
                {dataCrew[commander].bio}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
