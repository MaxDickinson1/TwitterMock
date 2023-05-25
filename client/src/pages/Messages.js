import React from 'react';
import Layout from '../components/Layout';
import MessageList from '../components/MessageList';

const Messages = () => {
  // Fetch user's messages

  return (
    <Layout>
      <h2>Messages Page</h2>
      {/* Render messages */}
      <MessageList messages={userMessages} />
    </Layout>
  );
};

export default Messages;

