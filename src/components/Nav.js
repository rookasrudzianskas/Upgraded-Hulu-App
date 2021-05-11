import React from 'react';
import "./styles/Nav.css";
import requests from "../requests";

const Nav = ({setSelectedOption}) => {
    return (
        <div className="nav">
            {/* now then we click this one, it is going to fire the function and setSelectedOption to the request.fetchTrending and so on*/}
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTV)}>TV Movie</h2>
        </div>
    );
};

export default Nav;
