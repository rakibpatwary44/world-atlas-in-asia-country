import axios from "axios";
import React, { useEffect, useState, useTransition } from "react";
import Wrapper from "../components/Wrapper";
import Loading from "../components/Ui/Loading";
import { NavLink } from "react-router-dom";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const countryApi = async () => {
    try {
      const res = await axios.get("https://countries.dev/region/Asia");
      setCountries(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    countryApi();
  }, []);

  if (isPending) return <Loading />;
  return (
    <div className="py-10">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  ">
          {countries.map((country) => (
            <div
              key={country.name}
              className="max-w-200  min-h-fit  flex flex-col rounded-md shadow-md bg-white/10  backdrop-blur-md hover:bg-black/20
              hover:transition-colors transition-all duration-300
              hover:scale-105 "
            >
              {/* Flag */}
              <img
                src={country.flags.svg}
                alt=""
                className="object-cover  p-7! object-center w-full rounded-md h-50 "
              />

              <div className="">
                <span className="block text-center text-xl  font-medium tracking-widest uppercase dark:text-orange-600">
                  {country.name}
                </span>
                <p className=" text-center font-semibold ">
                  Area : {country.area}
                </p>
              </div>
              <div className="text-center flex flex-col p-5 text-white gap-1 ">
                <p className="">Capital : {country.capital}</p>
                <p className="">
                  Languages : {country.languages.map((lan) => lan.name + "")}
                </p>
                <p className="">Subregion : {country.subregion}</p>
                <p className="">Population : {country.population}</p>
                <p className="mb-6">Demonym : {country.demonym}</p>
                <div className="flex flex-col items-center justify-center">
                  <NavLink to={`/countryDetails/${country.name}`}>
                    <button
                      className=" btn w-30 h-8 bg-gray-800 text-amber-400 border-none 
             hover:bg-blue-400 hover:text-white 
             hover:scale-105 transition-all duration-300 "
                    >
                      More Update
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Country;
