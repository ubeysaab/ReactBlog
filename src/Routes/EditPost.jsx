import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

function EditPost() {
  const {
    posts,
    handleEdit,
    editBody,
    setEditBody,
    editTitle,
    setEditTitle,
  } = useContext(DataContext)
  // * The Id comes out of the params is string
  const { id } = useParams();

  const post = posts.find((post) => post.id == id);
  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
    // todo : adding post  and setEdits
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
