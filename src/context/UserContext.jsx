import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const UserContext=createContext();
const UserContextProvider = ({children}) => {
    const [storedCalls,setStoredCalls]=useState(false);
    const [storedText,setStoredText]=useState(false);
    const [storedVideo,setStoredVideo]=useState(false);
    const [timelines,setTimelines]=useState([]);

   const handleCalls = (expectedUser) => {
  const isExist = timelines.find(
    (user) => user.id === expectedUser.id && user.action === "call"
  );

  if (isExist) {
    toast.error("Call already done");
    return;
  }

  setTimelines([
    ...timelines,
    { ...expectedUser, action: "call" }
  ]);

  toast.success("Call is happening");
};

    const handleText = (expectedUser) => {
  const isExist = timelines.find(
    (user) => user.id === expectedUser.id && user.action === "text"
  );

  if (isExist) {
    toast.error("Text already done");
    return;
  }

  setTimelines([
    ...timelines,
    { ...expectedUser, action: "text" }
  ]);

  toast.success("Text is happening");
};

const handleVideo = (expectedUser) => {
  const isExist = timelines.find(
    (user) => user.id === expectedUser.id && user.action === "video"
  );

  if (isExist) {
    toast.error("Video already done");
    return;
  }

  setTimelines([
    ...timelines,
    { ...expectedUser, action: "video" }
  ]);

  toast.success("Video is happening");
};

    const data={
        storedCalls,
        setStoredCalls,
        storedText,
        setStoredText,
        storedVideo,
        setStoredVideo,
        handleCalls,
        handleText,
        handleVideo,
        timelines,
        setTimelines
    }
    return (
       <UserContext.Provider value={data}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;