import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PokeHome from './PokeHome';
import PokeSearch from './PokeSearch';
import PokeDetails from './PokeDetails';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<PokeHome/>}/>
        <Route path='/search' element={<PokeSearch/>}/>
        <Route path='/pokemon/:id?' element={<PokeDetails/>}/>
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  )
};

export default Main;
