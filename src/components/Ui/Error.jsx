import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <>
      <h1>Oops! An error occurred ❌</h1>

      {error && <p>{error.data}</p>}
      <div className=" ">
        <NavLink to="/">
          <button className="btn btn-outline btn-primary py-3! px-5! ml-10! mt-10!">
            Back To Home
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
