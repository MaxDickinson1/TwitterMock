import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/tweets')
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Tweets</h2>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet._id}>
            <Link to={`http://localhost:5001/tweets/${tweet._id}`}>{tweet.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetList;


