import React from 'react';
import '../CSS/Post.css';
import Profile from "../Images/profiletest.png";
import Checkmark from "../Images/checkmarkV.png";
import Chat from "../Images/chat.png";
import Rechirp from "../Images/rechirp.png";
import Heart from "../Images/heart.png";
import Share from "../Images/share.png";

function Post({display, username, checkmark, text, image, profile}) {
    return (
        <div className='post'>
            <div className='post_profile'>
            <img src={Profile} id="icon_profile"/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="header_text">
                        <h3>
                            Joshua Wu{" "}
                            <span className="post_span">
                                <img src={Checkmark} id="checkmark_badge"/> @jo4467  
                            </span>
                        </h3>
                    </div>
                    <div className="header_description">
                        <p>I love Overwatch. I swear on me mum that I will play this game until I win!</p>
                    </div>
                </div>
                <img src="https://media.tenor.com/qIM8hK5MOMIAAAAC/overwatch.gif" alt=""/>
                <div className="post_footer">
                    <img src={Chat} id="chat_icon"/>
                    <img src={Rechirp} id="rechirp_icon"/>
                    <img src={Heart} id="heart_icon"/>
                    <img src={Share} id="share_icon"/>
                </div>
            </div>
        </div>
    )
}

export default Post;