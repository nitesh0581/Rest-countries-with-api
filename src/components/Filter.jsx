import React, { useEffect, useState } from "react";

const Filter = ({
  setCountries,
  countries,
}) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  // Search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchValue) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setCountries(filteredCountries);
    } else {
      setCountries(countries);
    }
  };

  // Filter by region
  const filterRegions = async (region) => {
    if (region.desc === "All") {
      setCountries(countries);
    } else {
      const url = `https://restcountries.com/v3.1/region/${region}`;
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    }
  };

  useEffect(() => {
    filterRegions("All");
    // eslint-disable-next-line
  }, []);

    return (
        <section className="filter">
            <form className="form">
                <input type="search" name="search" id="search" placeholder="Search for a country" autoComplete="off" onChange={(e) => searchCountries(e.target.value)} value={searchInput} />
            </form>

            <div className="region-filter">
                <select name="select" id="select" className="select" onChange={(e) => filterRegions(e.target.value)} value={regions.name}>
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
};


export default Filter;