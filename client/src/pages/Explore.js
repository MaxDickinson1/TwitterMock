import React from 'react';
import Layout from '../components/Layout';
import TweetList from '../components/TweetList';

const Explore = () => {
  // Fetch popular tweets and trending topics

  return (
    <Layout>
      <h2>Explore Page</h2>
      {/* Render popular tweets and trending topics */}
      <TweetList tweets={popularTweets} />
    </Layout>
  );
};

export default Explore;

