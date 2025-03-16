import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Jobs from './components/Jobs/Jobs';
import Blog from './components/Blog/Blog';
import Stat from './components/Stat/Stat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/statistics",
        element: <Stat></Stat>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
