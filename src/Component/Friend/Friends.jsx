import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Single friend/Friend';
import "./Friends.css";

const Friends = () => {
    const friends= useLoaderData();
    // console.log(friends);
    return (
        <div className='co'>
            {
               friends.map(friend=><Friend key={friend.id} Friend={friend}></Friend>) 
            }
        </div>
    );
};

export default Friends;