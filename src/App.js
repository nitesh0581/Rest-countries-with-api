import axios from "axios";
import React from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Filter from "./components/Filter";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url)
      const newCountries = response.data
      newCountries.forEach(country => {
        if (!country.capital) {
          country.capital = ['Not available'];
        }
      })
      setCountries(newCountries)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<><Filter setCountries={setCountries} countries={countries} /><Countries countries={countries} /></>} />
        <Route exact path="/:cca2" element={<Country />} />
      </Routes>
    </>
  );
}


export default App;
