import React from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Filter from "./components/Filter";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<><Filter/><Countries/></>}/>     
      <Route exact path="/:cca2" element={<Country/>}/>
    </Routes>
    </>
  );
}


export default App;
