import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Twitter Clone</h1>
      <Link to="/tweets">View Tweets</Link>
    </div>
  );
}

export default Home;

