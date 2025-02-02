import { useContext, useEffect } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState,useStoreActions } from "easy-peasy";

function EditPost() {


  // const posts = useStoreState(state => state.posts);
  const editBody = useStoreState(state => state.editBody);
  const editTitle = useStoreState(state => state.editTitle);
  const getPostById = useStoreState(state => state.getPostById)

  const setEditBody = useStoreActions(actions => actions.setEditBody);
  const setEditTitle = useStoreActions(actions => actions.setEditTitle);
  const editPost = useStoreActions(actions => actions.editPost);
  // * The Id comes out of the params is string
  const { id } = useParams();
  const navigate = useNavigate()


  const post = getPostById(id)


async function handleEdit(id){
  console.log(id)
  const datetime = format(new Date(), "MMMM dd, yy pp");

  const updatedPost = { id, title: editTitle, datetime, body: editBody };

  editPost(updatedPost);
navigate('/')  
}








  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, []);
  console.log(post);
  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleEdit(id)}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default EditPost;
