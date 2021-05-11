import React from 'react';
import "./styles/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const Header = () => {
    return (
        <div className="header">
            <div className="header__icons">
            {/*    All icons in here*/}
                <HomeIcon />
                <FlashOnIcon />
                <LiveTvIcon />
                <VideoLibraryIcon />
                <SearchIcon />
                <PersonOutlineIcon />
            </div>

            <img
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt="Hulu Logo"
                />
        </div>
    );
};

export default Header;
