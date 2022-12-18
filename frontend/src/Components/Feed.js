// Feed Section

import React, { useState, useEffect } from "react";
import TweetBox from "../Views/TweetBox";
import '../CSS/Feed.css';
import Post from "../Views/Post.js";
import jasonProfile from "../Images/jasonpfp.webp";
import joProfile from "../Images/jopfp.webp";
import ericProfile from "../Images/ericpfp.webp";
import eleyaProfile from "../Images/eleyapfp.webp";

function Feed() {
    // Commented code, used when we expand to databasing the tweets
    // const [posts, setPosts] = useState({});

    // useEffect(() => {
    //     const q = query(collection(db, 'posts'), orderBy('created', 'desc'))
    //     onSnapshot(q, (querySnapshot) => {
    //       setPosts(querySnapshot.docs.map(doc => ({
    //         display: doc.display,
    //         username: doc.username,
    //         checkmark: doc.checkmark,
    //         text: doc.text,
    //         image: doc.image
    //       })))
    //     })
    //   },[])

    return (
        <div className="feed">
            {/* Header Section */}
            <div className="feed_header">
                <h2>Home</h2> 
            </div>

            {/* TweetBox Section */}
            <TweetBox/>
            
            {/* Post Section */}

            {/* {posts.map((post) => (
            <Post
            display={post.display}
            username={post.username}
            checkmark={post.checkmark}
            text={post.text}
            image={post.image}
            />
            ))} */}

            <Post
                display="Joshua Wu"
                username="jo4467"
                checkmark={true}
                text="I love Overwatch. I swear on me mum that I will play this game until I wins!"
                image="https://media.tenor.com/Q3qudfK_-AsAAAAS/junkerqueen-overwatch.gif"
                profile={joProfile}
            />
            <Post
                display="Jason Lei"
                username="JayC"
                checkmark={true}
                text="I love JoJo. I swear on me mum that I will keep watching until the end!"
                image="https://media.tenor.com/JTudmgcE8ZIAAAAd/giorno-giovanna-jojo.gif"
                profile={jasonProfile}
            />
            <Post
                display="Robert Langer"
                username="BeonyondBurger"
                checkmark={false}
                text="Good Book!"
                image="https://static.wixstatic.com/media/a63a11_2d89fae362414287a9ff739ba21d59d8~mv2.jpg/v1/fit/w_1164,h_789,q_90/a63a11_2d89fae362414287a9ff739ba21d59d8~mv2.webp"
                profile="https://upload.wikimedia.org/wikipedia/commons/9/97/Ryukin_goldfish_plate.jpg"
            />
            <Post
                display="Eric Zhang"
                username="EricZ"
                checkmark={false}
                text="10/10 Experience, Would never come again"
                image="https://nique.net/wp-content/uploads/2017/09/westvillage-color.jpg"
                profile={ericProfile}
            />
            <Post
                display="Eleya Rozel"
                username="eleya-rozel"
                checkmark={true}
                text="as a representative of elon musk im here to sue u"
                image="https://yt3.ggpht.com/ytc/AMLnZu9t5LdhRVwNIREeSXveYGh4vamfa5V7EeoEAG_A=s900-c-k-c0x00ffffff-no-rj"
                profile={eleyaProfile}
            />
        </div>
    )
}

export default Feed