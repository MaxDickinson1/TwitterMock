import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TweetDetails() {
  const { id } = useParams();
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/tweets/${id}`)
      .then(response => {
        setTweet(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!tweet) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Tweet Details</h2>
      <p>{tweet.content}</p>
      <p>Author: {tweet.author}</p>
    </div>
  );
}

export default TweetDetails;


