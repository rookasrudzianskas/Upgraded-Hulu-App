import React from 'react';
import "./styles/VideoCard.css";

// this is image base url
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard  = ({ movie }) => {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=" movie poster"/>
            <p>{movie.overview}</p>
            <h2>{}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptas?</p>
        </div>
    );
};

export default VideoCard ;
