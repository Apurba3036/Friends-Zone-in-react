import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const data=useLoaderData();
    const {name,phone,website,address}= data;
    const navigate=useNavigate();
    const handleback=()=>{
        navigate(-1);
    }
  
    return (
        <div className='dibba'>
             <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Address : {address.city},{address.street}</p>
            <button onClick={handleback}>Go back</button>
        </div>
    );
};

export default FriendDetails;