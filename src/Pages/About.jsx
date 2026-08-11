import React from "react";
import Wrapper from "../components/Wrapper";
import countryFacts from "../Api/CountryDeatails.json";

const About = () => {
  return (
    <Wrapper>
      <section className="py-10 ">
        <div className="text-center flex  h-30 justify-center items-center   ">
          <h2 className="text-3xl font-bold  ">
            Here are the Interesting Fact <br /> We're{" "}
            <span className="font-bold text-amber-500">proud</span> of
          </h2>
        </div>

        <div className="  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10  ">
          {countryFacts.map(
            ({ id, countryName, capital, population, interestingFact }) => (
              <div
                key={id}
                className="card p-5! bg-white/10 backdrop-blur-md w-96 hover:bg-black/20 hover:transition-colors   transition-all
  duration-300  hover:scale-105  "
              >
                <p className="text-2xl font-bold text-amber-500">
                  {countryName}
                </p>
                <p>Capital : {capital}</p>
                <p>Population : {population} </p>
                <p>Interesting Fact : {interestingFact} </p>
              </div>
            ),
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
