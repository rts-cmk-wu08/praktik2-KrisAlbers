import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from "./Components/Main"
import Kontakt from './Templates/Kontakt';
import TilSalg from './Templates/BoligerTilSalg';
import Maeglere from './Templates/Maeglere';
import Farvoritter from './Templates/MineFarvoritter';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Main/>} />
      <Route path="/Main" element={<Main/>} />
      <Route path='/Kontakt' element={<Kontakt/>} />
      <Route path='/TilSalg' element={<TilSalg/>} />
      <Route path='/Maeglere' element={<Maeglere/>} />
      <Route path='/Farvoritter' element={<Farvoritter/>} /> 
    </Route>
  )

)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

