import React from 'react';
import Layout from '../components/Layout';
import TweetForm from '../components/TweetForm';

const ComposeTweet = () => {
  // Handle tweet submission logic

  return (
    <Layout>
      <h2>Compose Tweet Page</h2>
      {/* Render tweet form */}
      <TweetForm />
    </Layout>
  );
};

export default ComposeTweet;
