import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({Friend}) => {
    // console.log(Friend);
    const {name,email,id}= Friend;
    return (
        <div className='dibba'>
            <h2>{name}</h2>
            <p>email: {email}</p>
           
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;