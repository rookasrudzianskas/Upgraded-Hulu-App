import React, {useEffect, useState} from 'react';
import "./styles/Results.css";
import VideoCard from "./VideoCard";
import axios from "../axios";
import requests from "../requests";

// takes the prop from the navbar, selected option is going to be option of request we are going to search acccording to it
const Results = ({ selectedOption }) => {

    // we store the data in here
    // the array of the movies
    const [movies, setMovies] = useState([]);

    // this is going to run once and make the api request
    useEffect(() => {
        // run code once, then the Results mounts/loads
        /// async anything what involves going to the server to grab and send the info

        async function fetchData() {
            // because we wati for the response to come back
            // it is going to use the base url from the axios instance
            // it makes the request, with the base url from the axios and the fetch url from the requests
            const request = await axios.get(selectedOption);
            setMovies(request.data.results)
            return request;

        }
        fetchData();
    //    for dependencies, if the selectedOption changes, we have to fire the useEffect once more
    }, [selectedOption])

    return (
        <div className="results">
                {/* mapping per all the movies objects in the movies array of the objects*/}
                {movies?.map((movie) => (
                    // passing all the movie data to the VIdeoCard
                    // key for react to know, that it does not need to rerender all the components, just the changed one
                    <VideoCard key={movie.id} movie={movie} />
                    ))}

        </div>
    );
};

export default Results;
