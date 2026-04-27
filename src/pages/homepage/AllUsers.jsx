import React, { use } from 'react';
import UserCard from '../../component/ui/UserCard';

const userPromise=fetch('/usersData.json').then((res)=>res.json());
const AllUsers = () => {
    console.log("hudai")
    const users=use(userPromise);
    console.log(users);
    return (
        <div className='grid grid-cols-3 w-9/12 gap-20 mx-auto space-y-3'>
            {
                users.map((user,index)=>
                <UserCard user={user} key={index}></UserCard>
                )
            }
        </div>
    );
};

export default AllUsers;