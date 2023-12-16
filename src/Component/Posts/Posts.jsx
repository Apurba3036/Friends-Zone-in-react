import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Single Post/Post';

const Posts = () => {
    const Posts=useLoaderData();
    // console.log(Posts)
    return (
        <div className='co'>
            {
                Posts.map(Pos=><Post key={Pos.id} Pos={Pos}></Post>)
            }
        </div>
    );
};

export default Posts;