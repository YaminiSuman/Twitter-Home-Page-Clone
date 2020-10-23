import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Yamini",
      username: "yaminisuman",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160600109/57845256-vector-female-face-avatar-logo-template-pictogram-button-round-trendy-flat-icon-with-women-for-busin.jpg"
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160600109/57845256-vector-female-face-avatar-logo-template-pictogram-button-round-trendy-flat-icon-with-women-for-busin.jpg" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
