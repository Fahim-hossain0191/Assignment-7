import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Calls from "./Calls";

const Timeline = () => {
    const [filter, setFilter] = useState("all");
  const { timelines } = useContext(UserContext);
    const filteredTimelines =
      filter === "all"
    ? timelines
    : timelines.filter((item) => item.action === filter);
  return (
    <div className="w-9/12 mx-auto mt-20 space-y-3">
      <h2 className="text-3xl font-bold">Timeline</h2>
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter Timeline ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
            <li>
            <button onClick={() => setFilter("all")}>All</button>
          </li>
          <li>
             <button onClick={() => setFilter("call")}>Call</button>
          </li>
          <li>
            <button onClick={() => setFilter("text")}>Text</button>
          </li>
          <li>
            <button onClick={() => setFilter("video")}>Video</button>
          </li>
        </ul>
      </div>
       <div className="my-3">
        {filteredTimelines.map((user, index) => (
          <Calls user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
