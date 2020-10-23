import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(
        snapshot.docs.map(doc => {
          return { id: doc.id, dataSet: doc.data() };
        })
      );
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map(post => (
          <Post
            key={post.id}
            displayName={post.dataSet.data}
            username={post.dataSet.username}
            verified={post.dataSet.verified}
            text={post.dataSet.text}
            avatar={post.dataSet.avatar}
            image={post.dataSet.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
