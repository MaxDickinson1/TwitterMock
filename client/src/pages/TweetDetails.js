import React from 'react';
import Layout from '../components/Layout';
import TweetItem from '../components/TweetItem';

const TweetDetails = ({ tweetId }) => {
  // Fetch tweet details based on tweetId

  return (
    <Layout>
      <h2>Tweet Details Page</h2>
      {/* Render tweet details */}
      <TweetItem tweet={tweetDetails} />
    </Layout>
  );
};

export default TweetDetails;
