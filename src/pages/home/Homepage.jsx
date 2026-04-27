import React from "react";
import AllUsers from "../homepage/AllUsers";

const Homepage = () => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-5xl font-bold mt-10">
        Friends to keep close in your life
      </h1>
      <p className="font-light">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br />
        relationships that matter most.
      </p>
      <button className="bg-[#244D3F] p-3 text-white rounded-md">
        + Add a friend
      </button>
      <AllUsers></AllUsers>
    </div>
  );
};

export default Homepage;
