import React from 'react'
import { Link,useParams } from 'react-router-dom'
function PostPage({posts,handleDelete}) {

  let {id} = useParams();
  // params will return object  return string by the way
  const post = posts.find(post => post.id == id);
   
  return (
    <main>
     {
      post ? (
        <article className="post">
        {post && 
          <>
          <h1>{post.title}</h1>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">
            {post.body}
          </p>
          <button onClick={()=>handleDelete(id)}>

            Delete
          </button>
          </>
        }
      </article>
      ):" There is no post like this"
     }
    </main>
  )
}

export default PostPage