import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";
import NavBar from "../NavBar/NavBar";
import loading from "../../Static/loading2.gif";
import leftArrow from "../../Static/left-arrow.png";
import Footer from "../NavBar/footer";

import countryDataJson from "../../Country Data/data.json";

function Details() {
  // const testt = { name: "Sri Lanka" };

  const { countryId } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function fetchingCountryInfo() {
      await fetch(`https://restcountries.eu/rest/v2/name/${countryId}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
        });
    }

    function fetchCountryInfo() {
      countryDataJson.map((country) => {
        if (country.name === countryId) {
          setCountry([country]);
        }
      });
    }

    fetchCountryInfo();
  }, [countryId]);

  return (
    <div>
      <NavBar />
      <a href="/" className="backButton">
        <img src={leftArrow} alt="" />
        Back
      </a>
      {country.length > 0 ? (
        <div className="detailsMain">
          <img src={country[0].flag} alt="" className="flag__details" />
          <div className="content">
            {<h1 className="detail__title">{country[0].name}</h1>}
            <div className="details">
              <div className="firstPart">
                <p>
                  <b>Native Name: </b>
                  {country[0].nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {country[0].population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p>
                  <b>Region: </b>
                  {country[0].region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {country[0].subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {country[0].capital}
                </p>
              </div>
              <div className="secondPart">
                <p>
                  <b>Top Level Domain: </b>
                  {country[0].topLevelDomain}
                </p>
                <p>
                  <b>Currencies: </b>
                  {country[0].currencies[0].name}
                </p>
                <p>
                  <b>Languages: </b>
                  {country[0].languages[0].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img className="loadingGif" src={loading} alt="" />
      )}
      <Footer />
    </div>
  );
}

export default Details;
