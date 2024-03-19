import { useEffect, useState } from "react";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";

import { format } from "date-fns";

// - Components
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Views() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorm ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);

  let navigate = useNavigate();

  function handleDelete(id) {
    let newPosts = posts.filter((post) => post.id != id);
    setPosts(newPosts);
    navigate("/");
  }

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    let filteredSearch = posts.filter(
      (post) =>
        post["title"].toLowerCase().includes(search.toLowerCase()) ||
        post["body"].toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredSearch.reverse());
  }, [search, posts]);

  // * to handle submit the new post
  function handleSubmit(e) {
    let now = new Date();
    e.preventDefault();

    let newPost = {
      id: posts.length + 1,
      title: postTitle,
      datetime: format(now, "LLLL dd yyyy  pp"),
      body: postBody,
    };

    setPostTitle("");
    setPostBody("");
    let newPostsArray = [...posts,newPost];
    setPosts(newPostsArray);
    alert("new post added succesfully U will be render to posts page");
    navigate("/");
  }

  return (
    <>
      <Header title={"ubey blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/">
          <Route index element={<Home posts={searchResults} />} />
          <Route
            path="post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                setPostTitle={setPostTitle}
              />
            }
          />
          <Route
            path="post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Views;
