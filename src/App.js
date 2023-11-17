import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Mohammed Sahil",
      message: "This is my first post!",
      timestamp: new Date(),
    },
    {
      username: "Praveen",
      message: "I love React!",
      timestamp: new Date(),
    },
    {
      username: "Mohammed Irfan",
      message: "Just finished my React project.",
      timestamp: new Date(),
    },
    {
      username: "Selva",
      message: "React is so much fun!",
      timestamp: new Date(),
    },
  ]);
  return (
    <div>
      <Navbar />
      <h1>Welcome to my blog website!</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
