import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
    // <div>
    //   <h3 className="text-center text-2xl ">This is App component</h3>
    //   <h1 className="text-3xl font-bold underline text-red-500 ">
    //     Hello world!
    //   </h1>
    //   <div>
    //     <MyTable />
    //     <p style={{ color: "green" }}>
    //       While we are at it, let’s also try to add some CSS to our app, shall
    //       we? You can use inline styling as well. I will create one App.css file
    //       to add some pretty basic styling.
    //     </p>

    //   </div>

    // </div>
  );
}

export default App;
