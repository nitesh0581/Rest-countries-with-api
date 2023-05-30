import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Country.css";

const Country = () => {
    const [country, setCountry] = useState([]);

    const { cca2 } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${cca2}`);
            const newCountry = response.data;
            setCountry(newCountry);
        }
        fetchCountryData();
    }, [cca2])
    return (
        <>
            <Link to='/' className="btn btn-light"> <i class="fa-solid fa-arrow-left"></i>Back Home</Link>
            <section className="country">
                {country.map((c, index) => {

                    if (!c) {
                        return <div>No Country Found</div>
                    }
                    let nativeName = [];
                    for (let nativeNamekey in c.name.nativeName) {
                        nativeName.push(c.name.nativeName[nativeNamekey].common);
                    }

                    let currencies = [];
                    for (let currency in c.currencies) {
                        currencies.push(c.currencies[currency].name);
                    }

                    let languages = [];
                    for (let language in c.languages) {
                        languages.push(c.languages[language])
                    }

                    return (
                        <article key={index}>
                            <div className="country-inner">
                                <div className="flag">
                                    <img src={c.flags.png} alt={`${c.flags.png} `} />
                                </div>
                                <div className="country-details">
                                    <div><h2>{c.name.common}</h2>
                                        <h5>Native Name:<span> {nativeName.join(',')}</span></h5>
                                        <h5>Population: <span>{c.population}</span></h5>
                                        <h5>Region: <span>{c.region}</span></h5>
                                        <h5>Subregion: <span>{c.subregion}</span></h5>
                                        <h5>Capital: <span>{c.capital}</span></h5>

                                    </div>
                                    <div><h5>Top Level Domain: <span>{c.tld}</span></h5>
                                        <h5>Currencies: <span>{currencies.join(',')}</span></h5>
                                        <h5>Languages: <span>{languages.join(',')}</span></h5>
                                    </div>

                                </div>
                            </div>
                        </article>
                    )
                })}

            </section>
        </>
    )
}
export default Country;