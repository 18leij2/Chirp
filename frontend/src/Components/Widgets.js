import React from "react";
import '../CSS/Widgets.css';
import SearchIcon from "../Images/searchIcon.png";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <img src={SearchIcon} id="search_icon"/>
                <input placeholder="Search Chirp" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId="1596980041149476864"/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="osugame"
                    options={{ height: 400 }}
                />
                <div className="ShareButtonSpacing">
                    <TwitterShareButton
                    url={"https://dining.gatech.edu/"}
                    options={{ text: "The only place you'll ever need to go to get our daily nutrition", via: "MrZ" }}
                />
                </div>
                
            </div>

        </div>
    )
}

export default Widgets