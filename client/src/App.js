import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import TweetDetails from "./pages/TweetDetails";
import ComposeTweet from "./pages/ComposeTweet";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tweet/:id" element={<TweetDetails />} />
          <Route path="/compose" element={<ComposeTweet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
