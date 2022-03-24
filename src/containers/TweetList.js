import React from "react";
import { connect } from "react-redux";
import { Tweet } from "react-twitter-widgets";
import "./TweetList.css";
let TweetList = ({ tweets }) => (
  <div className="tweets">
    {tweets ? (
      tweets.map((tweet) => (
        <div key={tweet.id}>
          <Tweet tweetId={tweet.id} />
        </div>
      ))
    ) : (
      <p style={{ color: "grey" }}>
        Type a keyword and hit search icon for tweets!
      </p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

TweetList = connect(mapStateToProps, null)(TweetList);

export default TweetList;
