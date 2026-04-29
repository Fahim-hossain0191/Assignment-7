import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { UserContext } from "../../context/UserContext";

const Stats = () => {
  const { timelines } = useContext(UserContext);

  const textCount = timelines.filter(
    item => item.action === "text"
  ).length;

  const callCount = timelines.filter(
    item => item.action === "call"
  ).length;

  const videoCount = timelines.filter(
    item => item.action === "video"
  ).length;

  const data = [
    { name: "Text", value: textCount, fill: "#7C3AED" },
    { name: "Call", value: callCount, fill: "#134E4A" },
    { name: "Video", value: videoCount, fill: "#22C55E" },
  ];

  return (
    <div className=" my-10">
      <div >
              <h2 className="ml-57 text-3xl font-bold mb-4">Friendship Analytics</h2>
      </div>
      
      <div className="w-8/12 mx-auto  shadow-lg">
      <div >
      <h2 className="m-2 text-xl font-medium">By Interaction Type</h2>

      </div>
      <div className="flex justify-center">

      <PieChart width={500} height={400}>
        <Pie
          data={data}
          innerRadius={90}
          outerRadius={130}
          cornerRadius={10}
          paddingAngle={5}
          dataKey="value"
        />

        <Legend />
        <Tooltip />
      </PieChart>
      </div>

      </div>
    </div>
  );
};

export default Stats;