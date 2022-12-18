import React, { useState, useEffect } from "react";
import TweetBox from "../Views/TweetBox";
import '../CSS/Feed.css';
import Post from "../Views/Post.js";
import Profile from "../Images/profiletest.png";
import test2 from "../Images/bookmark.png";
import {db} from "./firebase.js";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"

function Feed() {
    const [posts, setPosts] = useState({});

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
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2> 
            </div>

            {/* TweetBox */}
            <TweetBox/>
            {/* Post */}

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
                image="https://media.tenor.com/qIM8hK5MOMIAAAAC/overwatch.gif"
                profile="https://cdn.discordapp.com/avatars/228818984340815872/73c1b9a69068e99776da7d0e469e451e.webp?size=128"
            />
            <Post
                display="Jason Lei"
                username="JayC"
                checkmark={true}
                text="I love JoJo. I swear on me mum that I will keep watching until the end!"
                image="https://media.tenor.com/JTudmgcE8ZIAAAAd/giorno-giovanna-jojo.gif"
                profile="https://cdn.discordapp.com/avatars/454323721637855232/471a56b78d842a02f46df863cad24551.webp"
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
                profile="https://cdn.discordapp.com/avatars/369939851404902400/3cdfe52722ba5c131807fec5ed7e234b.webp?size=128"
            />
            <Post
                display="Eleya Rozel"
                username="eleya-rozel"
                checkmark={true}
                text="as a representative of elon musk im here to sue u"
                image="https://yt3.ggpht.com/ytc/AMLnZu9t5LdhRVwNIREeSXveYGh4vamfa5V7EeoEAG_A=s900-c-k-c0x00ffffff-no-rj"
                profile="https://cdn.discordapp.com/avatars/283390809166970880/2710d4bf5f51ec4c0c2006256b94c276.webp?size=240"
            />

        </div>
    )
}

export default Feed