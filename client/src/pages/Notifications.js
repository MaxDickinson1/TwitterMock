import React from 'react';
import Layout from '../components/Layout';
import TweetList from '../components/TweetList';

const Notifications = () => {
  // Fetch notification data

  return (
    <Layout>
      <h2>Notifications Page</h2>
      {/* Render notification content */}
      <TweetList tweets={notificationTweets} />
    </Layout>
  );
};

export default Notifications;

