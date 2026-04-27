import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Image1 from "../../assets/call.png"
import Image2 from "../../assets/text.png"
import Image3 from "../../assets/video.png"
import { FaHandshakeSimple } from "react-icons/fa6";
const Calls = ({ user }) => {
  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded-xl bg-white px-4 py-3 mb-3 shadow-sm ">
      {/* {user.action === "call" && `📞 ${user.name}`}
      {user.action === "text" && `💬 ${user.name}`}
      {user.action === "video" && `🎥 ${user.name}`} */}

      <div>
              {user.action === "call" && <FaHandshakeSimple className="text-4xl text-amber-500"/>}
      {user.action === "text" && <img src={Image2}></img>}
      {user.action === "video" && <img src={Image3}></img>}
      </div>
      <div>
        <p>
             {user.action === "call" && (
    <>
      <span className="font-bold">Meetup</span> with {user.name}
    </>
  )}
    {user.action === "text" && (
    <>
      <span className="font-bold">Text</span> with {user.name}
    </>
  )}
      {user.action === "video" && (
    <>
      <span className="font-bold">Video</span> with {user.name}
    </>
  )}
        </p>
        <p>
            {new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
        </p>
      </div>
    </div>
  );
};

export default Calls;
