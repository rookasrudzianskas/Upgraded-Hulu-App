import React from 'react';
import "./styles/VideoCard.css";

const VideoCard  = ({ movie }) => {
    return (
        <div className="videoCard">
            <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Best-tv-shows-Netflix-V3-1.jpg" alt=""/>
            <p>Lorem ipsum dolor sit.</p>
            <h2>Movie title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptas?</p>
        </div>
    );
};

export default VideoCard ;
