import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import First from './Component/First/First';
import Friend from './Component/Friend/Friends';
import Friends from './Component/Friend/Friends';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetail/PostDetails';
import Notfound from './Component/Notfound/Notfound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<First></First>
      },
      {
        path:"Friends",
        element: <Friends></Friends>,
        loader: ()=>fetch(`https://jsonplaceholder.typicode.com/users`)
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        
        
      }
      ,
      {
        path: 'Posts',
        element: <Posts></Posts>,
        loader: ()=>fetch(`https://jsonplaceholder.typicode.com/posts`)

      },
      {
        path: 'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      }
      ,
      {
        path: "About",
        element: <About></About>
      },

      {
         path: "Contact",
         element: <Contact></Contact>

      },
      {
        path:'*',
        element: <Notfound></Notfound>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
