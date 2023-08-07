import React, { useEffect, useState } from "react";
import "./Countries.css";
import search from "./search.png";
import base from "../../../Utils/axios";
import countryDataJson from "../../../Country Data/data.json";

function Countries() {
  const [coutries, setCountries] = useState([]);
  const [region, setRegion] = useState("All Regions");
  const [searchItem, setSearchItem] = useState("");

  const fetchKeyword = "all";

  useEffect(() => {
    function showCountries(countryData) {
      let dataToShow = [];

      if (searchItem === "" && region === "All Regions") {
        setCountries(countryData);
      } else if (searchItem === "" && region !== "All Regions") {
        countryData.map((country) => {
          if (country.region === region) {
            dataToShow.push(country);
          }
        });
        setCountries(dataToShow);
      } else if (searchItem !== "" && region !== "All Regions") {
        let countryToBeSearched = new RegExp(searchItem);
        countryData.map((country) => {
          if (
            countryToBeSearched === country.name.toLowerCase() &&
            country.region === region
          ) {
            dataToShow.push(country);
          }
        });
      } else {
        let countryToBeSearched = new RegExp(searchItem);
        countryData.map((country) => {
          if (countryToBeSearched === country.name.toLowerCase()) {
            dataToShow.push(country);
          }
        });
      }
    }

    showCountries(countryDataJson);
  }, [searchItem || region]);

  // console.log(coutries);

  function handleSearch(event) {
    const item = event.target.value;
    setSearchItem(item);
  }

  function handleRegion(event) {
    const region = event.target.value;
    setRegion(region);
  }

  return (
    <div className="countries">
      <div className="top">
        <div className="searchBox">
          <div className="search__image">
            <img src={search} alt="" className="searchImage" />
          </div>
          <div className="search__box">
            <input
              type="text"
              placeholder="Search for a country"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="dropdown__regions">
          <div className="secondShowList">
            <select
              className={`secondShowList`}
              name="continents"
              id=""
              onChange={handleRegion}
            >
              <option value="All Regions">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="results">
          {coutries.slice(0, 16).map((country) => {
            return (
              <a
                href={`/country/${country.name}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <div className="country">
                  <img src={country.flag} alt="" className="flag" />
                  <div className="contentInHome">
                    <h1 className="country__name">{country.name}</h1>
                    <div className="primary__details">
                      <p>
                        <b>Population: </b>
                        {country.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                      <p>
                        <b>Region: </b>
                        {country.region}
                      </p>
                      <p>
                        <b>Capital: </b>
                        {country.capital}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Countries;
