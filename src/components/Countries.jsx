import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = "https://restcountries.com/v3.1/all";
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const fetchCountriesData = async () => {
            const response = await fetch(url);
            const newCountries = await response.json();
            setCountries(newCountries);
        }
        fetchCountriesData();
    }, []);

    return (
        <>
            <section className='grid'>
                {countries.map((country,index) =>
                    // const { name, population, capital, flags, region } = country;
                    <Link to={`/${country.cca2}`} key={index}>{
                        <article >

                            <div>
                                <img src={country.flags.png} alt={country.flags.alt} />
                            </div>

                            <div className="details">
                                <h3 className='country-name'><span>{country.name.common}</span></h3>
                                <h4>Population: <span>{country.population}</span></h4>
                                <h4>Region: <span>{country.region}</span></h4>
                                <h4>Capital: <span>{country.capital}</span></h4>
                            </div>


                        </article>
                }
                    </Link>
                )}
            </section >
        </>
    )
}

export default Countries;