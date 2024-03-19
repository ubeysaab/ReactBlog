import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate"> {post.datetime}</p>
      </Link>
      <p className="postBody">
        {
          // we do that because if the post body is soo long we'll only showing a snippet  of the full body  becuase we don't  wanna more that 25 characters in the initial feed  
          (post.body).length<= 25 ?post.body : `${(post.body).slice(0,25)}...`
        }
      </p>
    </article>
  );
}

export default Post;
