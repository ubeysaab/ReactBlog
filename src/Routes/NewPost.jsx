import { useStoreState, useStoreActions, useStore } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import { format } from "date-fns";

const NewPost = () => {
  const posts = useStoreState((state) => state.posts);
  const postBody = useStoreState((state) => state.postBody);
  const postTitle = useStoreState((state) => state.postTitle);

  //   actions
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const savePost = useStoreActions((actions) => actions.savePost);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    const date = new Date()
    const newPost = {
      id:uuid() ,
      title: postTitle,
      datetime : format(date,"MMMM  d, yyyy pp"),
      body: postBody,
    };

    savePost(newPost);

    navigate("/"); //We cannot call hooks inside of our store  so we call it here
  }

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
