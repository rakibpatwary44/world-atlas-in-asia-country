import React from "react";
import Wrapper from "./../components/Wrapper";
import world from "../assets/pngegg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <main className=" h-100 space-y-4 grid grid-cols-2 items-center justify-center ">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold ">
            Explore The <span className="font-bold text-red-500"> World</span>,
            One <br /> Country at a time
          </h1>
          <p className="text-xl font-medium  ">
            Discover the history. culture, and beauty of every nation, Sort.
            search. and filter through countries to find the details you need
          </p>
          <NavLink to="/country">
            <button className="btn text-lg  rounded-2xl border-2 border-amber-400 bg-transparent  w-50 h-10  mt-10 hover:bg-amber-300 hover:text-black hover:border-red-400 ">
              Start Exploring <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
        <div>
          <img src={world} alt="" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Home;
