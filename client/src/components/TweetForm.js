import React, { useState } from 'react';

const TweetForm = () => {
  const [tweetText, setTweetText] = useState('');

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the tweet
  };

  return (
    <form onSubmit={handleTweetSubmit}>
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        placeholder="Compose your tweet..."
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetForm;
