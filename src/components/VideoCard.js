import React, {forwardRef} from 'react';
import "./styles/VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

// this is image base url
const base_url = "https://image.tmdb.org/t/p/original/";
// ref points to something in the page, so in this case, if points to the div with the video card

const VideoCard  = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=" movie poster"/>
            {/* if the text goes more than one line, and the element is pd, so smaller text with ... and the text is from props movie object*/}
            {/* in which there is a text*/}
            <p className="rokas">{movie.overview}</p>
            <h2>{movie.title || movie.original_name}</h2>
            {/* only show the media type if it is available, if not, do not show it*/}
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpIcon />{" "}{movie.vote_count}</p>
        </div>
    );
});

export default VideoCard ;
