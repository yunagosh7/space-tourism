import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <section className="home flex justify-between w-screen place-items-center h-screen bg-no-repeat bg-cover px-20">
      <article className="w-5/12">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className="text-lilac p-4">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <button className="btn-explore">
        EXPLORE
      </button>
    </section>
  );
};
