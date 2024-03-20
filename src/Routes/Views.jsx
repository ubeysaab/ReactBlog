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

import api from "../api/posts"

function Views() {
  const [posts, setPosts] = useState([])


  useEffect(()=>{
   async function getData(){
    try {
      let response = await api.get("/posts");
      console.log(response)
      setPosts(response.data)
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      
    }

   }
   getData()
  },[])



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
