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
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState('none');


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url)
      const newCountries = response.data
      newCountries.forEach(country => {
        if (!country.capital) {
          country.capital = ['Not available'];
        }
      })
      setCountries(newCountries);
    }
    fetchData()
  }, [])

  let countriesToRender = [];

  if (countries.length > 0) {
    if (region === 'none') {
      if (searchInput !== '') {
        countriesToRender = countries.filter(country => {
          return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
        })
      } else {
        countriesToRender = countries
      }
    } else {
      if (searchInput !== '') {
        countriesToRender = countries.filter(country =>
          country.name.common.toLowerCase().includes(searchInput.toLowerCase())
          && country.region === region)
      } else {
        countriesToRender = countries.filter(country => country.region === region)
      }
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<>
          <Filter setRegion={setRegion} searchInput={searchInput} setSearchInput={setSearchInput} />
          {(countriesToRender.length > 0) ?
            <Countries countries={countriesToRender} /> : <div>Loading...</div>
          }
        </>} />

        <Route exact path="/:cca2" element={<Country />} />
      </Routes>
    </>
  );
}



export default App;
