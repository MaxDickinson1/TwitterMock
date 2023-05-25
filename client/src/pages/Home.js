import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import TweetList from '../components/TweetList';

const Home = () => {
  // Mock array of tweets
  const dummyTweets = [
    { id: 1, text: 'This is a dummy tweet 1' },
    { id: 2, text: 'This is a dummy tweet 2' },
    { id: 3, text: 'This is a dummy tweet 3' },
  ];

  return (
    <Layout>
      <h2>Home Page</h2>
      {/* Render home feed */}
      <TweetList tweets={dummyTweets} />

      {/* Buttons to navigate to other pages */}
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
      <Link to="/explore">
        <button>Go to Explore</button>
      </Link>
      <Link to="/notifications">
        <button>Go to Notifications</button>
      </Link>
      <Link to="/messages">
        <button>Go to Messages</button>
      </Link>
      <Link to="/tweet-details">
        <button>Go to Tweet Details</button>
      </Link>
      <Link to="/compose-tweet">
        <button>Go to Compose Tweet</button>
      </Link>
    </Layout>
  );
};

export default Home;


