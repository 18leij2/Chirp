// Tweet Box

import React from "react";
import '../CSS/TweetBox.css';
import Profile from "../Images/profiletest.png";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <img src={Profile} id="profile"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input 
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL" 
                    type="text"/>
                <button className="tweetBox__tweetButton">Chirp</button>
            </form>
        </div>
    )
}

export default TweetBox