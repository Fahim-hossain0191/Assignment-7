import React, { use, useContext } from 'react';
import {useParams } from 'react-router';
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareText } from "react-icons/lu";
import { MdOutlineVideocam } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { UserContext } from '../../context/UserContext';

const userPromise=fetch('/usersData.json').then((res)=>res.json())

const UserDetails = () => {
    const {id}=useParams();
    console.log("Id",id);
    const users=use(userPromise);
    console.log(users)
    const expectedUser=users.find((user)=>user.id===Number(id));
    console.log(expectedUser)
    // "id": 1,
    // "name": "John Doe",
    // "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    // "email": "john.doe@example.com",
    // "days_since_contact": 12,
    // "status": "overdue",
    // "tags": ["college", "close friend"],
    // "bio": "Met in university. Love hiking together.",
    // "goal": 14,
    // "next_due_date": "2026-05-01"
    const {picture,name,status,tags,bio,days_since_contact,goal,email,next_due_date}=expectedUser;

  const {handleCalls,handleText,handleVideo}=useContext(UserContext);

    return (
      <div className="bg-gray-200  p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
     
        <div className="space-y-4">
       
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src={picture}
              alt={name}
              className="w-16 h-16 rounded-full mx-auto"
            />

            <h2 className="text-xl font-bold mt-3">{name}</h2>

            <div >
              <span
                className={`px-3 py-1 rounded-full text-xs text-white ${
                  status === "overdue"
                    ? "bg-amber-400"
                    : status === "on track"
                    ? "bg-green-800"
                    : "bg-red-700"
                }`}
              >
                {status}
              </span>
             <div className='mt-1'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs"
                >
                  {tag}
                </span>
              ))}

             </div>
            </div>

            <p className="italic text-gray-500 mt-4">"{bio}"</p>

            <p className="text-sm text-gray-400 mt-2">{email}</p>
          </div>

      
          <button className="btn w-full bg-white border-0 shadow">
          <RiNotificationSnoozeLine  className='text-xl'/>  Snooze 2 Weeks
          </button>

          <button className="btn w-full bg-white border-0 shadow">
            <LuArchive  className='text-xl'/>
           Archive
          </button>

          <button className="btn w-full bg-white border-0 shadow text-red-500">
           <RiDeleteBinLine className='text-xl text-red-500'/>
            Delete
          </button>
        </div>

     
        <div className="lg:col-span-2 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-4xl font-bold text-[#244D3F]">
                {days_since_contact}
              </h2>
              <p className="text-gray-500 mt-2">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-4xl font-bold text-[#244D3F]">{goal}</h2>
              <p className="text-gray-500 mt-2">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-2xl font-bold text-[#244D3F]">
                {next_due_date}
              </h2>
              <p className="text-gray-500 mt-2">Next Due</p>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow p-6 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">Relationship Goal</h2>
              <p className="text-gray-500 mt-3">
                Connect every <span className="font-bold">{goal} days</span>
              </p>
            </div>

            <button className="btn btn-sm">Edit</button>
          </div>

       
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-5">Quick Check-In</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn h-24 bg-gray-100 border-0 flex-col">
                <FiPhoneCall  className='text-3xl' onClick={()=>handleCalls(expectedUser)}/>
                Call
              </button>

              <button className="btn h-24 bg-gray-100 border-0 flex-col">
                <LuMessageSquareText className='text-3xl'
                onClick={()=>handleText(expectedUser)}
                />
                Text
              </button>

              <button className="btn h-24 bg-gray-100 border-0 flex-col">
                <MdOutlineVideocam className='text-4xl'
                onClick={()=>handleVideo(expectedUser)}
                />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UserDetails;