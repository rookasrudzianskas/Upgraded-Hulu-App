import React, {useState} from 'react';
import "./styles/Results.css";
import VideoCard from "./VideoCard";

const Results = () => {

    // we store the data in here
    // the array of the movies
    const [movies, setMovies] = useState([]);



    return (
        <div className="results">
                {/* mapping per all the movies objects in the movies array of the objects*/}
                {movies.map((movie) => (
                    <VideoCard />
                    ))}

        </div>
    );
};

export default Results;
