import React from "react";

const Filter = () => {
    return (
        <section className="filter">
            <form className="form-control" id="form">
                <input type="search" name="search" id="search" placeholder="Search for a country" />
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