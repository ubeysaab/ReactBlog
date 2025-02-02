 import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStoreState,useStoreActions } from "easy-peasy";
function PostPage() {
  let navigate = useNavigate();
  const deletePost = useStoreActions(actions => actions.deletePost);
  const {id} = useParams()
  // ! Instead of the line below we defined computed(function) in easypeasy so we'll call it 
  // //const post = posts.find((post) => post.id == id);
  const getPostById = useStoreState( state => state.getPostById) // will return a function 
  const post = getPostById(id)



  async function handleDelete(id){
    deletePost(id)
    navigate("/")
  }





  return (
    <main>
      {post ? (
        <article className="post">
          {post && (
            <>
              <h1>{post.title}</h1>
              <p className="postDate">{post.datetime}</p>
              <p className="postBody">{post.body}</p>
              <button onClick={() => handleDelete(id)}>Delete</button>

              <button onClick={() => navigate(`/edit/${id}`)}>Edit </button>
            </>
          )}
        </article>
      ) : (
        " There is no post like this"
      )}
    </main>
  );
}

export default PostPage;
