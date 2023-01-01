import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <section className="home">
    <div className="home-content lg:flex lg:flex-row lg:p-20">
      <article className="mt-20 flex flex-col items-center lg:w-3/6  ">
        <h5 className="text-lilac">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className="">SPACE</h1>
        <p className="text-lilac px-4 md:w-3/6 lg:w-full ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <button className="btn-explore ">
        EXPLORE
      </button>
    </div>
    </section>
  );
};
