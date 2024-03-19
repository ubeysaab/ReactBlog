import React from 'react'
import Post from "./Post"

function Feed({posts}) {
  return (
    <>
      {posts.map(item => (
        <Post key ={item.id} post={item}/>
      ))}
    </>
  )
}

export default Feed