import React from 'react';
import { Link } from 'react-router';

//  {
//     "id": 5,
//     "name": "David Miller",
//     "picture": "https://randomuser.me/api/portraits/men/67.jpg",
//     "email": "david.miller@example.com",
//     "days_since_contact": 20,
//     "status": "overdue",
//     "tags": ["neighbor", "football"],
//     "bio": "Old neighbor and football match partner.",
//     "goal": 15,
//     "next_due_date": "2026-04-22"
//   }
const UserCard = ({user}) => {
    return (
       <Link className="card bg-base-100 w-auto shadow-sm items-center space-y-2 ">
  <figure>
    <img
      src={user.picture}
      alt="Shoes" className='rounded-full mt-3' />
  </figure>

    <h2 className="card-title">{user.name}</h2>
      <span className='pb-2'>{user.days_since_contact}d ago</span>
      <div >
                  {
        user.tags.map((tag,index)=><span className='ml-2 bg-[#CBFADB] p-2 rounded-full font-semibold'  key={index}>{tag}</span>)
      }
      </div>
    
      <span className={`my-2 font-semibold rounded-full py-1 px-2 ${user.status==='overdue'?"bg-amber-400 text-white":user.status==='due soon'?"bg-purple-500 text-white":user.status==="on track"?"bg-green-500 text-white":""}`}>{user.status}</span>
   
 
</Link>
    );
};

export default UserCard;