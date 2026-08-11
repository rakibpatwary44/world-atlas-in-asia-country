import React from "react";
import Wrapper from "../components/Wrapper";

const Contact = () => {
  const handelFromSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <Wrapper>
      <section className=" flex justify-center items-center w-full h-screen">
        <form
          action={handelFromSubmit}
          className="container5 h-fit w-lg p-10! rounded-md  "
        >
          <h2 className="w-full text-center text-3xl font-bold leading-tight">
            Contact us
          </h2>
          <div>
            <label htmlFor="name" className="text-xl ">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required=""
              className=" border w-full p-4  rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-orange-600 "
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xl 0">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required=""
              className="border  w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-orange-600 "
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Message..."
              className="border h-24 w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-orange-600 "
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-orange-600 focus:dark:ring-orange-600 hover:dark:ring-orange-600 "
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default Contact;
