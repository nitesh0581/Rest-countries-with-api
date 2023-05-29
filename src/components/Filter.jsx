import React from "react";

const Filter = ({
  setRegion,
  searchInput,
  setSearchInput
}) => {

  const filterRegions=(region)=>{
    setRegion(region);
  }

  return (
    <section className="filter">
      <form className="form">
        <input type="search" name="search" id="search" placeholder="Search for a country" autoComplete="off" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
      </form>

      <div className="region-filter">
        <select name="select" id="select" className="select" onChange={(e) => filterRegions(e.target.value)}>
          <option value="none">Filter by Region</option>
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