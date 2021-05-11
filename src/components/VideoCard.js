import React from 'react';
import "./styles/VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

// this is image base url
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard  = ({ movie }) => {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=" movie poster"/>
            {/* if the text goes more than one line, and the element is pd, so smaller text with ... and the text is from props movie object*/}
            {/* in which there is a text*/}
            <p className="rokas">{movie.overview}</p>
            <h2>{movie.title || movie.original_name}</h2>
            <p><ThumbUpIcon />{movie.vote_count}</p>
        </div>
    );
};

export default VideoCard ;
