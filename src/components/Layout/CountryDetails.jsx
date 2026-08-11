import axios from "axios";
import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import Wrapper from "../Wrapper";
import Loading from "../Ui/Loading";

import { FaArrowAltCircleLeft } from "react-icons/fa";

const CountryDetails = () => {
  const param = useParams();
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const countryApi = async () => {
    try {
      const res = await axios.get("https://countries.dev/region/Asia");
      setCountries(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    countryApi();
  }, []);

  const singleCountry = countries.find((item) => item.name === param.id);

  //    // যে country-তে click করেছি সেটা খুঁজে বের করা
  //   const country = countries.find(
  //     (item) => item.name === param.id
  //   );

  if (!singleCountry) return <Loading />;

  if (isPending) return <Loading />;
  return (
    <div className="py-5">
      <Wrapper>
        <div className=" flex items-center justify-center">
          <div className=" max-w-200  min-h-100 px-10 flex justify-center-safe items-center gap-20  rounded-md shadow-md bg-white/10  backdrop-blur-md ">
            {/* Flag */}
            <img
              src={singleCountry.flags.svg}
              alt=""
              className="object-cover h-50  object-center rounded-md  "
            />
            <div className="text-center flex flex-col p-10 text-white   gap-1 ">
              <span className="block text-center text-xl  font-medium tracking-widest uppercase dark:text-orange-600">
                {singleCountry.name}
              </span>
              <p className=" text-center font-semibold ">
                Borders : {singleCountry.borders}
              </p>
              <p className="">Latlng : {singleCountry.latlng}</p>
              <p className="">
                Currencies :{" "}
                {singleCountry.currencies.map((lan) => lan.name + "")}
              </p>
              <p className="">Subregion : {singleCountry.subregion}</p>
              <p className="">Timezones : {singleCountry.timezones}</p>
              <p className="mb-6">NativeName : {singleCountry.nativeName}</p>
              <p className="mb-6">NumericCod : {singleCountry.numericCode}</p>
              <div className="flex flex-col items-center justify-center"></div>
              <NavLink to="/country">
                <button
                  className=" btn w-30 h-8 bg-gray-800 text-amber-400 border-none 
                         hover:bg-blue-400 hover:text-white 
                         hover:scale-105 transition-all duration-300 "
                >
                  <FaArrowAltCircleLeft /> Back
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CountryDetails;
