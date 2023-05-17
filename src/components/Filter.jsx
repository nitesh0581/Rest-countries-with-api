import React, { useState } from "react";

const Filter = () => {
    const [searchInput, setSearchInput]=useState("");

    const searchCountries=(value)=>{
        setSearchInput(value);
    }
    
    return (
        <section className="filter">
            <form className="form">
                <input type="search" name="search" id="search" placeholder="Search for a country" onChange={(e)=>searchCountries(e.target.value)} value={searchInput}/>
            </form>

            <div className="region-filter">
                <select name="select" id="select" className="select">
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
}

export default Filter;