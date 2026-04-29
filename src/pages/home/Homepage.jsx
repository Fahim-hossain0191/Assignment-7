import React, { Suspense } from "react";
import AllUsers from "../homepage/AllUsers";

const Homepage = () => {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-10 py-8 space-y-6">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
        Friends to keep close in your life
      </h1>

      {/* Description */}
      <p className="font-light text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Button */}
      <button className="bg-[#244D3F] px-6 py-3 text-white rounded-md hover:scale-105 duration-300">
        + Add a friend
      </button>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full lg:w-10/12 mx-auto pt-6">

        <div className="p-6 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl lg:text-3xl font-semibold">10</h2>
          <p className="font-light text-base lg:text-lg mt-2">
            Total Friends
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl lg:text-3xl font-semibold">3</h2>
          <p className="font-light text-base lg:text-lg mt-2">
            On Track
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl lg:text-3xl font-semibold">6</h2>
          <p className="font-light text-base lg:text-lg mt-2">
            Need Attention
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl lg:text-3xl font-semibold">12</h2>
          <p className="font-light text-base lg:text-lg mt-2">
            Interaction This Month
          </p>
        </div>

      </div>

      {/* Users Section */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="loading loading-spinner loading-xl text-success"></span>
          </div>
        }
      >
        <AllUsers />
      </Suspense>

    </div>
  );
};

export default Homepage;