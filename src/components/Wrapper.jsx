import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
