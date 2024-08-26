import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "../context/DataContext";

function Feed({ posts }) {
  return (
    <>
      {posts.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
}

export default Feed;
