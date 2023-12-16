import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({Pos}) => {
    console.log(Pos);
    const {id,title,body}= Pos;
    const navigate=useNavigate();
    const handlenavigation=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='dibba'>
            <h2>Title: {title}</h2>
             <p>{body}</p>
             <Link to={`/post/${id}`}>Details</Link><br /><br />
             <Link to={`/post/${id}`}><button>Read more..</button></Link><br /><br />
             <button onClick={handlenavigation}>With button handler</button>
        </div>
    );
};

export default Post;