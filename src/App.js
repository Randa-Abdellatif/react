import logo from './logo.svg';
import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Portfolio from './component/Portfolio/Portfolio';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';


let routers = createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {path:'' , element:<Home/>},
    {path:'Portfolio' , element:<Portfolio/>},
    {path:'About' , element:<About/>},
    {path:'Contact' , element:<Contact/>},

  ]
}
])


function App() {
  return <RouterProvider router={routers}></RouterProvider>
 
   
}

export default App;
